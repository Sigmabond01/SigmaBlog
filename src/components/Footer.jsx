export const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-slate-900 via-slate-800 to-slate-900 text-white font-mincho px-6 py-8 mt-">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Sigmabond. All rights reserved.
        </p>

        <div className="flex space-x-6">
          <a
            href="https://x.com/Sigmabond01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition duration-300"
          >
            X (Twitter)
          </a>
          <a
            href="/"
            className="text-blue-400 hover:text-blue-300 transition duration-300"
          >
            Home
          </a>
        </div>
      </div>
    </footer>
  );
};

