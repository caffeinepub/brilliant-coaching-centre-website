import { useLanguage } from '../contexts/LanguageContext';
import { GraduationCap, BookOpen, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Courses() {
  const { t } = useLanguage();

  const courses = [
    {
      icon: Sparkles,
      level: t('LKG – Class IV', 'এলকেজি – চতুর্থ শ্রেণী'),
      subjects: t('All Subjects', 'সমস্ত বিষয়'),
      description: t(
        'Complete foundational education covering all subjects for early learners.',
        'প্রাথমিক শিক্ষার্থীদের জন্য সমস্ত বিষয় কভার করে সম্পূর্ণ মৌলিক শিক্ষা।'
      ),
      color: 'from-gold/20 to-maroon/20',
      badge: 'primary',
    },
    {
      icon: BookOpen,
      level: t('Class V – Class X', 'পঞ্চম – দশম শ্রেণী'),
      subjects: t('English & Mathematics', 'ইংরেজি ও গণিত'),
      description: t(
        'Focused coaching in English and Mathematics for middle and secondary students.',
        'মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষার্থীদের জন্য ইংরেজি এবং গণিতে কেন্দ্রীভূত কোচিং।'
      ),
      color: 'from-maroon/20 to-gold/20',
      badge: 'secondary',
    },
    {
      icon: GraduationCap,
      level: t('Class XI – Class XII', 'একাদশ – দ্বাদশ শ্রেণী'),
      subjects: t('English', 'ইংরেজি'),
      description: t(
        'Advanced English coaching for higher secondary students preparing for board exams.',
        'বোর্ড পরীক্ষার জন্য প্রস্তুতিরত উচ্চ মাধ্যমিক শিক্ষার্থীদের জন্য উন্নত ইংরেজি কোচিং।'
      ),
      color: 'from-gold/20 to-maroon/20',
      badge: 'default',
    },
  ];

  return (
    <section id="courses" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gold mb-4">
            {t('Courses Offered', 'প্রদত্ত কোর্স')}
          </h2>
          <div className="w-24 h-1 bg-maroon mx-auto mb-8" />
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            {t(
              'Comprehensive coaching programs tailored for different age groups and academic needs.',
              'বিভিন্ন বয়সের গ্রুপ এবং একাডেমিক চাহিদার জন্য তৈরি ব্যাপক কোচিং প্রোগ্রাম।'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="group border-2 border-border hover:border-maroon/50 transition-all duration-300 hover:shadow-2xl hover:shadow-maroon/20 hover:-translate-y-2 bg-card overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${course.color}`} />
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-maroon/20 to-gold/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <course.icon className="w-10 h-10 text-maroon" />
                </div>
                <CardTitle className="text-2xl text-gold mb-2">{course.level}</CardTitle>
                <Badge variant={course.badge as any} className="mx-auto text-sm px-4 py-1">
                  {course.subjects}
                </Badge>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-foreground/70 leading-relaxed">{course.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
