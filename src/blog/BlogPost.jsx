import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { blogPosts } from "./data/Blogdata";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id.toString() === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center font-mincho bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Post Not Found</h2>
          <Link
            to="/blogs"
            className="text-blue-400 hover:text-blue-300 underline transition-colors duration-300"
          >
            Return to Blog List
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full font-mincho">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/gradbg.webp')" }}
      />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <Link
            to="/blogs"
            className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to blog</span>
          </Link>

          <article className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden">
            <div className="p-8 md:p-12">
              {/* data */}
              <div className="flex items-center space-x-6 mb-6 text-blue-400/60 text-sm">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                {post.title}
              </h1>
              <p className="text-blue-300/80 text-lg mb-8 font-light">
                {post.titleJapanese}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center space-x-1 px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-800/30"
                  >
                    <Tag className="w-3 h-3" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
              <div className="prose prose-invert prose-blue max-w-none text-slate-300 prose-img:rounded-lg prose-a:text-blue-400 prose-a:hover:text-blue-300 prose-headings:text-white prose-li:marker:text-blue-300">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                >
                  {post.content}
                </ReactMarkdown>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
