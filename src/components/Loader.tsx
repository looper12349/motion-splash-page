import { useEffect, useState } from "react";

interface LoaderProps {
  message?: string;
  isVisible: boolean;
}

const Loader = ({ message = "Preparing your experience...", isVisible }: LoaderProps) => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev === "...") return "";
        return prev + ".";
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      <div className="text-center space-y-6">
        {/* Animated Logo */}
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto animate-pulse">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary-foreground">
              <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor"/>
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
          
          {/* Spinning ring */}
          <div className="absolute inset-0 w-16 h-16 border-2 border-primary/20 border-t-primary rounded-xl animate-spin mx-auto" />
        </div>

        {/* Loading Message */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground">
            {message}
          </h2>
          <p className="text-lg text-muted-foreground min-h-[1.5rem]">
            Loading{dots}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-secondary/20 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-gradient-primary" 
               style={{ 
                 animation: "loading-progress 2s ease-in-out infinite",
               }} 
          />
        </div>
      </div>

      <style>{`
        @keyframes loading-progress {
          0% { width: 0%; transform: translateX(-100%); }
          50% { width: 100%; transform: translateX(0%); }
          100% { width: 100%; transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Loader;