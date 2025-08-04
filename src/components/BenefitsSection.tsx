import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const BenefitsSection = () => {
  const benefits = [
    "Enhanced UX", "Boosted Conversions", "Fast Loading", "SEO Optimized",
    "Customizable", "Scalable", "Increased Engagement", "Expandable",
    "Secure", "User-Friendly"
  ];

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary border-primary/30">
            • Landin Benefits
          </Badge>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            We Just Don't Design, We Build.<br />
            <span className="text-muted-foreground">If You Can Dream It, We Can Play It!</span>
          </h2>
        </div>

        {/* Benefits Tags */}
        <div className="flex flex-wrap gap-3 mb-12">
          {benefits.map((benefit, index) => (
            <Badge 
              key={index} 
              variant={index === benefits.length - 1 ? "default" : "outline"}
              className={`px-4 py-2 text-sm ${
                index === benefits.length - 1 
                  ? "bg-primary text-primary-foreground" 
                  : "border-border/40 text-muted-foreground hover:border-primary/30 transition-colors"
              }`}
            >
              {benefit}
            </Badge>
          ))}
          <Button variant="premium" size="sm" className="ml-4">
            Contact Now
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Feature */}
          <Card className="bg-gradient-primary p-8 border-none relative overflow-hidden group hover:shadow-glow transition-all duration-500">
            <div className="relative z-10">
              <div className="mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 3l3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"/>
                    <path d="M19 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Submit Unlimited Requests</h3>
              </div>
              
              <div className="absolute bottom-8 right-8 opacity-60">
                <div className="text-6xl font-bold text-white/20">Next</div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-lg rotate-12 group-hover:rotate-45 transition-transform duration-500" />
            <div className="absolute bottom-16 left-8 w-8 h-8 bg-white/10 rounded-full group-hover:scale-125 transition-transform duration-500" />
          </Card>

          {/* Right Feature */}
          <Card className="bg-secondary/10 p-8 border border-border/40 relative overflow-hidden group hover:shadow-glow transition-all duration-500">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-foreground rounded flex items-center justify-center">
                  <span className="text-background font-bold text-sm">F</span>
                </div>
                <span className="text-foreground font-semibold">Framer</span>
                
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center ml-4">
                  <span className="text-primary-foreground font-bold text-sm">A</span>
                </div>
                <span className="text-foreground font-semibold">App Store</span>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold text-foreground">Requests & Revisions</h3>
                  <Badge className="bg-primary text-primary-foreground">NEW</Badge>
                </div>
                
                <p className="text-muted-foreground">
                  Our process includes multiple rounds of requests and<br />
                  revisions, ensuring that your feedback is incorporated and<br />
                  your vision is realized.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;