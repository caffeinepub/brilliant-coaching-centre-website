import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const { t } = useLanguage();

  const handleClick = () => {
    const message = encodeURIComponent(
      t(
        'Hello! I would like to know more about Brilliant Coaching Centre.',
        'হ্যালো! আমি ব্রিলিয়ান্ট কোচিং সেন্টার সম্পর্কে আরও জানতে চাই।'
      )
    );
    window.open(`https://wa.me/919883448350?text=${message}`, '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-110 rounded-full w-16 h-16 p-0"
      size="icon"
      aria-label={t('Contact via WhatsApp', 'হোয়াটসঅ্যাপের মাধ্যমে যোগাযোগ করুন')}
    >
      <MessageCircle className="h-8 w-8" />
    </Button>
  );
}
