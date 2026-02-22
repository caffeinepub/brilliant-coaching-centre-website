import { useLanguage } from '../contexts/LanguageContext';
import { GraduationCap, BookOpen, Award } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function Teachers() {
  const { t } = useLanguage();

  const teachers = [
    {
      name: t('Sonali Ma\'am', 'সোনালী ম্যাম'),
      initials: 'SM',
      classes: t('LKG – Class 3', 'এলকেজি – ক্লাস ৩'),
      subjects: t('All Subjects', 'সমস্ত বিষয়'),
      experience: t('15+ Years', '১৫+ বছর'),
      focus: [
        t('Expert in early childhood and primary education', 'প্রাথমিক শৈশব এবং প্রাথমিক শিক্ষায় বিশেষজ্ঞ'),
        t('Focus on strong foundations and confidence building', 'শক্তিশালী ভিত্তি এবং আত্মবিশ্বাস তৈরিতে মনোনিবেশ'),
      ],
    },
    {
      name: t('Abhijit (Abhi) Da', 'অভিজিৎ (অভি) দা'),
      initials: 'AD',
      classes: t('Class 4 – Class 10', 'ক্লাস ৪ – ক্লাস ১০'),
      subjects: t('Mathematics', 'গণিত'),
      experience: t('5 Years', '৫ বছর'),
      focus: [
        t('Clear explanations and problem-solving techniques', 'স্পষ্ট ব্যাখ্যা এবং সমস্যা সমাধানের কৌশল'),
        t('Focus on accuracy and exam performance', 'নির্ভুলতা এবং পরীক্ষার পারফরম্যান্সে মনোনিবেশ'),
      ],
    },
    {
      name: t('Santanu Sir', 'সন্তনু স্যার'),
      initials: 'SS',
      classes: t('Class 4 – Class 12', 'ক্লাস ৪ – ক্লাস ১২'),
      subjects: t('English', 'ইংরেজি'),
      experience: t('35+ Years', '৩৫+ বছর'),
      focus: [
        t('Expert in grammar, writing, and communication skills', 'ব্যাকরণ, লেখা এবং যোগাযোগ দক্ষতায় বিশেষজ্ঞ'),
        t('Strong exam-oriented teaching approach', 'শক্তিশালী পরীক্ষা-ভিত্তিক শিক্ষাদান পদ্ধতি'),
      ],
    },
  ];

  return (
    <section id="teachers" className="py-20 md:py-32 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gold mb-4">
            {t('Our Teachers', 'আমাদের শিক্ষকরা')}
          </h2>
          <div className="w-24 h-1 bg-maroon mx-auto mb-8" />
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            {t(
              'Meet our dedicated and experienced teachers who are committed to your success.',
              'আমাদের নিবেদিত এবং অভিজ্ঞ শিক্ষকদের সাথে দেখা করুন যারা আপনার সাফল্যের জন্য প্রতিশ্রুতিবদ্ধ।'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-maroon/50 transition-all duration-300 hover:shadow-xl hover:shadow-maroon/10 hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-maroon/10 to-gold/10 flex items-center justify-center">
                <Avatar className="w-40 h-40 border-4 border-gold/20 group-hover:border-gold/40 transition-all duration-300 group-hover:scale-110">
                  <AvatarFallback className="text-5xl font-bold bg-gradient-to-br from-maroon to-maroon/80 text-gold">
                    {teacher.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gold mb-4">{teacher.name}</h3>

                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-maroon mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-foreground/60 font-medium">
                        {t('Classes', 'ক্লাস')}
                      </p>
                      <p className="text-foreground font-semibold">{teacher.classes}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-maroon mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-foreground/60 font-medium">
                        {t('Subject', 'বিষয়')}
                      </p>
                      <p className="text-foreground font-semibold">{teacher.subjects}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-maroon mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-foreground/60 font-medium">
                        {t('Experience', 'অভিজ্ঞতা')}
                      </p>
                      <p className="text-foreground font-semibold">{teacher.experience}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <ul className="space-y-2">
                    {teacher.focus.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-maroon mt-1.5 flex-shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
