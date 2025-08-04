import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const LaunchSection = () => {
  const images = [
    "/lovable-uploads/7feb0032-2eff-426b-9227-32ddd09b78f9.png",
    "/lovable-uploads/7feb0032-2eff-426b-9227-32ddd09b78f9.png",
    "/lovable-uploads/7feb0032-2eff-426b-9227-32ddd09b78f9.png",
    "/lovable-uploads/7feb0032-2eff-426b-9227-32ddd09b78f9.png",
  ];

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary border-primary/30">
            • Launch Your Site
          </Badge>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            The Trusted Rise Partner<br />
            <span className="text-muted-foreground">For Startups And Agencies</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Get your site live in no time! With professional setup and<br />
            expert support in an easy way.
          </p>
          
          <Button variant="hero" size="xl">
            View About Landin
          </Button>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-dark border border-border/40 group hover:shadow-glow transition-all duration-500 hover:scale-105"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Floating indicator */}
              {index === 1 && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LaunchSection;