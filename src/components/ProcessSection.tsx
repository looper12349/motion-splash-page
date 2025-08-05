import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Users, Building, Zap } from "lucide-react"

const ProcessSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div>
              <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary border-primary/30">
                <Building className="w-3 h-3 mr-1" />
                Built For
              </Badge>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                From Planning to Publishing<br />
                <span className="text-muted-foreground">Jomobit Does It All</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Your brand deserves more than chaos and content calendars.<br />
                With Jomobit, you're always on-brand, on-trend, and on-time.
              </p>
            </div>

            {/* Process Card */}
            <Card className="bg-gradient-dark border-border/40 p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-6 pb-4 border-b border-border/20">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Startups & SMEs</h3>
                    <p className="text-muted-foreground text-sm">Looking to grow fast with fewer resources and needing consistent brand visibility.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 pb-4 border-b border-border/20">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Creators & Influencers</h3>
                    <p className="text-muted-foreground text-sm">Who want to stay relevant daily with automated content creation.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Enterprises</h3>
                    <p className="text-muted-foreground text-sm">Scaling content across multiple teams and regions efficiently.</p>
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