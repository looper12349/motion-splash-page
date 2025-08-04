import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import VideoCanvas from "./VideoCanvas"
import { useState } from "react"

const HeroSection = ({ onVideoLoaded }: { onVideoLoaded?: () => void }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
    onVideoLoaded?.();
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <VideoCanvas 
        videoSrc="https://framerusercontent.com/assets/x63grw3MJJK8pzlD0qnG8C0qVfs.mp4"
        className="absolute inset-0"
        onVideoLoaded={handleVideoLoaded}
      />
      
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="mb-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-primary/20 text-primary border-primary/30">
              NEW
              <span className="ml-2 text-muted-foreground">No. 1 Studio of 2025</span>
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="block text-foreground">Premium Agency</span>
            <span className="block text-foreground">for </span>
            <span className="block text-foreground">Creatives.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            We specialize in crafting unique digital presence<br />
            that help businesses grow and stand out in their industries.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="premium" size="xl" className="min-w-[200px]">
              Connect With Us
            </Button>
            <Button variant="ghost" size="xl" className="min-w-[200px] text-muted-foreground hover:text-foreground">
              What is Landin?
            </Button>
          </div>

          {/* Brand Logos */}
          <div className="flex items-center justify-center gap-8 opacity-60">
            <div className="text-muted-foreground font-semibold text-sm">
              LOGO IPSUM
            </div>
            <div className="text-muted-foreground font-semibold text-sm">
              IPSUM
            </div>
            <div className="text-muted-foreground font-semibold text-sm">
              LOREM
            </div>
          </div>
        </div>

        {/* Floating Video Element */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block z-30">
          <div className="w-80 h-48 rounded-2xl overflow-hidden border border-primary/30 shadow-glow bg-gradient-dark">
            <VideoCanvas 
              videoSrc="https://framerusercontent.com/assets/x63grw3MJJK8pzlD0qnG8C0qVfs.mp4"
              className="w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center z-40">
              <Button variant="ghost" size="icon" className="w-16 h-16 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/30">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-15" />
    </section>
  );
};

export default HeroSection;