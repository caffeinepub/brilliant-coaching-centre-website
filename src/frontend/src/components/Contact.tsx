import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: t('Address', 'ঠিকানা'),
      content: t('Puabagan, Bankura, West Bengal', 'পুয়াবাগান, বাঁকুড়া, পশ্চিমবঙ্গ'),
      action: null,
    },
    {
      icon: Phone,
      title: t('Phone', 'ফোন'),
      content: '+91 98834 48350',
      action: () => window.open('tel:+919883448350'),
    },
    {
      icon: MessageCircle,
      title: t('WhatsApp', 'হোয়াটসঅ্যাপ'),
      content: '+91 98834 48350',
      action: () => {
        const message = encodeURIComponent(
          t(
            'Hello! I would like to know more about Brilliant Coaching Centre.',
            'হ্যালো! আমি ব্রিলিয়ান্ট কোচিং সেন্টার সম্পর্কে আরও জানতে চাই।'
          )
        );
        window.open(`https://wa.me/919883448350?text=${message}`, '_blank');
      },
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gold mb-4">
            {t('Contact Us', 'যোগাযোগ করুন')}
          </h2>
          <div className="w-24 h-1 bg-maroon mx-auto mb-8" />
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            {t(
              'Get in touch with us for any queries or to schedule a visit to our coaching centre.',
              'যেকোনো প্রশ্নের জন্য বা আমাদের কোচিং সেন্টার পরিদর্শনের সময়সূচী করতে আমাদের সাথে যোগাযোগ করুন।'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="group bg-card border-2 border-border rounded-2xl p-8 text-center hover:border-maroon/50 transition-all duration-300 hover:shadow-xl hover:shadow-maroon/10 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-maroon to-maroon/80 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <info.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gold mb-3">{info.title}</h3>
              <p className="text-foreground/80 mb-4">{info.content}</p>
              {info.action && (
                <Button
                  onClick={info.action}
                  variant="outline"
                  className="border-maroon text-maroon hover:bg-maroon hover:text-white transition-all duration-300"
                >
                  {t('Contact', 'যোগাযোগ')}
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="bg-card border-2 border-border rounded-2xl overflow-hidden h-64 md:h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-maroon mx-auto mb-4" />
              <p className="text-foreground/60">
                {t('Puabagan, Bankura, West Bengal', 'পুয়াবাগান, বাঁকুড়া, পশ্চিমবঙ্গ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
