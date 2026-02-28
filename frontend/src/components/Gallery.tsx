import { useState, useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ExternalBlob } from '../backend';
import { useGetAllGalleries, useGetGalleryImages, useCreateGallery, useAddImage, useDeleteImage } from '../hooks/useQueries';
import { Upload, X, ZoomIn, ChevronLeft, ChevronRight, Trash2, Plus, Image as ImageIcon } from 'lucide-react';
import { toast } from 'sonner';

const STATIC_IMAGES = [
  {
    id: 'static-1',
    src: '/assets/generated/classroom-1.dim_800x600.jpg',
    title: 'Classroom Session',
    description: 'Students engaged in learning',
  },
  {
    id: 'static-2',
    src: '/assets/generated/group-photo.dim_800x600.jpg',
    title: 'Group Photo',
    description: 'Our students and teachers',
  },
  {
    id: 'static-3',
    src: '/assets/generated/activities-1.dim_800x600.jpg',
    title: 'Activities',
    description: 'Extracurricular activities',
  },
  {
    id: 'static-4',
    src: '/assets/generated/saraswati-puja.dim_800x600.jpg',
    title: 'Saraswati Puja',
    description: 'Annual celebration',
  },
];

const DEFAULT_GALLERY_ID = 'main-gallery';

export default function Gallery() {
  const { t } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [uploadTitle, setUploadTitle] = useState('');
  const [uploadDescription, setUploadDescription] = useState('');
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [showUploadPanel, setShowUploadPanel] = useState(false);

  const { data: galleries = [] } = useGetAllGalleries();
  const { data: backendImages = [], isLoading: imagesLoading } = useGetGalleryImages(DEFAULT_GALLERY_ID);
  const createGallery = useCreateGallery();
  const addImage = useAddImage();
  const deleteImage = useDeleteImage();

  const ensureGalleryExists = useCallback(async () => {
    const exists = galleries.some((g) => g.id === DEFAULT_GALLERY_ID);
    if (!exists) {
      await createGallery.mutateAsync({
        id: DEFAULT_GALLERY_ID,
        name: 'Main Gallery',
        description: 'Brilliant Coaching Centre photo gallery',
      });
    }
  }, [galleries, createGallery]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file');
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    try {
      await ensureGalleryExists();

      const arrayBuffer = await file.arrayBuffer();
      const bytes = new Uint8Array(arrayBuffer);
      const blob = ExternalBlob.fromBytes(bytes).withUploadProgress((pct) => {
        setUploadProgress(pct);
      });

      const id = `img-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      await addImage.mutateAsync({
        id,
        blob,
        title: uploadTitle || file.name,
        description: uploadDescription,
        galleryId: DEFAULT_GALLERY_ID,
      });

      toast.success('Image uploaded successfully!');
      setUploadTitle('');
      setUploadDescription('');
      setShowUploadPanel(false);
    } catch (err) {
      console.error('Upload error:', err);
      toast.error('Failed to upload image. Please try again.');
    } finally {
      setIsUploading(false);
      setUploadProgress(null);
      e.target.value = '';
    }
  };

  const handleDelete = async (imageId: string) => {
    try {
      await deleteImage.mutateAsync({ id: imageId, galleryId: DEFAULT_GALLERY_ID });
      toast.success('Image deleted');
    } catch {
      toast.error('Failed to delete image');
    }
  };

  // Combine static + backend images for lightbox
  const allImages = [
    ...STATIC_IMAGES.map((img) => ({ id: img.id, src: img.src, title: img.title, isStatic: true })),
    ...backendImages.map((img) => ({
      id: img.id,
      src: img.blob.getDirectURL(),
      title: img.title,
      isStatic: false,
    })),
  ];

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i !== null ? (i - 1 + allImages.length) % allImages.length : null));
  const nextImage = () => setLightboxIndex((i) => (i !== null ? (i + 1) % allImages.length : null));

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-poppins text-gold mb-4">
            {t('Our Gallery', 'আমাদের গ্যালারি')}
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            {t(
              'Glimpses of life at Brilliant Coaching Centre',
              'ব্রিলিয়ান্ট কোচিং সেন্টারের জীবনের ঝলক'
            )}
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Upload Toggle */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowUploadPanel((v) => !v)}
            className="flex items-center gap-2 px-5 py-2.5 bg-gold text-background font-semibold rounded-full hover:bg-gold/90 transition-colors"
          >
            <Plus className="w-4 h-4" />
            {t('Add Photo', 'ছবি যোগ করুন')}
          </button>
        </div>

        {/* Upload Panel */}
        {showUploadPanel && (
          <div className="max-w-md mx-auto mb-10 bg-card border border-border rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gold mb-4 flex items-center gap-2">
              <Upload className="w-5 h-5" />
              {t('Upload Photo', 'ছবি আপলোড করুন')}
            </h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder={t('Title (optional)', 'শিরোনাম (ঐচ্ছিক)')}
                value={uploadTitle}
                onChange={(e) => setUploadTitle(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
              <input
                type="text"
                placeholder={t('Description (optional)', 'বিবরণ (ঐচ্ছিক)')}
                value={uploadDescription}
                onChange={(e) => setUploadDescription(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
              <label className="block">
                <span className="sr-only">Choose file</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  disabled={isUploading}
                  className="block w-full text-sm text-foreground/70 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gold file:text-background hover:file:bg-gold/90 disabled:opacity-50"
                />
              </label>
              {uploadProgress !== null && (
                <div className="w-full bg-border rounded-full h-2">
                  <div
                    className="bg-gold h-2 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
              )}
              {isUploading && (
                <p className="text-sm text-foreground/60 text-center">
                  {t('Uploading...', 'আপলোড হচ্ছে...')} {uploadProgress !== null ? `${uploadProgress}%` : ''}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Static Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
          {STATIC_IMAGES.map((img, idx) => (
            <div
              key={img.id}
              className="relative group cursor-pointer rounded-xl overflow-hidden aspect-square bg-card border border-border"
              onClick={() => openLightbox(idx)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/generated/brilliant-coaching-centre-logo.dim_800x800.png';
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs font-medium truncate">{img.title}</p>
              </div>
            </div>
          ))}

          {/* Backend Images */}
          {imagesLoading ? (
            Array.from({ length: 2 }).map((_, i) => (
              <div key={`skeleton-${i}`} className="rounded-xl aspect-square bg-card border border-border animate-pulse" />
            ))
          ) : (
            backendImages.map((img, idx) => (
              <div
                key={img.id}
                className="relative group cursor-pointer rounded-xl overflow-hidden aspect-square bg-card border border-border"
                onClick={() => openLightbox(STATIC_IMAGES.length + idx)}
              >
                <img
                  src={img.blob.getDirectURL()}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/generated/brilliant-coaching-centre-logo.dim_800x800.png';
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs font-medium truncate">{img.title}</p>
                </div>
                {/* Delete button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(img.id);
                  }}
                  className="absolute top-2 right-2 p-1.5 bg-red-600/80 hover:bg-red-600 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  title="Delete image"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Empty state for backend images */}
        {!imagesLoading && backendImages.length === 0 && (
          <div className="text-center py-6 text-foreground/40">
            <ImageIcon className="w-10 h-10 mx-auto mb-2 opacity-40" />
            <p className="text-sm">{t('No uploaded photos yet. Add your first photo!', 'এখনো কোনো আপলোড করা ছবি নেই। প্রথম ছবি যোগ করুন!')}</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gold transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>
          <button
            className="absolute left-4 text-white hover:text-gold transition-colors"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <div className="max-w-4xl max-h-[85vh] mx-16" onClick={(e) => e.stopPropagation()}>
            <img
              src={allImages[lightboxIndex]?.src}
              alt={allImages[lightboxIndex]?.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            {allImages[lightboxIndex]?.title && (
              <p className="text-white text-center mt-3 text-sm font-medium">
                {allImages[lightboxIndex].title}
              </p>
            )}
          </div>
          <button
            className="absolute right-4 text-white hover:text-gold transition-colors"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </section>
  );
}
