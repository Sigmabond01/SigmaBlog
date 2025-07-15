import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";

import BlogHeader from "./BlogHeader";
import { blogPosts } from "./data/Blogdata";
import LoadingScreen from "../components/Loader";

const BlogList = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative min-h-screen w-full font-mincho">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('/aojp.webp')" }} />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />
      <div className="relative z-10">
        <BlogHeader />

        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group relative bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-xl overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-6">
                  <div className="flex items-center justify-between mb-4 text-blue-400/60 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-blue-300/60 text-sm mb-1">{post.titleJapanese}</p>
                  <p className="text-slate-300 mb-6 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full border border-blue-800/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <ArrowRight className="w-5 h-5 text-blue-400 group-hover:text-blue-300 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
