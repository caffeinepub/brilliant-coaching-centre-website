import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  nameBn: string;
  class: string;
  classBn: string;
  review: string;
  reviewBn: string;
  avatar: string;
}

export default function Testimonials() {
  const { t } = useLanguage();

  const currentStudents: Testimonial[] = [
    {
      name: 'Riya Sen',
      nameBn: 'রিয়া সেন',
      class: 'Class 10',
      classBn: 'দশম শ্রেণী',
      review: "Brilliant Coaching Centre has completely changed the way I approach Mathematics. Abhijit Da's problem-solving techniques are easy to follow, and I feel confident in exams now!",
      reviewBn: 'ব্রিলিয়ান্ট কোচিং সেন্টার আমার গণিতের দৃষ্টিভঙ্গি সম্পূর্ণভাবে পরিবর্তন করেছে। অভিজিৎ দার সমস্যা সমাধানের কৌশলগুলি অনুসরণ করা সহজ এবং আমি এখন পরীক্ষায় আত্মবিশ্বাসী বোধ করি!',
      avatar: '/assets/generated/riya-sen-avatar.dim_200x200.png',
    },
    {
      name: 'Anirban Das',
      nameBn: 'অনির্বাণ দাস',
      class: 'Class 12',
      classBn: 'দ্বাদশ শ্রেণী',
      review: "Santanu Sir's English classes made grammar and literature so easy to understand. My writing and comprehension skills have improved immensely.",
      reviewBn: 'সন্তনু স্যারের ইংরেজি ক্লাস ব্যাকরণ এবং সাহিত্য বোঝা খুব সহজ করে দিয়েছে। আমার লেখা এবং বোঝার দক্ষতা অসাধারণভাবে উন্নত হয়েছে।',
      avatar: '/assets/generated/anirban-das-avatar.dim_200x200.png',
    },
    {
      name: 'Priya Roy',
      nameBn: 'প্রিয়া রায়',
      class: 'Class 3',
      classBn: 'তৃতীয় শ্রেণী',
      review: "Sonali Ma'am makes learning fun and interesting. I look forward to my classes every day!",
      reviewBn: 'সোনালী ম্যাম শেখাকে মজাদার এবং আকর্ষণীয় করে তোলেন। আমি প্রতিদিন আমার ক্লাসের জন্য অপেক্ষা করি!',
      avatar: '/assets/generated/priya-roy-avatar.dim_200x200.png',
    },
  ];

  const alumni: Testimonial[] = [
    {
      name: 'Arjun Mukherjee',
      nameBn: 'অর্জুন মুখার্জী',
      class: 'Alumni',
      classBn: 'প্রাক্তন ছাত্র',
      review: 'The small batch size and personalized attention helped me improve my weak areas. The coaching centre truly focuses on results.',
      reviewBn: 'ছোট ব্যাচের আকার এবং ব্যক্তিগত মনোযোগ আমার দুর্বল ক্ষেত্রগুলি উন্নত করতে সাহায্য করেছে। কোচিং সেন্টার সত্যিই ফলাফলের উপর মনোনিবেশ করে।',
      avatar: '/assets/generated/arjun-mukherjee-avatar.dim_200x200.png',
    },
    {
      name: 'Sneha Chakraborty',
      nameBn: 'স্নেহা চক্রবর্তী',
      class: 'Alumni',
      classBn: 'প্রাক্তন ছাত্রী',
      review: 'I still refer to the notes and worksheets provided during my classes. They are extremely useful even for college-level studies.',
      reviewBn: 'আমি এখনও আমার ক্লাসের সময় প্রদত্ত নোট এবং ওয়ার্কশীটগুলি দেখি। এগুলি কলেজ-স্তরের পড়াশোনার জন্যও অত্যন্ত উপযোগী।',
      avatar: '/assets/generated/sneha-chakraborty-avatar.dim_200x200.png',
    },
    {
      name: 'Rohan Ghosh',
      nameBn: 'রোহন ঘোষ',
      class: 'Alumni',
      classBn: 'প্রাক্তন ছাত্র',
      review: 'The exam-focused tips and practice papers gave me the confidence to perform well in competitive exams. Truly an excellent coaching centre.',
      reviewBn: 'পরীক্ষা-কেন্দ্রিক টিপস এবং অনুশীলন পত্রগুলি আমাকে প্রতিযোগিতামূলক পরীক্ষায় ভাল পারফর্ম করার আত্মবিশ্বাস দিয়েছে। সত্যিই একটি চমৎকার কোচিং সেন্টার।',
      avatar: '/assets/generated/rohan-ghosh-avatar.dim_200x200.png',
    },
  ];

  const TestimonialCard = ({ testimonial, isAlumni = false }: { testimonial: Testimonial; isAlumni?: boolean }) => (
    <Card className={`group h-full border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-maroon/20 ${isAlumni ? 'bg-accent/30 border-accent hover:border-maroon/50' : 'bg-card border-border hover:border-gold/50'}`}>
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-start gap-4 mb-4">
          <div className="relative flex-shrink-0">
            <img
              src={testimonial.avatar}
              alt={t(testimonial.name, testimonial.nameBn)}
              className="w-16 h-16 rounded-full object-cover border-2 border-gold shadow-lg"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gold rounded-full flex items-center justify-center">
              <Star className="w-3 h-3 text-background fill-background" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gold mb-1">
              {t(testimonial.name, testimonial.nameBn)}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t(testimonial.class, testimonial.classBn)}
            </p>
          </div>
        </div>
        
        <div className="relative flex-1">
          <Quote className="absolute -top-2 -left-2 w-8 h-8 text-maroon/20" />
          <p className="text-foreground/90 leading-relaxed pl-6 italic">
            "{t(testimonial.review, testimonial.reviewBn)}"
          </p>
        </div>
      </CardContent>
    </Card>
  );

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

        {/* Current Students Section */}
        <div className="mb-24 animate-fade-in-up delay-300">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-3">
              {t('Current Students', 'বর্তমান শিক্ষার্থীরা')}
            </h2>
            <div className="w-20 h-1 bg-maroon mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {currentStudents.map((student, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${400 + index * 100}ms` }}>
                <TestimonialCard testimonial={student} />
              </div>
            ))}
          </div>
        </div>

        {/* Alumni Feedback Section */}
        <div className="animate-fade-in-up delay-1000">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-3">
              {t('Alumni Feedback', 'প্রাক্তন ছাত্রদের মতামত')}
            </h2>
            <div className="w-20 h-1 bg-maroon mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {alumni.map((alum, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${1100 + index * 100}ms` }}>
                <TestimonialCard testimonial={alum} isAlumni />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
