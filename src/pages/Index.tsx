import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import FeaturesSection from "@/components/FeaturesSection";
import UpcomingSection from "@/components/UpcomingSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import MissionSection from "@/components/MissionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>PowerMaker AI - AI Pair Programmer for Dynamics 365</title>
        <meta name="description" content="Design entities, fix plugins, and resolve issues faster with PowerMaker AI - your AI pair programmer for Dynamics 365 customizations." />
        <link rel="canonical" href="https://powermakerai.com" />
      </Helmet>
      <Navigation />
      <HeroSection />
      <VisionSection />
      <FeaturesSection />
      <UpcomingSection />
      <MissionSection />
      {/* <TestimonialsSection /> */}
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
