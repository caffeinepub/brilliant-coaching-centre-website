import { useLanguage } from '../contexts/LanguageContext';
import { Heart } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'brilliant-coaching-centre'
  );

  return (
    <footer className="relative bg-gradient-to-b from-background to-accent/10 border-t border-border py-12 overflow-hidden">
      {/* Watermark Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="/assets/generated/logo.dim_512x512.png"
          alt="Brilliant Coaching Centre"
          className="w-64 h-64 md:w-96 md:h-96 opacity-[0.03] select-none"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6">
          {/* Logo and Name */}
          <div className="flex flex-col items-center space-y-4">
            <img
              src="/assets/generated/logo.dim_512x512.png"
              alt="Brilliant Coaching Centre"
              className="w-16 h-16 opacity-80"
            />
            <h3 className="text-2xl font-bold text-gold">
              {t('Brilliant Coaching Centre', 'ব্রিলিয়ান্ট কোচিং সেন্টার')}
            </h3>
          </div>

          {/* Tagline */}
          <p className="text-foreground/60 max-w-md mx-auto">
            {t(
              'Empowering students with quality education, discipline, and success.',
              'মানসম্পন্ন শিক্ষা, শৃঙ্খলা এবং সাফল্যের সাথে শিক্ষার্থীদের ক্ষমতায়ন।'
            )}
          </p>

          {/* Divider */}
          <div className="w-24 h-0.5 bg-maroon/30 mx-auto" />

          {/* Contact Info */}
          <div className="text-foreground/70 space-y-1">
            <p>{t('Puabagan, Bankura, West Bengal', 'পুয়াবাগান, বাঁকুড়া, পশ্চিমবঙ্গ')}</p>
            <p>{t('Phone & WhatsApp:', 'ফোন ও হোয়াটসঅ্যাপ:')} +91 98834 48350</p>
          </div>

          {/* Divider */}
          <div className="w-24 h-0.5 bg-maroon/30 mx-auto" />

          {/* Copyright and Attribution */}
          <div className="space-y-2 text-sm text-foreground/50">
            <p>
              © {currentYear} {t('Brilliant Coaching Centre. All rights reserved.', 'ব্রিলিয়ান্ট কোচিং সেন্টার। সর্বস্বত্ব সংরক্ষিত।')}
            </p>
            <p className="flex items-center justify-center gap-1">
              {t('Built with', 'তৈরি করেছে')}{' '}
              <Heart className="w-4 h-4 text-maroon fill-maroon inline-block" />{' '}
              {t('using', 'ব্যবহার করে')}{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-maroon transition-colors duration-300 font-semibold"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
