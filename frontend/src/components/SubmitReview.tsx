import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Star, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function SubmitReview() {
  const { t } = useLanguage();
  const [fullName, setFullName] = useState('');
  const [classYear, setClassYear] = useState('');
  const [subjects, setSubjects] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim()) {
      toast.error(t('Please enter your full name.', 'অনুগ্রহ করে আপনার পুরো নাম লিখুন।'));
      return;
    }
    if (rating === 0) {
      toast.error(t('Please select a rating.', 'অনুগ্রহ করে একটি রেটিং নির্বাচন করুন।'));
      return;
    }
    if (!review.trim()) {
      toast.error(t('Please write your review.', 'অনুগ্রহ করে আপনার রিভিউ লিখুন।'));
      return;
    }

    setIsSubmitting(true);
    try {
      // Placeholder: review submission would go here
      await new Promise((resolve) => setTimeout(resolve, 800));
      toast.success(t('Thank you for your review!', 'আপনার রিভিউর জন্য ধন্যবাদ!'));
      setFullName('');
      setClassYear('');
      setSubjects('');
      setReview('');
      setRating(0);
    } catch {
      toast.error(t('Failed to submit review. Please try again.', 'রিভিউ জমা দিতে ব্যর্থ হয়েছে। আবার চেষ্টা করুন।'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="submit-review" className="py-20 md:py-32 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gold mb-4">
            {t('Share Your Experience', 'আপনার অভিজ্ঞতা শেয়ার করুন')}
          </h2>
          <div className="w-24 h-1 bg-maroon mx-auto mb-8" />
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            {t(
              'Your feedback helps us improve and inspires future students.',
              'আপনার মতামত আমাদের উন্নতি করতে এবং ভবিষ্যতের শিক্ষার্থীদের অনুপ্রাণিত করতে সাহায্য করে।'
            )}
          </p>
        </div>

        <div className="max-w-lg mx-auto bg-card border border-border rounded-2xl p-8 shadow-xl shadow-maroon/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-foreground/80 font-medium">
                {t('Full Name', 'পুরো নাম')} *
              </Label>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={t('Enter your full name', 'আপনার পুরো নাম লিখুন')}
                disabled={isSubmitting}
                className="bg-background border-border focus:ring-maroon/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="classYear" className="text-foreground/80 font-medium">
                {t('Class / Year', 'ক্লাস / বছর')}
              </Label>
              <Input
                id="classYear"
                value={classYear}
                onChange={(e) => setClassYear(e.target.value)}
                placeholder={t('e.g. Class X, 2024', 'যেমন ক্লাস X, ২০২৪')}
                disabled={isSubmitting}
                className="bg-background border-border focus:ring-maroon/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subjects" className="text-foreground/80 font-medium">
                {t('Subject(s)', 'বিষয়(সমূহ)')}
              </Label>
              <Input
                id="subjects"
                value={subjects}
                onChange={(e) => setSubjects(e.target.value)}
                placeholder={t('e.g. Mathematics, English', 'যেমন গণিত, ইংরেজি')}
                disabled={isSubmitting}
                className="bg-background border-border focus:ring-maroon/50"
              />
            </div>

            {/* Star Rating */}
            <div className="space-y-2">
              <Label className="text-foreground/80 font-medium">
                {t('Rating', 'রেটিং')} *
              </Label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="transition-transform duration-150 hover:scale-110 disabled:opacity-50"
                  >
                    <Star
                      className={`w-8 h-8 transition-colors duration-150 ${
                        star <= (hoveredRating || rating)
                          ? 'text-gold fill-gold'
                          : 'text-foreground/30'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="review" className="text-foreground/80 font-medium">
                {t('Your Review', 'আপনার রিভিউ')} *
              </Label>
              <Textarea
                id="review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder={t(
                  'Share your experience at Brilliant Coaching Centre...',
                  'ব্রিলিয়ান্ট কোচিং সেন্টারে আপনার অভিজ্ঞতা শেয়ার করুন...'
                )}
                disabled={isSubmitting}
                rows={4}
                className="bg-background border-border focus:ring-maroon/50 resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-maroon hover:bg-maroon/90 text-gold font-semibold py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-maroon/30 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-gold/40 border-t-gold rounded-full animate-spin" />
                  {t('Submitting...', 'জমা দেওয়া হচ্ছে...')}
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  {t('Submit Review', 'রিভিউ জমা দিন')}
                </span>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
