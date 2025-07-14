import { BackgroundGradientAnimation } from "./bg-gradient-animation";

const colorClasses = {
  cyan: "text-cyan-400",
  purple: "text-purple-400",
  blue: "text-blue-400",
  green: "text-green-400",
};

const Aboutcard = () => {
  return (
    <div className="flex">
      <BackgroundGradientAnimation>
        <div className="relative z-10 w-full max-w-4xl px-4 py-24 mx-auto font-mincho">
          <div className="space-y-8">
            <div className="text-center border-b border-blue-400 pb-4">
              <h1 className="text-xl md:text-2xl font-bold text-cyan-400 mb-2">
                このブログについて • About this Blog
              </h1>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                This website was created to improve my web development skills and explore writing through blogs.
                <br />
                I hope you find at least one useful blog here ^‿^
              </p>
            </div>

            <div className="space-y-6 text-blue-200">
              <Card
                color="cyan"
                title="選択的に共有 • Selective Sharing"
                text="This is where I write about the stuff worth writing about. Not everything makes it here — just the things that might be useful to someone else or interesting enough to revisit later."
              />
              <Card
                color="cyan"
                title="何が発表されるか • What I Post"
                text="I'm picky about what gets published. I only write blogs when I have something that might actually help someone — or that I’d want to reference again in six months."
              />
              <Card
                color="cyan"
                title="フィードバック • Open to Feedback"
                text="If you think my writing or any other content here can be improved, let me know!"
              />
            </div>

            <div>
              <h3 className="text-blue-200 font-bold mb-3 flex items-center">
                <span className="text-sm md:text-base text-cyan-400">現在学習中 • Currently Learning</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm text-gray-300">
                <LearningItem color="cyan" label="Japanese (N4 目標)" />
                <LearningItem color="purple" label="Backend Development" />
                <LearningItem color="blue" label="Database Design" />
                <LearningItem color="green" label="Technical Writing" />
              </div>
            </div>

            <div className="text-center pt-4 border-t border-blue-400">
              <p className="text-gray-400 text-xs md:text-sm italic leading-relaxed">
                I hope you enjoy the content I share here (^_^)
                <br />
                <span className="text-cyan-400">必要なことだけ。</span> • Only what's necessary.
              </p>
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
};

const Card = ({ color, title, text }) => (
  <div>
    <h3 className={`${colorClasses[color]} font-bold mb-2 flex items-center`}>
      <span className="text-sm md:text-base">{title}</span>
    </h3>
    <p className="text-gray-300 text-xs md:text-sm leading-relaxed">{text}</p>
  </div>
);

const LearningItem = ({ color, label }) => (
  <div className="flex items-center gap-2">
    <span className={`w-2 h-2 rounded-full animate-pulse bg-${color}-500`}></span>
    {label}
  </div>
);

export default Aboutcard;
