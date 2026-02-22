import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export default function TeachersNotes() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('lkg-3');

  const notesData = {
    'lkg-3': {
      teacher: {
        name: t('Sonali Ma\'am', 'সোনালী ম্যাম'),
        initials: 'SM',
        avatar: '/assets/generated/sonali-maam-photo.dim_400x400.png',
        classes: t('LKG – Class 3', 'এলকেজি – ক্লাস ৩'),
        subjects: t('All Subjects', 'সমস্ত বিষয়'),
        experience: t('15+ Years', '১৫+ বছর'),
        features: [
          t('Fun, colorful, and easy-to-understand notes for early learners', 'প্রাথমিক শিক্ষার্থীদের জন্য মজাদার, রঙিন এবং সহজবোধ্য নোট'),
          t('Focus on basic concepts, confidence, and concept clarity', 'মৌলিক ধারণা, আত্মবিশ্বাস এবং ধারণা স্পষ্টতার উপর মনোনিবেশ'),
          t('Downloadable PDFs and printable worksheets', 'ডাউনলোডযোগ্য পিডিএফ এবং মুদ্রণযোগ্য ওয়ার্কশীট'),
        ],
      },
    },
    '4-10': {
      teacher: {
        name: t('Abhijit (Abhi) Da', 'অভিজিৎ (অভি) দা'),
        initials: 'AD',
        avatar: '/assets/generated/abhijit-da-photo.dim_400x400.png',
        classes: t('Class 4 – 10', 'ক্লাস ৪ – ১০'),
        subjects: t('Mathematics', 'গণিত'),
        experience: t('5 Years', '৫ বছর'),
        features: [
          t('Step-by-step explanations and examples', 'ধাপে ধাপে ব্যাখ্যা এবং উদাহরণ'),
          t('Practice questions with shortcuts and tips', 'শর্টকাট এবং টিপস সহ অনুশীলন প্রশ্ন'),
          t('Exam-oriented notes to improve problem-solving and accuracy', 'সমস্যা সমাধান এবং নির্ভুলতা উন্নত করতে পরীক্ষা-ভিত্তিক নোট'),
        ],
      },
    },
    '4-12': {
      teacher: {
        name: t('Santanu Sir', 'সন্তনু স্যার'),
        initials: 'SS',
        avatar: '/assets/generated/santanu-sir-photo.dim_400x400.png',
        classes: t('Class 4 – 12', 'ক্লাস ৪ – ১২'),
        subjects: t('English', 'ইংরেজি'),
        experience: t('35+ Years', '৩৫+ বছর'),
        features: [
          t('Grammar, comprehension, writing, and communication skills', 'ব্যাকরণ, বোঝাপড়া, লেখা এবং যোগাযোগ দক্ষতা'),
          t('Literature and vocabulary notes', 'সাহিত্য এবং শব্দভাণ্ডার নোট'),
          t('Tips for exam preparation and effective learning', 'পরীক্ষার প্রস্তুতি এবং কার্যকর শেখার জন্য টিপস'),
        ],
      },
    },
  };

  const handleDownload = (teacherName: string) => {
    // Placeholder for download functionality
    console.log(`Download notes for ${teacherName}`);
  };

  return (
    <section id="teachers-notes" className="py-20 md:py-32 bg-gradient-to-b from-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gold mb-4">
            {t('Teachers & Class Notes', 'শিক্ষক ও ক্লাস নোট')}
          </h2>
          <div className="w-24 h-1 bg-maroon mx-auto mb-8" />
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            {t(
              'Access class-wise notes prepared by our expert teachers to strengthen learning and excel in exams.',
              'আমাদের বিশেষজ্ঞ শিক্ষকদের দ্বারা প্রস্তুত ক্লাস-ভিত্তিক নোট অ্যাক্সেস করুন শেখা শক্তিশালী করতে এবং পরীক্ষায় উৎকর্ষ অর্জন করতে।'
            )}
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-card/50 border border-border p-1 rounded-xl h-auto overflow-x-auto">
            <TabsTrigger
              value="lkg-3"
              className="data-[state=active]:bg-maroon data-[state=active]:text-gold text-sm md:text-base py-3 px-2 md:px-4 rounded-lg transition-all duration-300 whitespace-nowrap"
            >
              {t('LKG – Class 3', 'এলকেজি – ক্লাস ৩')}
            </TabsTrigger>
            <TabsTrigger
              value="4-10"
              className="data-[state=active]:bg-maroon data-[state=active]:text-gold text-sm md:text-base py-3 px-2 md:px-4 rounded-lg transition-all duration-300 whitespace-nowrap"
            >
              {t('Class 4 – 10', 'ক্লাস ৪ – ১০')}
            </TabsTrigger>
            <TabsTrigger
              value="4-12"
              className="data-[state=active]:bg-maroon data-[state=active]:text-gold text-sm md:text-base py-3 px-2 md:px-4 rounded-lg transition-all duration-300 whitespace-nowrap"
            >
              {t('Class 4 – 12', 'ক্লাস ৪ – ১২')}
            </TabsTrigger>
          </TabsList>

          {Object.entries(notesData).map(([key, data]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid grid-cols-1 gap-8">
                <div className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-maroon/50 transition-all duration-300 hover:shadow-2xl hover:shadow-maroon/20 hover:scale-[1.02]">
                  <div className="p-8 md:p-10">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      {/* Teacher Avatar */}
                      <div className="flex-shrink-0 mx-auto md:mx-0">
                        <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-gold/20 group-hover:border-gold/40 transition-all duration-300 group-hover:scale-105">
                          <AvatarImage src={data.teacher.avatar} alt={data.teacher.name} />
                          <AvatarFallback className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-maroon to-maroon/80 text-gold">
                            {data.teacher.initials}
                          </AvatarFallback>
                        </Avatar>
                      </div>

                      {/* Teacher Info */}
                      <div className="flex-1 space-y-6">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-gold mb-4">
                            {data.teacher.name}
                          </h3>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                            <div className="flex items-center gap-2">
                              <span className="text-xl">🏫</span>
                              <div>
                                <p className="text-xs text-foreground/60 font-medium">
                                  {t('Class', 'ক্লাস')}
                                </p>
                                <p className="text-sm font-semibold text-foreground">
                                  {data.teacher.classes}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <span className="text-xl">📚</span>
                              <div>
                                <p className="text-xs text-foreground/60 font-medium">
                                  {t('Subject', 'বিষয়')}
                                </p>
                                <p className="text-sm font-semibold text-foreground">
                                  {data.teacher.subjects}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <span className="text-xl">🎓</span>
                              <div>
                                <p className="text-xs text-foreground/60 font-medium">
                                  {t('Experience', 'অভিজ্ঞতা')}
                                </p>
                                <p className="text-sm font-semibold text-foreground">
                                  {data.teacher.experience}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Notes Features */}
                        <div className="border-t border-border pt-6">
                          <h4 className="text-lg font-semibold text-gold mb-4">
                            {t('Notes Features', 'নোট বৈশিষ্ট্য')}
                          </h4>
                          <ul className="space-y-3">
                            {data.teacher.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-foreground/80">
                                <span className="w-2 h-2 rounded-full bg-maroon mt-2 flex-shrink-0" />
                                <span className="leading-relaxed">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Download Button */}
                        <div className="pt-4">
                          <Button
                            onClick={() => handleDownload(data.teacher.name)}
                            className="bg-maroon hover:bg-maroon/90 text-gold font-semibold px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-maroon/30 w-full sm:w-auto"
                          >
                            <Download className="w-5 h-5 mr-2" />
                            {t('Download Notes', 'নোট ডাউনলোড করুন')}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
