export default function VideoBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {/* Video container */}
      <div className="absolute inset-0">
        {/* Dark overlay for better content visibility */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        
        {/* Video element */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/videos/poster.jpg"
        >
          <source 
            src="/videos/Verceland_Glassmorphism_Background_Video.mp4" 
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
