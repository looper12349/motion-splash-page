import { useState } from "react"
import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ResultsSection from "@/components/ResultsSection"
import ProcessSection from "@/components/ProcessSection"
import BenefitsSection from "@/components/BenefitsSection"
import PortfolioSection from "@/components/PortfolioSection"
import LaunchSection from "@/components/LaunchSection"
import PricingSection from "@/components/PricingSection"
import FAQSection from "@/components/FAQSection"
import Footer from "@/components/Footer"
import Loader from "@/components/Loader"

const Index = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Loader 
        message="Crafting your premium experience..." 
        isVisible={!isVideoLoaded} 
      />
      
      <div className={`transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navigation />
        <HeroSection onVideoLoaded={handleVideoLoaded} />
        <AboutSection />
        <ResultsSection />
        <ProcessSection />
        <BenefitsSection />
        <PortfolioSection />
        <LaunchSection />
        <PricingSection />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
