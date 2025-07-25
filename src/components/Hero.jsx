import { NavbarDemo } from "./Navbar";
import Button from "./ui/ContactButton";
import AnimatedBlogText from "./ui/Animatedlogo";

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <NavbarDemo />
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/street.webp')"
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-[5] backdrop-blur-sm" />
      <a
        href="https://x.com/Sigmabond01"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute -top-3 left-4 sm:left-8 md:left-12 z-20 hidden sm:block"
      >
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-44">
          <AnimatedBlogText />
        </div>
      </a>
      <div className="absolute right-4 sm:right-8 md:right-12 z-20 hidden sm:block">
        <Button />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 font-mincho font-semibold">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Everything I Build. Everything I Learn. All Here.
        </h1>
        <p className="mt-4 max-w-xl text-zinc-300 text-base sm:text-lg md:text-xl">
          Personal dev blog.
        </p>
      </div>
    </div>
  );
}