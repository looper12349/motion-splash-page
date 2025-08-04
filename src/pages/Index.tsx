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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
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
  );
};

export default Index;
