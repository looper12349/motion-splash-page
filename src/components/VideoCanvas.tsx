import { useEffect, useRef, useState } from "react";
import { Canvas as FabricCanvas } from "fabric";

interface VideoCanvasProps {
  videoSrc: string;
  className?: string;
  onVideoLoaded?: () => void;
  onVideoError?: () => void;
}

const VideoCanvas = ({ videoSrc, className = "", onVideoLoaded, onVideoError }: VideoCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fabricCanvasRef = useRef<FabricCanvas | null>(null);
  const animationRef = useRef<number>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize fabric canvas
    const canvas = new FabricCanvas(canvasRef.current, {
      width: window.innerWidth,
      height: window.innerHeight,
      selection: false,
      interactive: false,
    });

    fabricCanvasRef.current = canvas;

    // Create video element
    const video = document.createElement('video');
    video.src = videoSrc;
    video.crossOrigin = 'anonymous';
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.style.display = 'none';
    
    videoRef.current = video;
    document.body.appendChild(video);

    const handleVideoLoad = () => {
      setIsLoading(false);
      onVideoLoaded?.();
      startVideoRendering();
    };

    const handleVideoError = () => {
      setIsLoading(false);
      onVideoError?.();
      console.error('Failed to load video');
    };

    const startVideoRendering = () => {
      const renderFrame = () => {
        if (video.readyState >= 2 && canvas) {
          const ctx = canvas.getContext();
          if (ctx) {
            // Calculate video dimensions to cover the canvas
            const canvasAspect = canvas.width / canvas.height;
            const videoAspect = video.videoWidth / video.videoHeight;
            
            let drawWidth, drawHeight, offsetX = 0, offsetY = 0;
            
            if (canvasAspect > videoAspect) {
              // Canvas is wider - fit to width
              drawWidth = canvas.width;
              drawHeight = drawWidth / videoAspect;
              offsetY = (canvas.height - drawHeight) / 2;
            } else {
              // Canvas is taller - fit to height
              drawHeight = canvas.height;
              drawWidth = drawHeight * videoAspect;
              offsetX = (canvas.width - drawWidth) / 2;
            }

            ctx.drawImage(video, offsetX, offsetY, drawWidth, drawHeight);
            canvas.renderAll();
          }
        }
        animationRef.current = requestAnimationFrame(renderFrame);
      };
      
      renderFrame();
    };

    video.addEventListener('loadeddata', handleVideoLoad);
    video.addEventListener('error', handleVideoError);
    video.load();

    // Handle window resize
    const handleResize = () => {
      canvas.setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (videoRef.current) {
        document.body.removeChild(videoRef.current);
      }
      canvas.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, [videoSrc, onVideoLoaded, onVideoError]);

  return (
    <div className={`relative ${className}`}>
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full object-cover"
        style={{ 
          filter: 'brightness(0.7)',
          zIndex: 1 
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/40 z-10" />
    </div>
  );
};

export default VideoCanvas;