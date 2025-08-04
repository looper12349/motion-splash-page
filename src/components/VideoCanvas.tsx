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

    let isMounted = true;

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

    const handleVideoLoad = () => {
      if (!isMounted) return;
      console.log('Video loaded successfully');
      setIsLoading(false);
      onVideoLoaded?.();
      startVideoRendering();
    };

    const handleVideoError = (error: any) => {
      if (!isMounted) return;
      console.error('Failed to load video:', error);
      setIsLoading(false);
      onVideoError?.();
    };

    const startVideoRendering = () => {
      if (!isMounted || !canvasRef.current) return;
      
      const renderFrame = () => {
        if (!isMounted || !video || !canvasRef.current) return;
        
        if (video.readyState >= 2) {
          try {
            // Get the actual canvas context from the HTML canvas element
            const ctx = canvasRef.current.getContext('2d');
            if (ctx && video.videoWidth > 0 && video.videoHeight > 0) {
              // Calculate video dimensions to cover the canvas
              const canvasWidth = canvasRef.current.width;
              const canvasHeight = canvasRef.current.height;
              const canvasAspect = canvasWidth / canvasHeight;
              const videoAspect = video.videoWidth / video.videoHeight;
              
              let drawWidth, drawHeight, offsetX = 0, offsetY = 0;
              
              if (canvasAspect > videoAspect) {
                // Canvas is wider - fit to width
                drawWidth = canvasWidth;
                drawHeight = drawWidth / videoAspect;
                offsetY = (canvasHeight - drawHeight) / 2;
              } else {
                // Canvas is taller - fit to height
                drawHeight = canvasHeight;
                drawWidth = drawHeight * videoAspect;
                offsetX = (canvasWidth - drawWidth) / 2;
              }

              // Clear canvas before drawing
              ctx.clearRect(0, 0, canvasWidth, canvasHeight);
              ctx.drawImage(video, offsetX, offsetY, drawWidth, drawHeight);
            }
          } catch (error) {
            console.error('Error rendering video frame:', error);
          }
        }
        
        if (isMounted) {
          animationRef.current = requestAnimationFrame(renderFrame);
        }
      };
      
      renderFrame();
    };

    // Handle window resize
    const handleResize = () => {
      if (canvas && isMounted) {
        canvas.setDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }
    };

    // Add event listeners
    video.addEventListener('loadeddata', handleVideoLoad);
    video.addEventListener('error', handleVideoError);
    video.addEventListener('canplay', handleVideoLoad);
    window.addEventListener('resize', handleResize);

    // Append video to DOM and load
    try {
      document.body.appendChild(video);
      video.load();
    } catch (error) {
      console.error('Error loading video:', error);
      handleVideoError(error);
    }

    return () => {
      isMounted = false;
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      if (videoRef.current) {
        try {
          videoRef.current.removeEventListener('loadeddata', handleVideoLoad);
          videoRef.current.removeEventListener('error', handleVideoError);
          videoRef.current.removeEventListener('canplay', handleVideoLoad);
          
          if (document.body.contains(videoRef.current)) {
            document.body.removeChild(videoRef.current);
          }
        } catch (error) {
          console.error('Error cleaning up video:', error);
        }
      }
      
      if (canvas) {
        try {
          canvas.dispose();
        } catch (error) {
          console.error('Error disposing canvas:', error);
        }
      }
      
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