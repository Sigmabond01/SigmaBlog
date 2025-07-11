import { NavbarDemo } from "./Navbar";
import Button from "./ui/StartedButton";
import AnimatedBlogText from "./ui/Animatedlogo";

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <NavbarDemo />

      {/* Background Image */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/street.jpg')"
        }}
      />

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-[5] backdrop-blur-sm" />

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
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 font-mincho font-semibold">
        <h1 className="text-white text-6xl">
          Everything I Build. Everything I Learn. All Here.
        </h1>
        <p className="mt-4 max-w-xl text-zinc-300 text-lg md:text-xl">
          Personal dev blog.
        </p>
      </div>
    </div>
  );
}