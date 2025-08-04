interface VideoBackgroundProps {
  src: string;
  className?: string;
  overlay?: boolean;
}

const VideoBackground = ({ src, className = "", overlay = true }: VideoBackgroundProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      {overlay && (
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px]" />
      )}
    </div>
  );
};

export default VideoBackground;