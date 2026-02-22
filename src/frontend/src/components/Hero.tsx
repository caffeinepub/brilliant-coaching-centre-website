import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      t(
        'Hello! I would like to enquire about admission at Brilliant Coaching Centre.',
        'হ্যালো! আমি ব্রিলিয়ান্ট কোচিং সেন্টারে ভর্তি সম্পর্কে জানতে চাই।'
      )
    );
    window.open(`https://wa.me/919883448350?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5 animate-gradient" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-maroon/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img
            src="/assets/generated/logo.dim_512x512.png"
            alt="Brilliant Coaching Centre Logo"
            className="w-32 h-32 md:w-40 md:h-40 mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Institute Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-gold animate-fade-in-up">
          {t('Brilliant Coaching Centre', 'ব্রিলিয়ান্ট কোচিং সেন্টার')}
        </h1>

        {/* Tagline */}
        <div className="flex items-center justify-center gap-3 md:gap-6 mb-12 text-lg md:text-2xl text-gold/80 animate-fade-in-up delay-200">
          <span className="font-semibold">{t('Education', 'শিক্ষা')}</span>
          <span className="text-maroon">•</span>
          <span className="font-semibold">{t('Discipline', 'শৃঙ্খলা')}</span>
          <span className="text-maroon">•</span>
          <span className="font-semibold">{t('Success', 'সাফল্য')}</span>
        </div>

        {/* CTA Button */}
        <Button
          onClick={handleWhatsAppClick}
          size="lg"
          className="bg-maroon hover:bg-maroon/90 text-white px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-maroon/50 transition-all duration-300 hover:scale-105 animate-fade-in-up delay-300"
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          {t('Admission Enquiry', 'ভর্তির জন্য যোগাযোগ করুন')}
        </Button>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-gold/50 rounded-full animate-scroll" />
          </div>
        </div>
      </div>
    </section>
  );
}
