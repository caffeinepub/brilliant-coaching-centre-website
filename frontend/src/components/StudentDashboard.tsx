import { useLanguage } from '../contexts/LanguageContext';
import { BookOpen, ClipboardList, CalendarCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function StudentDashboard() {
  const { t } = useLanguage();

  const features = [
    {
      icon: BookOpen,
      titleEn: 'Notes & Test Results',
      titleBn: 'নোট ও পরীক্ষার ফলাফল',
      descEn: 'Access your class notes and view your test scores anytime.',
      descBn: 'যেকোনো সময় আপনার ক্লাস নোট এবং পরীক্ষার স্কোর দেখুন।',
    },
    {
      icon: ClipboardList,
      titleEn: 'Login System',
      titleBn: 'লগইন সিস্টেম',
      descEn: 'Secure student login to access your personal dashboard.',
      descBn: 'আপনার ব্যক্তিগত ড্যাশবোর্ড অ্যাক্সেস করতে নিরাপদ ছাত্র লগইন।',
    },
    {
      icon: CalendarCheck,
      titleEn: 'Attendance Record',
      titleBn: 'উপস্থিতির রেকর্ড',
      descEn: 'Track your attendance and stay on top of your progress.',
      descBn: 'আপনার উপস্থিতি ট্র্যাক করুন এবং আপনার অগ্রগতির শীর্ষে থাকুন।',
    },
  ];

  return (
    <section id="student-dashboard" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-maroon/20 text-gold border-maroon/30 text-sm px-4 py-1">
            {t('Coming Soon', 'শীঘ্রই আসছে')}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gold mb-4">
            {t('Student Dashboard', 'ছাত্র ড্যাশবোর্ড')}
          </h2>
          <div className="w-24 h-1 bg-maroon mx-auto mb-8" />
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            {t(
              'A dedicated portal for students to access notes, results, and attendance records.',
              'শিক্ষার্থীদের নোট, ফলাফল এবং উপস্থিতির রেকর্ড অ্যাক্সেস করার জন্য একটি ডেডিকেটেড পোর্টাল।'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 text-center hover:border-maroon/50 transition-all duration-300 hover:shadow-xl hover:shadow-maroon/10 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full bg-maroon/10 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-gold mb-3">
                  {t(feature.titleEn, feature.titleBn)}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {t(feature.descEn, feature.descBn)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
