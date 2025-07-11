import { BackgroundGradientAnimation } from "./bg-gradient-animation";

const Aboutcard = () => {
  return (
    <div className="flex">
    <BackgroundGradientAnimation>
      <div className="relative z-10 w-full max-w-4xl px-4 py-8 mx-auto font-mincho">
        <div className="space-y-6">
          <div className="text-center border-b border-pink-500/30 pb-4">
            <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              コーディング哲学 • Coding Philosophy
            </h2>
            <p className="text-gray-300 font-mono text-xs md:text-sm">
              How I approach building, learning, and sharing in public.
            </p>
          </div>
          <div className="space-y-4">
            <Card
              color="pink"
              title="速く出荷、速く学ぶ • Ship Fast, Learn Faster"
              text="I don't wait for perfect. I ship, gather feedback, and iterate.
              Every deployment is a learning opportunity. This blog is my public changelog — no highlight reels."
            />
            <Card
              color="cyan"
              title="公開で構築 • Build in Public"
              text="Late nights, broken code, breakthrough moments — I document it all.
              This isn't just about the wins. It's about the process, the struggles, and the journey of figuring it out."
            />
            <Card
              color="yellow"
              title="目的のあるコード • Code with Purpose"
              text="Every line should solve a real problem. I'm not interested in building for vanity metrics.
              I build tools that actually help people get things done."
            />
          </div>

          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-4 rounded-lg border border-purple-500/20 hover:border-purple-400 transition-all duration-300">
            <h3 className="text-purple-400 font-bold mb-3 flex items-center">
              <span className="text-sm md:text-base">現在学習中 • Currently Learning</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm text-gray-300 font-mono">
              <LearningItem color="cyan" label="Japanese (N4 目標)" />
              <LearningItem color="purple" label="Backend Architecture" />
              <LearningItem color="blue" label="Database Design" />
              <LearningItem color="green" label="Technical Writing" />
            </div>
          </div>
          <div className="text-center pt-4 border-t border-pink-500/30">
            <p className="text-gray-400 text-xs md:text-sm italic font-mono leading-relaxed">
              "I don't chase likes. I chase leverage.
              <br />
              <span className="text-pink-400">やれば、できる。</span> • If I do it, I can do it."
            </p>
          </div>

          <div className="text-center mt-6 md:mt-8">
            <p className="text-gray-500 text-xs md:text-sm font-mono">
              <span className="text-pink-400">@sigmabond</span> •
              <span className="text-cyan-400 ml-2">深夜のコーディング</span> •
              <span className="ml-2">Building in the neon glow</span>
            </p>
            <div className="flex justify-center mt-2 space-x-1">
              <PulseDot color="pink" />
              <PulseDot color="purple" delay="100" />
              <PulseDot color="cyan" delay="200" />
            </div>
          </div>
        </div>
      </div>
    </BackgroundGradientAnimation>
    </div>
  );
};

const Card = ({ color,title, text }) => (
  <div
    className={`bg-gradient-to-r from-${color}-900/20 to-${color === "pink" ? "purple" : color}-900/20 p-4 rounded-lg border border-${color}-500/20 hover:border-${color}-400 transition-all duration-300 transform hover:scale-105`}
  >
    <h3 className={`text-${color}-400 font-bold mb-2 flex items-center`}>
      <span className="text-sm md:text-base">{title}</span>
    </h3>
    <p className="text-gray-300 text-xs md:text-sm font-mono leading-relaxed">
      {text}
    </p>
  </div>
);

const LearningItem = ({ color, label }) => (
  <div className="flex items-center gap-2">
    <span className={`w-2 h-2 bg-${color}-500 rounded-full animate-pulse`}></span>
    {label}
  </div>
);

const PulseDot = ({ color, delay }) => (
  <div
    className={`w-2 h-2 bg-${color}-500 rounded-full animate-pulse ${delay ? `delay-${delay}` : ""}`}
  ></div>
);

export default Aboutcard;
