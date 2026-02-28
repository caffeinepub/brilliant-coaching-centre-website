import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LanguageProvider } from './contexts/LanguageContext';
import { Toaster } from '@/components/ui/sonner';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import WhyChooseUs from './components/WhyChooseUs';
import Teachers from './components/Teachers';
import Testimonials from './components/Testimonials';
import SubmitReview from './components/SubmitReview';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LanguageToggle from './components/LanguageToggle';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import AdmissionForm from './components/AdmissionForm';
import StudentDashboard from './components/StudentDashboard';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 1000 * 60 * 5,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Hero />
          <About />
          <Courses />
          <WhyChooseUs />
          <Teachers />
          <AdmissionForm />
          <Gallery />
          <SubmitReview />
          <Testimonials />
          <StudentDashboard />
          <Contact />
          <Footer />
          <LanguageToggle />
          <FloatingWhatsApp />
          <Toaster />
        </div>
      </LanguageProvider>
    </QueryClientProvider>
  );
}
