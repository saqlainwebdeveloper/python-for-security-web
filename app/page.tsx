export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-black via-gray-900 to-black text-white flex flex-col items-center justify-center p-6">

      {/* Logo */}
      <div className="mb-8">
        <img 
          src="/logo.png" 
          alt="Logo" 
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-cyan-400 shadow-lg"
        />
      </div>

      {/* Main Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-6 tracking-wide text-cyan-400">
        Python for Security — Resources
      </h1>

      {/* Description */}
      <p className="text-center text-lg md:text-xl max-w-3xl mb-12 opacity-80">
        Download all episode-wise <span className="text-[#1ef]">PDF notes</span> for the <strong className="text-[#1ef]">Python for Security</strong> YouTube Series. New PDFs will appear automatically on this Resources page. Follow the course on YouTube for step-by-step tutorials by <span className="text-[#1ef]">Muhammad Saqlain Shoukat</span>!
      </p>

      {/* Buttons Container */}
      <div className="flex flex-col md:flex-row gap-6">

        {/* Resources Button */}
        <a
          href="/resources"
          className="px-10 py-4 bg-[#1f1f1f] rounded-3xl text-2xl font-bold shadow-[0_0_25px_rgba(0,255,255,0.5)] hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,255,0.8)] transition-transform duration-300"
        >
          📘 Resources
        </a>

        {/* YouTube Channel Button */}
        <a
          href="https://www.youtube.com/@CodingChatRoom"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 bg-red-600 rounded-3xl text-2xl font-bold shadow-[0_0_25px_rgba(255,0,0,0.5)] hover:scale-105 hover:shadow-[0_0_40px_rgba(255,0,0,0.8)] transition-transform duration-300"
        >
          ▶ YouTube
        </a>

        {/* Course Playlist Button */}
        <a
          href="https://www.youtube.com/playlist?list=PL-Y4YkNs_EJGZEMaG6vck4KSS-WGXGxJf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 bg-green-600 rounded-3xl text-2xl font-bold shadow-[0_0_25px_rgba(0,255,0,0.5)] hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,0,0.8)] transition-transform duration-300"
        >
          📺 Full Course
        </a>

      </div>
      
    </main>
  );
}
