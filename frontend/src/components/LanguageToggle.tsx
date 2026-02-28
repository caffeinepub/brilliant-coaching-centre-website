import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 bg-maroon hover:bg-maroon/90 text-white shadow-2xl hover:shadow-maroon/50 transition-all duration-300 hover:scale-105 rounded-full px-6 py-6"
      size="lg"
    >
      <Languages className="mr-2 h-5 w-5" />
      <span className="font-semibold">{language === 'en' ? 'বাংলা' : 'English'}</span>
    </Button>
  );
}
