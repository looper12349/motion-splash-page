import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const ProcessSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div>
              <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary border-primary/30">
                • How We Work?
              </Badge>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                We Simplify The Journey<br />
                <span className="text-muted-foreground">From Design To Launch.</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We make it easy to bring your ideas to life, guiding you from<br />
                concept to a fully launched product.
              </p>
            </div>

            {/* Process Card */}
            <Card className="bg-gradient-dark border-border/40 p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-semibold text-foreground">Kickoff</h3>
                    <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                      Stage 1
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    The kickoff stage is where everything begins. We align with you to<br />
                    understand your goals, vision, and expectations. Through in-depth<br />
                    discussions and thorough research.
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="outline" className="border-border/40 text-muted-foreground">
                      Comprehensive Consultation
                    </Badge>
                    <Badge variant="outline" className="border-border/40 text-muted-foreground">
                      Project Roadmap
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-dark border border-border/40">
              <img
                src="/lovable-uploads/15f62261-e0fa-4ec9-bc4a-e35fcc5fa176.png"
                alt="Professional working in nature"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating indicator */}
            <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
              <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;