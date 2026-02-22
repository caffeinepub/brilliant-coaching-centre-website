import { LanguageProvider } from './contexts/LanguageContext';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import WhyChooseUs from './components/WhyChooseUs';
import Teachers from './components/Teachers';
import Gallery from './components/Gallery';
import AdmissionForm from './components/AdmissionForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LanguageToggle from './components/LanguageToggle';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Hero />
        <About />
        <Courses />
        <WhyChooseUs />
        <Teachers />
        <Gallery />
        <AdmissionForm />
        <Contact />
        <Footer />
        <LanguageToggle />
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
}

export default App;
