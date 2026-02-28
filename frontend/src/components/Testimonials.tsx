import { useLanguage } from '../contexts/LanguageContext';
import { MessageSquare } from 'lucide-react';

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-b from-background via-accent/5 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-maroon/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Page Title */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-gold mb-4">
            {t('What Our Students Say', 'আমাদের শিক্ষার্থীরা কী বলে')}
          </h1>
          <div className="w-24 h-1 bg-maroon mx-auto mb-6" />
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            {t(
              'Read real experiences from our students and alumni, and share your own journey.',
              'আমাদের শিক্ষার্থী এবং প্রাক্তন ছাত্রদের প্রকৃত অভিজ্ঞতা পড়ুন এবং আপনার নিজের যাত্রা শেয়ার করুন।'
            )}
          </p>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-20 text-center animate-fade-in-up delay-200">
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
            {t(
              "At Brilliant Coaching Centre, we focus on building confidence, clarity, and academic excellence. Don't just take our word for it—hear from current and past students about how our teachers, notes, and guidance have helped them succeed.",
              'ব্রিলিয়ান্ট কোচিং সেন্টারে, আমরা আত্মবিশ্বাস, স্পষ্টতা এবং একাডেমিক উৎকর্ষতা তৈরিতে মনোনিবেশ করি। শুধু আমাদের কথা নয়—বর্তমান এবং প্রাক্তন শিক্ষার্থীদের কাছ থেকে শুনুন কীভাবে আমাদের শিক্ষক, নোট এবং নির্দেশনা তাদের সফল হতে সাহায্য করেছে।'
            )}
          </p>
        </div>

        {/* Blank State Message */}
        <div className="max-w-2xl mx-auto text-center py-16 animate-fade-in-up delay-400">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center">
              <MessageSquare className="w-10 h-10 text-gold" />
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gold mb-4">
            {t('No reviews yet', 'এখনও কোনো রিভিউ নেই')}
          </h3>
          <p className="text-lg md:text-xl text-foreground/80">
            {t(
              'Be the first to share your experience!',
              'আপনার অভিজ্ঞতা শেয়ার করার প্রথম হন!'
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
