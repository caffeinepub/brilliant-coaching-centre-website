import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MessageCircle, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function AdmissionForm() {
  const { t } = useLanguage();
  const [studentName, setStudentName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [subject, setSubject] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!studentName.trim()) {
      toast.error(t('Please enter student name.', 'অনুগ্রহ করে ছাত্রের নাম লিখুন।'));
      return;
    }
    if (!studentClass) {
      toast.error(t('Please select a class.', 'অনুগ্রহ করে একটি ক্লাস নির্বাচন করুন।'));
      return;
    }
    if (!mobile.trim() || mobile.trim().length < 10) {
      toast.error(t('Please enter a valid mobile number.', 'অনুগ্রহ করে একটি বৈধ মোবাইল নম্বর লিখুন।'));
      return;
    }

    const message = encodeURIComponent(
      `Hello! I would like to enquire about admission.\n\nStudent Name: ${studentName}\nClass: ${studentClass}\nSubject: ${subject || 'Not specified'}\nMobile: ${mobile}`
    );
    window.open(`https://wa.me/919883448350?text=${message}`, '_blank');
    toast.success(t('Redirecting to WhatsApp...', 'হোয়াটসঅ্যাপে পুনঃনির্দেশিত হচ্ছে...'));

    setStudentName('');
    setStudentClass('');
    setSubject('');
    setMobile('');
  };

  const classes = [
    'LKG', 'UKG', 'Class I', 'Class II', 'Class III', 'Class IV',
    'Class V', 'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X',
    'Class XI', 'Class XII',
  ];

  return (
    <section id="admission" className="py-20 md:py-32 bg-gradient-to-b from-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gold mb-4">
            {t('Admission Enquiry', 'ভর্তির জন্য যোগাযোগ')}
          </h2>
          <div className="w-24 h-1 bg-maroon mx-auto mb-8" />
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            {t(
              'Fill in the details below and we will get in touch with you via WhatsApp.',
              'নিচের বিবরণ পূরণ করুন এবং আমরা হোয়াটসঅ্যাপের মাধ্যমে আপনার সাথে যোগাযোগ করব।'
            )}
          </p>
        </div>

        <div className="max-w-lg mx-auto bg-card border border-border rounded-2xl p-8 shadow-xl shadow-maroon/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="studentName" className="text-foreground/80 font-medium">
                {t('Student Name', 'ছাত্রের নাম')} *
              </Label>
              <Input
                id="studentName"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder={t('Enter student name', 'ছাত্রের নাম লিখুন')}
                className="bg-background border-border focus:ring-maroon/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="class" className="text-foreground/80 font-medium">
                {t('Class', 'ক্লাস')} *
              </Label>
              <Select value={studentClass} onValueChange={setStudentClass}>
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder={t('Select class', 'ক্লাস নির্বাচন করুন')} />
                </SelectTrigger>
                <SelectContent>
                  {classes.map((cls) => (
                    <SelectItem key={cls} value={cls}>{cls}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="text-foreground/80 font-medium">
                {t('Subject (optional)', 'বিষয় (ঐচ্ছিক)')}
              </Label>
              <Input
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder={t('e.g. Mathematics, English', 'যেমন গণিত, ইংরেজি')}
                className="bg-background border-border focus:ring-maroon/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mobile" className="text-foreground/80 font-medium">
                {t('Mobile Number', 'মোবাইল নম্বর')} *
              </Label>
              <Input
                id="mobile"
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder={t('Enter mobile number', 'মোবাইল নম্বর লিখুন')}
                className="bg-background border-border focus:ring-maroon/50"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-maroon hover:bg-maroon/90 text-gold font-semibold py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-maroon/30"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t('Send via WhatsApp', 'হোয়াটসঅ্যাপে পাঠান')}
              <Send className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
