import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LanguageProvider } from './contexts/LanguageContext';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import WhyChooseUs from './components/WhyChooseUs';
import Teachers from './components/Teachers';
import TeachersNotes from './components/TeachersNotes';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LanguageToggle from './components/LanguageToggle';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { Toaster } from '@/components/ui/sonner';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <div className="min-h-screen bg-background">
          <Hero />
          <About />
          <Courses />
          <WhyChooseUs />
          <Teachers />
          <TeachersNotes />
          <Testimonials />
          <Gallery />
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

export default App;
