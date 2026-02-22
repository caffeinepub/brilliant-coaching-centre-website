import { useLanguage } from '../contexts/LanguageContext';
import { Lock, BarChart3, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function StudentDashboard() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Lock,
      title: t('Login System', 'লগইন সিস্টেম'),
      description: t(
        'Secure student authentication with Internet Identity for personalized access to your learning portal.',
        'আপনার শিক্ষা পোর্টালে ব্যক্তিগত অ্যাক্সেসের জন্য ইন্টারনেট আইডেন্টিটি সহ নিরাপদ শিক্ষার্থী প্রমাণীকরণ।'
      ),
    },
    {
      icon: BarChart3,
      title: t('Notes & Test Results', 'নোট এবং পরীক্ষার ফলাফল'),
      description: t(
        'Access downloadable study notes and track your test performance with detailed analytics and progress reports.',
        'ডাউনলোডযোগ্য অধ্যয়ন নোট অ্যাক্সেস করুন এবং বিস্তারিত বিশ্লেষণ এবং অগ্রগতি রিপোর্ট সহ আপনার পরীক্ষার কর্মক্ষমতা ট্র্যাক করুন।'
      ),
    },
    {
      icon: Calendar,
      title: t('Attendance Record', 'উপস্থিতি রেকর্ড'),
      description: t(
        'Monitor your class attendance and participation history to stay on track with your learning journey.',
        'আপনার শিক্ষার যাত্রায় ট্র্যাকে থাকতে আপনার ক্লাসের উপস্থিতি এবং অংশগ্রহণের ইতিহাস পর্যবেক্ষণ করুন।'
      ),
    },
  ];

  return (
    <section id="student-dashboard" className="py-20 md:py-32 bg-gradient-to-b from-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-3xl md:text-5xl font-bold text-gold">
              {t('Student Dashboard', 'শিক্ষার্থী ড্যাশবোর্ড')}
            </h2>
            <Badge variant="outline" className="border-gold/50 text-gold bg-gold/10 text-sm md:text-base px-3 py-1">
              🚧 {t('Coming Soon', 'শীঘ্রই আসছে')}
            </Badge>
          </div>
          <div className="w-24 h-1 bg-maroon mx-auto mb-8" />
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            {t(
              'Access your personalized learning portal with secure login, downloadable notes, test results, and attendance tracking.',
              'নিরাপদ লগইন, ডাউনলোডযোগ্য নোট, পরীক্ষার ফলাফল এবং উপস্থিতি ট্র্যাকিং সহ আপনার ব্যক্তিগত শিক্ষা পোর্টাল অ্যাক্সেস করুন।'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-maroon/50 transition-all duration-300 hover:shadow-xl hover:shadow-maroon/10 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-maroon/20 to-gold/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-maroon" />
              </div>
              <h3 className="text-xl font-bold text-gold mb-4">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-card border border-border rounded-xl p-6 max-w-2xl">
            <p className="text-foreground/60 text-sm md:text-base">
              {t(
                '✨ This feature is currently under development. Stay tuned for updates as we build a comprehensive student portal to enhance your learning experience!',
                '✨ এই বৈশিষ্ট্যটি বর্তমানে উন্নয়নাধীন। আপনার শিক্ষার অভিজ্ঞতা বাড়ানোর জন্য আমরা একটি ব্যাপক শিক্ষার্থী পোর্টাল তৈরি করার সাথে সাথে আপডেটের জন্য সাথে থাকুন!'
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
