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
    <section id="home" className="relative w-full min-h-screen overflow-hidden">
      {/* Background Video Canvas - Full screen behind everything */}
      <div className="absolute inset-0 w-full h-full min-h-screen">
        <VideoCanvas
          videoSrc="https://framerusercontent.com/assets/x63grw3MJJK8pzlD0qnG8C0qVfs.mp4"
          className="w-full h-full"
          onVideoLoaded={handleVideoLoaded}
        />
      </div>

      {/* Dark Blue Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full min-h-screen bg-gradient-to-br from-blue-950/90 via-blue-900/85 to-indigo-950/90" />

      {/* Main Content - Properly centered */}
      <div className="relative w-full min-h-screen z-10 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto text-center">

          {/* Badge */}
          <div className="mb-6 sm:mb-8">
            <Badge className="inline-flex items-center px-3 py-1.5 text-xs sm:text-sm bg-blue-600/20 text-blue-300 border border-blue-500/30 backdrop-blur-sm rounded-full">
              NEW
              <span className="ml-2 text-blue-200/80">No. 1 Studio of 2025</span>
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight text-white">
            Premium Agency<br />
            for Creatives.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100/90 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            We specialize in crafting unique digital presence<br className="hidden sm:block" />
            that help businesses grow and stand out in their industries.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto min-w-[180px] bg-white text-blue-950 hover:bg-blue-50 font-semibold px-6 sm:px-8 py-3 rounded-lg transition-all duration-200"
            >
              Connect With Us
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-w-[180px] text-white hover:text-blue-950 hover:bg-white font-semibold px-6 sm:px-8 py-3 rounded-lg border-2 border-white/30 hover:border-white transition-all duration-200"
            >
              What is Landin?
            </Button>
          </div>

          {/* Brand Logos */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12 opacity-60 px-4">
            <div className="text-blue-200/70 font-semibold text-xs sm:text-sm tracking-wider">
              LOGO IPSUM
            </div>
            <div className="text-blue-200/70 font-semibold text-xs sm:text-sm tracking-wider">
              IPSUM
            </div>
            <div className="text-blue-200/70 font-semibold text-xs sm:text-sm tracking-wider">
              LOREM
            </div>
          </div>
        </div>

      </div>

      {/* Floating Video Element - Positioned absolutely within the hero */}
      {/* <div className="absolute right-4 sm:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 hidden lg:block z-30">
        <div className="w-72 lg:w-80 h-44 lg:h-48 rounded-2xl overflow-hidden border border-blue-400/30 shadow-2xl bg-gradient-to-br from-blue-900/40 to-indigo-900/40 backdrop-blur-sm">
          <div className="relative w-full h-full">
            <VideoCanvas
              videoSrc="https://framerusercontent.com/assets/x63grw3MJJK8pzlD0qnG8C0qVfs.mp4"
              className="w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <Button
                variant="ghost"
                size="icon"
                className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/20 text-white transition-all duration-200"
              >
                <svg className="w-6 h-6 lg:w-8 lg:h-8 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-background/80 via-background/40 to-transparent pointer-events-none z-20" />
    </section>
  );
};

export default HeroSection;