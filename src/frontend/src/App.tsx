import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import About from "./components/About";
import AdmissionForm from "./components/AdmissionForm";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import LanguageToggle from "./components/LanguageToggle";
import Navigation from "./components/Navigation";
import StudentDashboard from "./components/StudentDashboard";
import SubmitReview from "./components/SubmitReview";
import Teachers from "./components/Teachers";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import { LanguageProvider } from "./contexts/LanguageContext";

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
          <Navigation />
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
