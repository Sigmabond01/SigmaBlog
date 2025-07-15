import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import Japanesefans from "/src/Japanesefans.json";

export default function LoadingScreen() {
  const [dots, setDots] = useState("");
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 5 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  if (!showLoading) return null;

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center text-white">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/aojp.webp')" }}
      />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10" />
      <div className="relative z-20 text-center space-y-6">
        <div className="w-24 h-24 mx-auto">
          <Lottie animationData={Japanesefans} loop autoplay />
        </div>
        <h2 className="text-3xl font-bold font-mincho tracking-wide">
          Loading Blogs{dots}
        </h2>
        <div className="flex justify-center space-x-2 mt-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-blue-200 animate-pulse"
              style={{
                animationDelay: `${i * 0.3}s`,
                animationDuration: "1.5s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}