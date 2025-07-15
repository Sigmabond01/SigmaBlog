export const Contact = () => {
    return(
        <div className="min-h-screen w-full font-mincho bg-cover bg-center bg-[url('/japansky.webp')] relative">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-m"></div>
            <div className="relative z-10 flex items-center justify-center px-4 min-h-screen">
            <div className="bg-black/70 p-8 md:p-12 rounded-2xl shadow-2xl w-full max-w-2xl space-y-6">
            <form
            action="https://formspree.io/f/mdkzqrrk"
            method="POST"
            >
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">CONTACT ME</h1>

          <div className="space-y-4">
            <input type="text"
            placeholder="Name"
            className="w-full p-3 rounded-lg bg-white/90 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600" required/>
            <input type="text"
            placeholder="Phone"
            className="w-full p-3 rounded-lg bg-white/90 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600" required />
            <input type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-white/90 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600" required />
            <textarea placeholder="Message"
            rows={5}
            className="w-full p-3 rounded-lg bg-blue-950 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-600"  />
            <button className="w-full bg-gray-900 hover:bg-blue-900 text-white font-semibold py-3 rounded-md transition duration-500">Send</button>
          </div>
          </form>
            </div>
            </div>
        </div>
    );
};