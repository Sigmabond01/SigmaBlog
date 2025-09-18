import { Link } from "react-router-dom";
import AnimatedBlogText from "../components/ui/Animatedlogo";

const BlogHeader = () => {
  return (
    <div className="text-center py-16  font-mincho relative">
      <a
        href="https://x.com/Sigmabond01"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute -top-3 left-12 z-20"
      >
        <div className="w-48 h-44 hidden sm:block">
          <AnimatedBlogText />
        </div>
      </a>
      <h1 className="text-5xl font-bold text-white mb-2">BLOGS</h1>
      <p className="text-blue-300 text-lg tracking-wide mb-4">ブログ</p>
      <Link
  to="/"
  className="inline-block mt-4 px-4 py-2 border border-white text-white text-sm rounded hover:bg-white hover:text-slate-900 transition duration-300"
>
  ← Return to Home
</Link>

    </div>
  );
};

export default BlogHeader;
