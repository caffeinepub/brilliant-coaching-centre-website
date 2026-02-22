import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useSubmitReview } from '../hooks/useQueries';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Star, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function SubmitReview() {
  const { t } = useLanguage();
  const submitReviewMutation = useSubmitReview();

  const [formData, setFormData] = useState({
    fullName: '',
    classYear: '',
    subjects: '',
    review: '',
    rating: 0,
  });

  const [hoveredStar, setHoveredStar] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.fullName || !formData.classYear || !formData.review) {
      toast.error(
        t('Please fill in all required fields', 'দয়া করে সমস্ত প্রয়োজনীয় ক্ষেত্র পূরণ করুন'),
        {
          description: t('Full Name, Class/Year, and Review are required', 'পূর্ণ নাম, শ্রেণী/বছর এবং পর্যালোচনা প্রয়োজনীয়'),
        }
      );
      return;
    }

    try {
      await submitReviewMutation.mutateAsync({
        fullName: formData.fullName,
        classYear: formData.classYear,
        subjects: formData.subjects || null,
        review: formData.review,
        rating: formData.rating > 0 ? formData.rating : null,
      });

      toast.success(
        t('Thank you for your review!', 'আপনার পর্যালোচনার জন্য ধন্যবাদ!'),
        {
          description: t(
            'Your feedback helps us improve and inspire other students.',
            'আপনার মতামত আমাদের উন্নতি করতে এবং অন্যান্য শিক্ষার্থীদের অনুপ্রাণিত করতে সাহায্য করে।'
          ),
        }
      );

      // Reset form
      setFormData({
        fullName: '',
        classYear: '',
        subjects: '',
        review: '',
        rating: 0,
      });
    } catch (error) {
      toast.error(
        t('Failed to submit review', 'পর্যালোচনা জমা দিতে ব্যর্থ'),
        {
          description: t('Please try again later', 'অনুগ্রহ করে পরে আবার চেষ্টা করুন'),
        }
      );
    }
  };

  const renderStars = () => {
    return (
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setFormData({ ...formData, rating: star })}
            onMouseEnter={() => setHoveredStar(star)}
            onMouseLeave={() => setHoveredStar(0)}
            className="transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-maroon focus:ring-offset-2 rounded"
          >
            <Star
              className={`w-8 h-8 md:w-10 md:h-10 transition-colors ${
                star <= (hoveredStar || formData.rating)
                  ? 'fill-gold text-gold'
                  : 'text-muted-foreground'
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <section id="submit-review" className="py-20 md:py-32 bg-gradient-to-b from-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gold mb-4">
            {t('Share Your Experience!', 'আপনার অভিজ্ঞতা শেয়ার করুন!')}
          </h2>
          <div className="w-24 h-1 bg-maroon mx-auto mb-8" />
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            {t(
              'We love hearing from our students. Tell us how Brilliant Coaching Centre has helped you grow and learn.',
              'আমরা আমাদের শিক্ষার্থীদের কাছ থেকে শুনতে ভালোবাসি। আমাদের বলুন কিভাবে ব্রিলিয়ান্ট কোচিং সেন্টার আপনাকে বৃদ্ধি এবং শিখতে সাহায্য করেছে।'
            )}
          </p>
        </div>

        <Card className="max-w-2xl mx-auto border-2 border-border hover:border-maroon/50 transition-all duration-300 shadow-xl">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold/80 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-background fill-background" />
            </div>
            <CardTitle className="text-2xl text-gold">
              {t('Submit Your Review', 'আপনার পর্যালোচনা জমা দিন')}
            </CardTitle>
            <CardDescription className="text-base">
              {t(
                'Your feedback is valuable to us and helps other students make informed decisions',
                'আপনার মতামত আমাদের কাছে মূল্যবান এবং অন্যান্য শিক্ষার্থীদের সচেতন সিদ্ধান্ত নিতে সাহায্য করে'
              )}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-gold">
                  {t('Full Name', 'পূর্ণ নাম')} *
                </Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder={t('Enter your full name', 'আপনার পূর্ণ নাম লিখুন')}
                  className="border-border focus:border-maroon h-12 text-base"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="classYear" className="text-gold">
                  {t('Class / Year', 'শ্রেণী / বছর')} *
                </Label>
                <Input
                  id="classYear"
                  value={formData.classYear}
                  onChange={(e) => setFormData({ ...formData, classYear: e.target.value })}
                  placeholder={t('e.g., Class X, 2025', 'যেমন, দশম শ্রেণী, ২০২৫')}
                  className="border-border focus:border-maroon h-12 text-base"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subjects" className="text-gold">
                  {t('Subject(s) Studied', 'অধ্যয়নকৃত বিষয়(গুলি)')} {t('(optional)', '(ঐচ্ছিক)')}
                </Label>
                <Input
                  id="subjects"
                  value={formData.subjects}
                  onChange={(e) => setFormData({ ...formData, subjects: e.target.value })}
                  placeholder={t('e.g., English, Mathematics', 'যেমন, ইংরেজি, গণিত')}
                  className="border-border focus:border-maroon h-12 text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="review" className="text-gold">
                  {t('Your Review', 'আপনার পর্যালোচনা')} *
                </Label>
                <Textarea
                  id="review"
                  value={formData.review}
                  onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                  placeholder={t(
                    'Share your experience with Brilliant Coaching Centre...',
                    'ব্রিলিয়ান্ট কোচিং সেন্টারের সাথে আপনার অভিজ্ঞতা শেয়ার করুন...'
                  )}
                  className="border-border focus:border-maroon min-h-32 text-base resize-y"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="text-gold">
                  {t('Rating', 'রেটিং')} {t('(optional)', '(ঐচ্ছিক)')}
                </Label>
                <div className="flex items-center gap-4">
                  {renderStars()}
                  {formData.rating > 0 && (
                    <span className="text-sm text-muted-foreground">
                      {formData.rating} {t('out of 5', '৫ এর মধ্যে')}
                    </span>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                disabled={submitReviewMutation.isPending}
                className="w-full bg-maroon hover:bg-maroon/90 text-white py-6 text-lg rounded-xl shadow-lg hover:shadow-maroon/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {submitReviewMutation.isPending ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    {t('Submitting...', 'জমা দেওয়া হচ্ছে...')}
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    {t('Submit Review', 'পর্যালোচনা জমা দিন')}
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
