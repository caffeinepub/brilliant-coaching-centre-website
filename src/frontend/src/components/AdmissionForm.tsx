import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MessageCircle, Send } from 'lucide-react';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';

export default function AdmissionForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    studentName: '',
    class: '',
    subject: '',
    mobile: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.studentName || !formData.class || !formData.subject || !formData.mobile) {
      toast.error(
        t('Please fill in all fields', 'দয়া করে সমস্ত ক্ষেত্র পূরণ করুন'),
        {
          description: t('All fields are required', 'সমস্ত ক্ষেত্র প্রয়োজনীয়'),
        }
      );
      return;
    }

    // Create WhatsApp message
    const message = t(
      `*Admission Enquiry*\n\nStudent Name: ${formData.studentName}\nClass: ${formData.class}\nSubject: ${formData.subject}\nMobile: ${formData.mobile}\n\nI would like to know more about admission at Brilliant Coaching Centre.`,
      `*ভর্তির জিজ্ঞাসা*\n\nশিক্ষার্থীর নাম: ${formData.studentName}\nশ্রেণী: ${formData.class}\nবিষয়: ${formData.subject}\nমোবাইল: ${formData.mobile}\n\nআমি ব্রিলিয়ান্ট কোচিং সেন্টারে ভর্তি সম্পর্কে আরও জানতে চাই।`
    );

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919883448350?text=${encodedMessage}`, '_blank');

    toast.success(
      t('Redirecting to WhatsApp...', 'হোয়াটসঅ্যাপে পুনঃনির্দেশিত হচ্ছে...'),
      {
        description: t('Your enquiry will be sent via WhatsApp', 'আপনার জিজ্ঞাসা হোয়াটসঅ্যাপের মাধ্যমে পাঠানো হবে'),
      }
    );

    // Reset form
    setFormData({
      studentName: '',
      class: '',
      subject: '',
      mobile: '',
    });
  };

  return (
    <>
      <Toaster />
      <section id="admission" className="py-20 md:py-32 bg-gradient-to-b from-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gold mb-4">
              {t('Admission Enquiry', 'ভর্তির জিজ্ঞাসা')}
            </h2>
            <div className="w-24 h-1 bg-maroon mx-auto mb-8" />
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              {t(
                'Fill in the form below and we will contact you via WhatsApp to discuss admission details.',
                'নীচের ফর্মটি পূরণ করুন এবং আমরা ভর্তির বিবরণ নিয়ে আলোচনা করতে হোয়াটসঅ্যাপের মাধ্যমে আপনার সাথে যোগাযোগ করব।'
              )}
            </p>
          </div>

          <Card className="max-w-2xl mx-auto border-2 border-border hover:border-maroon/50 transition-all duration-300 shadow-xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-maroon to-maroon/80 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-gold">
                {t('Get Started Today', 'আজই শুরু করুন')}
              </CardTitle>
              <CardDescription className="text-base">
                {t(
                  'Join hundreds of successful students at Brilliant Coaching Centre',
                  'ব্রিলিয়ান্ট কোচিং সেন্টারে শত শত সফল শিক্ষার্থীর সাথে যোগ দিন'
                )}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="studentName" className="text-gold">
                    {t('Student Name', 'শিক্ষার্থীর নাম')} *
                  </Label>
                  <Input
                    id="studentName"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    placeholder={t('Enter student name', 'শিক্ষার্থীর নাম লিখুন')}
                    className="border-border focus:border-maroon"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="class" className="text-gold">
                    {t('Class', 'শ্রেণী')} *
                  </Label>
                  <Select value={formData.class} onValueChange={(value) => setFormData({ ...formData, class: value })}>
                    <SelectTrigger className="border-border focus:border-maroon">
                      <SelectValue placeholder={t('Select class', 'শ্রেণী নির্বাচন করুন')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="LKG">LKG</SelectItem>
                      <SelectItem value="UKG">UKG</SelectItem>
                      <SelectItem value="Class I">{t('Class I', 'প্রথম শ্রেণী')}</SelectItem>
                      <SelectItem value="Class II">{t('Class II', 'দ্বিতীয় শ্রেণী')}</SelectItem>
                      <SelectItem value="Class III">{t('Class III', 'তৃতীয় শ্রেণী')}</SelectItem>
                      <SelectItem value="Class IV">{t('Class IV', 'চতুর্থ শ্রেণী')}</SelectItem>
                      <SelectItem value="Class V">{t('Class V', 'পঞ্চম শ্রেণী')}</SelectItem>
                      <SelectItem value="Class VI">{t('Class VI', 'ষষ্ঠ শ্রেণী')}</SelectItem>
                      <SelectItem value="Class VII">{t('Class VII', 'সপ্তম শ্রেণী')}</SelectItem>
                      <SelectItem value="Class VIII">{t('Class VIII', 'অষ্টম শ্রেণী')}</SelectItem>
                      <SelectItem value="Class IX">{t('Class IX', 'নবম শ্রেণী')}</SelectItem>
                      <SelectItem value="Class X">{t('Class X', 'দশম শ্রেণী')}</SelectItem>
                      <SelectItem value="Class XI">{t('Class XI', 'একাদশ শ্রেণী')}</SelectItem>
                      <SelectItem value="Class XII">{t('Class XII', 'দ্বাদশ শ্রেণী')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-gold">
                    {t('Subject', 'বিষয়')} *
                  </Label>
                  <Select value={formData.subject} onValueChange={(value) => setFormData({ ...formData, subject: value })}>
                    <SelectTrigger className="border-border focus:border-maroon">
                      <SelectValue placeholder={t('Select subject', 'বিষয় নির্বাচন করুন')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All Subjects">{t('All Subjects', 'সমস্ত বিষয়')}</SelectItem>
                      <SelectItem value="English">{t('English', 'ইংরেজি')}</SelectItem>
                      <SelectItem value="Mathematics">{t('Mathematics', 'গণিত')}</SelectItem>
                      <SelectItem value="English & Mathematics">{t('English & Mathematics', 'ইংরেজি ও গণিত')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobile" className="text-gold">
                    {t('Mobile Number', 'মোবাইল নম্বর')} *
                  </Label>
                  <Input
                    id="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    placeholder={t('Enter mobile number', 'মোবাইল নম্বর লিখুন')}
                    className="border-border focus:border-maroon"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-maroon hover:bg-maroon/90 text-white py-6 text-lg rounded-xl shadow-lg hover:shadow-maroon/50 transition-all duration-300 hover:scale-105"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {t('Send Enquiry via WhatsApp', 'হোয়াটসঅ্যাপের মাধ্যমে জিজ্ঞাসা পাঠান')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
