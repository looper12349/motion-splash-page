import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary border-primary/30">
            • Portfolio
          </Badge>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            Our Selected Projects<br />
            <span className="text-muted-foreground">That Propel Your Website.</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Explore our curated work, showcasing collaborations with visionary<br />
            clients across diverse industries.
          </p>
          
          <Button variant="hero" size="xl">
            View Portfolio
          </Button>
        </div>

        {/* Featured Project */}
        <div className="max-w-5xl mx-auto mt-20">
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-gradient-dark border border-border/40 group hover:shadow-glow transition-all duration-500">
            <img
              src="/lovable-uploads/d7f911c4-02c9-48f0-9470-1a08bf9af9a0.png"
              alt="Featured portfolio project"
              className="w-full h-full object-cover"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            
            {/* Project Info */}
            <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              <Button variant="premium" size="lg">
                View Now
              </Button>
            </div>
            
            {/* Project URL */}
            <div className="absolute bottom-4 left-4 text-xs text-muted-foreground">
              https://landin.framer.website/portfolio/wayfields
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;