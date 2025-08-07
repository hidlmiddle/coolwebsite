export default function VideoBackground() {
  return (
    <video
      className="fixed inset-0 w-full h-full object-cover -z-10"
      autoPlay
      loop
      muted
      playsInline
    >
      <source
        src="/Vercel_Glassmorphism_Background_Video.webm"
        type="video/webm"
      />
      Your browser does not support the video tag.
    </video>
  )
}
