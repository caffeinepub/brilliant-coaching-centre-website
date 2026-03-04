import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const NAV_LINKS = [
  { href: "#about", en: "About", bn: "সম্পর্কে" },
  { href: "#courses", en: "Courses", bn: "কোর্স" },
  { href: "#teachers", en: "Teachers", bn: "শিক্ষক" },
  { href: "#gallery", en: "Gallery", bn: "গ্যালারি" },
  { href: "#admission", en: "Admission", bn: "ভর্তি" },
  { href: "#testimonials", en: "Reviews", bn: "রিভিউ" },
  { href: "#contact", en: "Contact", bn: "যোগাযোগ" },
];

export default function Navigation() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      data-ocid="nav.panel"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Name */}
          <button
            type="button"
            data-ocid="nav.logo.button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <img
              src="/assets/generated/brilliant-coaching-centre-logo.dim_800x800.png"
              alt="BCC Logo"
              className="w-8 h-8 rounded-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            />
            <span className="font-bold text-gold text-sm md:text-base leading-tight hidden sm:block">
              {t("Brilliant Coaching", "ব্রিলিয়ান্ট কোচিং")}
            </span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.href}
                data-ocid={`nav.${link.en.toLowerCase()}.link`}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-1.5 text-sm font-medium text-foreground/70 hover:text-gold transition-colors duration-200 rounded-lg hover:bg-gold/10"
              >
                {t(link.en, link.bn)}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            data-ocid="nav.menu_toggle.button"
            className="md:hidden p-2 text-foreground/70 hover:text-gold transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-b border-border shadow-lg">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.href}
                data-ocid={`nav.mobile.${link.en.toLowerCase()}.link`}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-3 py-2.5 text-sm font-medium text-foreground/80 hover:text-gold hover:bg-gold/10 rounded-lg transition-colors"
              >
                {t(link.en, link.bn)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
