import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { CheckCircle, Star, Globe } from "lucide-react"

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-dark border border-border/40">
              <img
                src="/lovable-uploads/1eee98ec-c8e8-4cb3-814b-5485dab39f21.png"
                alt="Professional working on laptop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary border-primary/30">
                <Globe className="w-3 h-3 mr-1" />
                About Jomobit
              </Badge>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Manual content creation<br />
                <span className="text-muted-foreground">is history.</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With Jomobit, your brand can think, create, publish & grow<br />
                — all on autopilot.
              </p>
            </div>

            {/* Stats */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-primary-foreground" />
                </div>
                <span className="text-foreground font-semibold">Automate your entire social media lifecycle.</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-primary-foreground" />
                </div>
                <span className="text-foreground font-semibold">AI-powered content creation and analysis.</span>
              </div>
            </div>

            {/* CTA and Rating */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button variant="hero" size="xl">
                Launch with Jomobit
              </Button>
              
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">1000+ Brands Automated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;