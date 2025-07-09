
export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 px-4 text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-indigo-500 to-cyan-400 text-transparent bg-clip-text">
        SigmaBlog
      </h1>
      <p className="mt-4 max-w-xl text-zinc-400 text-lg md:text-xl">
        Building. Breaking. Blogging. A dev journal from the mind of Sigmabond —
        raw thoughts, shipped code, and lessons from the trenches.
      </p>
      <div className="mt-6">
        <a
          href="#blogs"
          className="inline-block rounded-2xl border border-cyan-500 px-6 py-3 text-cyan-400 hover:bg-cyan-500 hover:text-zinc-950 transition font-medium"
        >
          Read the Blog
        </a>
      </div>
    </section>
  );
}
