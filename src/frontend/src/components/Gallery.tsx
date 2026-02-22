import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Gallery() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: '/assets/IMG_20250121_200428_753.jpg',
      alt: t('Classroom Teaching', 'শ্রেণীকক্ষ শিক্ষাদান'),
      title: t('Interactive Classroom Sessions', 'ইন্টারেক্টিভ শ্রেণীকক্ষ সেশন'),
    },
    {
      src: '/assets/IMG_20250203_143852_690.jpg',
      alt: t('Saraswati Puja Celebration', 'সরস্বতী পূজা উদযাপন'),
      title: t('Saraswati Puja Celebration', 'সরস্বতী পূজা উদযাপন'),
    },
    {
      src: '/assets/IMG_20260205_071643_210.webp',
      alt: t('Students Studying in Classroom', 'শ্রেণীকক্ষে অধ্যয়নরত শিক্ষার্থীরা'),
      title: t('Focused Learning Environment', 'মনোযোগী শিক্ষার পরিবেশ'),
    },
    {
      src: '/assets/IMG_20260212_070747_658.webp',
      alt: t('Students Studying in Classroom', 'শ্রেণীকক্ষে অধ্যয়নরত শিক্ষার্থীরা'),
      title: t('Focused Learning Environment', 'মনোযোগী শিক্ষার পরিবেশ'),
    },
  ];

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gold mb-4">
            {t('Photo Gallery', 'ফটো গ্যালারি')}
          </h2>
          <div className="w-24 h-1 bg-maroon mx-auto mb-8" />
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            {t(
              'Glimpses of our vibrant learning environment and memorable moments.',
              'আমাদের প্রাণবন্ত শিক্ষার পরিবেশ এবং স্মরণীয় মুহূর্তের ঝলক।'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border-2 border-border hover:border-maroon/50 transition-all duration-300 hover:shadow-2xl hover:shadow-maroon/20 hover:-translate-y-2"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-sm">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-0 bg-black/95 border-gold/20">
            <DialogClose className="absolute top-4 right-4 z-50">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-black/50 hover:bg-black/70 text-white"
              >
                <X className="h-6 w-6" />
              </Button>
            </DialogClose>

            {selectedImage !== null && (
              <div className="relative">
                <img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg font-semibold text-center">
                    {images[selectedImage].title}
                  </p>
                </div>

                {/* Navigation Buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 text-white"
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 text-white"
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
