import Aboutcard from "./ui/Aboutcard";
import { BackgroundGradientAnimation } from "./ui/bg-gradient-animation";

export const About = () => {
  return (
    <BackgroundGradientAnimation>
      <div className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center px-4 text-center font-mincho">
        
        {/* About Card */}
        <div className="z-20 mb-8 animate-fade-in-up">
          <Aboutcard />
        </div>

        {/* Hero Heading */}
        <h1 className="z-20 text-4xl md:text-6xl text-white font-semibold leading-tight animate-fade-in-up delay-100">
          Everything I Build. <br className="hidden md:block" />
          Everything I Learn. All Here.
        </h1>

        {/* Subtext */}
        <p className="z-20 mt-4 text-zinc-300 text-base md:text-lg max-w-xl animate-fade-in-up delay-200">
          Welcome to SigmaBlog — the trail of a builder who refuses to stay average.
        </p>
      </div>
    </BackgroundGradientAnimation>
  );
};
