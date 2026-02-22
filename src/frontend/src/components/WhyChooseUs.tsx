import { useLanguage } from '../contexts/LanguageContext';
import { Users, Target, ClipboardCheck, Smile, DollarSign } from 'lucide-react';

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Users,
      title: t('Experienced & Caring Teachers', 'অভিজ্ঞ ও যত্নশীল শিক্ষক'),
      description: t(
        'Our dedicated teachers bring years of experience and genuine care for every student.',
        'আমাদের নিবেদিত শিক্ষকরা বছরের অভিজ্ঞতা এবং প্রতিটি শিক্ষার্থীর জন্য প্রকৃত যত্ন নিয়ে আসেন।'
      ),
    },
    {
      icon: Target,
      title: t('Small Batch Size', 'ছোট ব্যাচ আকার'),
      description: t(
        'Limited students per batch ensure personalized attention and better learning outcomes.',
        'প্রতি ব্যাচে সীমিত শিক্ষার্থী ব্যক্তিগত মনোযোগ এবং উন্নত শিক্ষার ফলাফল নিশ্চিত করে।'
      ),
    },
    {
      icon: ClipboardCheck,
      title: t('Regular Practice & Tests', 'নিয়মিত অনুশীলন ও পরীক্ষা'),
      description: t(
        'Frequent assessments and practice sessions to track progress and build confidence.',
        'অগ্রগতি ট্র্যাক করতে এবং আত্মবিশ্বাস তৈরি করতে ঘন ঘন মূল্যায়ন এবং অনুশীলন সেশন।'
      ),
    },
    {
      icon: Smile,
      title: t('Friendly Learning Environment', 'বন্ধুত্বপূর্ণ শিক্ষার পরিবেশ'),
      description: t(
        'A warm and supportive atmosphere where students feel comfortable to learn and grow.',
        'একটি উষ্ণ এবং সহায়ক পরিবেশ যেখানে শিক্ষার্থীরা শিখতে এবং বৃদ্ধি পেতে স্বাচ্ছন্দ্য বোধ করে।'
      ),
    },
    {
      icon: DollarSign,
      title: t('Affordable Fees', 'সাশ্রয়ী ফি'),
      description: t(
        'Quality education at reasonable fees, making excellence accessible to all families.',
        'যুক্তিসঙ্গত ফিতে মানসম্পন্ন শিক্ষা, সমস্ত পরিবারের জন্য উৎকর্ষতা অ্যাক্সেসযোগ্য করে তোলে।'
      ),
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 md:py-32 bg-gradient-to-b from-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gold mb-4">
            {t('Why Choose Us', 'কেন আমাদের বেছে নেবেন')}
          </h2>
          <div className="w-24 h-1 bg-maroon mx-auto mb-8" />
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            {t(
              'Discover what makes Brilliant Coaching Centre the preferred choice for students and parents.',
              'ব্রিলিয়ান্ট কোচিং সেন্টারকে শিক্ষার্থী এবং অভিভাবকদের পছন্দের পছন্দ করে তোলে তা আবিষ্কার করুন।'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-maroon/50 transition-all duration-300 hover:shadow-xl hover:shadow-maroon/10 hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-maroon/5 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-maroon to-maroon/80 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gold mb-3">{benefit.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
