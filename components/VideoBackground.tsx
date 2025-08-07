export default function VideoBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Video element */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/Verceland_Glassmorphism_Background_Video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
