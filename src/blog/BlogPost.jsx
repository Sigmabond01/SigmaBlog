import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { blogPosts } from './data/Blogdata';
import BlogHeader from './BlogHeader';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Post not found</h2>
        <Link
          to="/blogs"
          className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
        >
          Return to blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 min-h-screen">
      <BlogHeader />
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
            {/* Meta Info */}
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

            {/* Titles */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {post.title}
            </h1>
            <p className="text-blue-300/80 text-lg mb-8 font-light">
              {post.titleJapanese}
            </p>

            {/* Tags */}
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

            {/* Content */}
            <div className="prose prose-invert prose-blue max-w-none">
              <div className="text-slate-300 leading-relaxed space-y-6">
                {post.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-lg leading-8">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
