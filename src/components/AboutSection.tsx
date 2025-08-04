import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

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
                • About Landin
              </Badge>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Building Stronger Brands<br />
                <span className="text-muted-foreground">Creating Impressions!</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Delivering high-quality, on-demand designs with precision.<br />
                Elevate your brand effortlessly, one snap at a time.
              </p>
            </div>

            {/* Stats */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-foreground font-semibold">From $0 to $500,000 in revenue.</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-foreground font-semibold">47% growth in new customers.</span>
              </div>
            </div>

            {/* CTA and Rating */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button variant="hero" size="xl">
                View About Landin
              </Button>
              
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">200+ Agencies Rated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;