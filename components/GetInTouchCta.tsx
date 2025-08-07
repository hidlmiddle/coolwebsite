import Link from "next/link";
import Image from "next/image";

export default function GetInTouchCta({
  href = "#contact",
  className = "",
  width = 384,
  height = 96,
}: {
  href?: string;
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <Link 
      href={href} 
      aria-label="Get in Touch" 
      className={`inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${className}`}
    >
      <Image
        src="/images/get-in-touch.png"
        alt="Get in Touch"
        width={width}
        height={height}
        priority
        sizes="(max-width: 768px) 256px, 384px"
      />
    </Link>
  );
}
