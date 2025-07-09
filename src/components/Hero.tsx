import { useRef, useEffect } from "react";


export default function Hero() {
      const videoRef = useRef<HTMLVideoElement>(null);

        useEffect(() => {
        const timer = setTimeout(() => {
        videoRef.current?.play();
        },);

        return () => clearTimeout(timer);
        }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden">
        <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute"
      >
        <source src="/rainynight.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-indigo-500 to-cyan-400 text-transparent bg-clip-text">
        SigmaBlog
      </h1>
      <p className="mt-4 max-w-xl text-zinc-400 text-lg md:text-xl">
        Personal dev blog about my journey
      </p>
      </div>
  );
}
