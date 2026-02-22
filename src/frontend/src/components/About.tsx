import { useLanguage } from '../contexts/LanguageContext';
import { BookOpen, Heart, Shield, Trophy } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  const features = [
    {
      icon: BookOpen,
      title: t('Concept Clarity', 'ধারণা স্পষ্টতা'),
      description: t(
        'We focus on building strong fundamentals and clear understanding of every concept.',
        'আমরা প্রতিটি ধারণার শক্তিশালী ভিত্তি এবং স্পষ্ট বোঝার উপর মনোনিবেশ করি।'
      ),
    },
    {
      icon: Heart,
      title: t('Personal Care', 'ব্যক্তিগত যত্ন'),
      description: t(
        'Each student receives individual attention and personalized guidance from our caring teachers.',
        'প্রতিটি শিক্ষার্থী আমাদের যত্নশীল শিক্ষকদের কাছ থেকে ব্যক্তিগত মনোযোগ এবং নির্দেশনা পায়।'
      ),
    },
    {
      icon: Shield,
      title: t('Discipline', 'শৃঙ্খলা'),
      description: t(
        'We maintain a disciplined learning environment that fosters focus and academic excellence.',
        'আমরা একটি শৃঙ্খলাবদ্ধ শিক্ষার পরিবেশ বজায় রাখি যা মনোযোগ এবং একাডেমিক উৎকর্ষতা বৃদ্ধি করে।'
      ),
    },
    {
      icon: Trophy,
      title: t('Exam Preparation', 'পরীক্ষার প্রস্তুতি'),
      description: t(
        'Comprehensive exam preparation with regular tests and practice sessions for guaranteed success.',
        'নিশ্চিত সাফল্যের জন্য নিয়মিত পরীক্ষা এবং অনুশীলন সেশন সহ ব্যাপক পরীক্ষার প্রস্তুতি।'
      ),
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gold mb-4">
            {t('About Us', 'আমাদের সম্পর্কে')}
          </h2>
          <div className="w-24 h-1 bg-maroon mx-auto mb-8" />
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            {t(
              'At Brilliant Coaching Centre, we are committed to nurturing young minds with quality education, personal attention, and a supportive learning environment. Located in Puabagan, Bankura, we have been helping students achieve their academic goals through dedicated teaching and comprehensive guidance.',
              'ব্রিলিয়ান্ট কোচিং সেন্টারে, আমরা মানসম্পন্ন শিক্ষা, ব্যক্তিগত মনোযোগ এবং একটি সহায়ক শিক্ষার পরিবেশের মাধ্যমে তরুণ মনকে লালন করতে প্রতিশ্রুতিবদ্ধ। পুয়াবাগান, বাঁকুড়ায় অবস্থিত, আমরা নিবেদিত শিক্ষাদান এবং ব্যাপক নির্দেশনার মাধ্যমে শিক্ষার্থীদের তাদের একাডেমিক লক্ষ্য অর্জনে সহায়তা করে আসছি।'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-maroon/50 transition-all duration-300 hover:shadow-xl hover:shadow-maroon/10 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-maroon/20 to-gold/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-maroon" />
              </div>
              <h3 className="text-xl font-bold text-gold mb-3">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
