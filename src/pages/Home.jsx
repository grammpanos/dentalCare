import Box from "@mui/material/Box";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import ClinicGallery from "../components/ClinicGallery";
import AboutSection from "../components/AboutSection";
import DifferentiatorsSection from "../components/DifferentiatorsSection";
import TeamSection from "../components/TeamSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Box component="main">
      <HeroSection />
      <ServicesSection />
      <ClinicGallery />
      <AboutSection />
      <DifferentiatorsSection />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </Box>
  );
}
