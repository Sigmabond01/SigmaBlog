import { useRef, useEffect } from "react";
import { NavbarDemo } from "./Navbar";
import Button from "./ui/StartedButton";
import AnimatedBlogText from "./ui/Animatedlogo";

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play();
    const loopInterval = setInterval(() => {
      video.currentTime = 0;
      video.play();
    }, 5000);

    return () => clearInterval(loopInterval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <NavbarDemo />

      <video
        ref={videoRef}
        muted
        playsInline
        autoPlay
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/torotoro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-[5]" />

      {/* Logo Top Left */}
      <a
        href="https://x.com/Sigmabond01"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute -top-3 left-12 z-20"
      >
        <div className=" w-48 h-44">
          <AnimatedBlogText />
        </div>
      </a>

      <div className="absolute right-12 z-20">
        <Button />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 font-mincho">
        <p className="mt-4 max-w-xl text-zinc-300 text-lg md:text-xl">
          Personal dev blog about my journey
        </p>
      </div>
    </div>
  );
}