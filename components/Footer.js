import { FaGithub, FaLinkedin, FaWhatsapp, FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816] text-white">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,#22d3ee,transparent_60%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold">
            <span className="text-cyan-300">Srinivasan</span>
            <span className="text-purple-300">.dev</span>
          </h3>

          <p className="text-gray-400 mt-2 max-w-md">
            Full Stack Developer passionate about building modern web
            applications with React, Next.js, Node.js, and MongoDB.
          </p>
        </div>

        {/* Socials */}
        <div className="flex gap-4">
          <a
            href="https://github.com/Srinivasanb2004"
            target="_blank"
            className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-cyan-300 hover:border-cyan-400 hover:bg-cyan-400/10 hover:-translate-y-1 transition duration-300">
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/srinivasan2004/"
            target="_blank"
            className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-cyan-300 hover:border-cyan-400 hover:bg-cyan-400/10 hover:-translate-y-1 transition duration-300">
            <FaLinkedin />
          </a>

          <a
            href="https://wa.me/916381296152?text=Hi%20Srinivasan,%20I%20saw%20your%20portfolio."
            target="_blank"
            className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-green-400 hover:border-green-400 hover:bg-green-400/10 transition duration-300"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-gray-400 text-sm flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Srinivasan B. All rights reserved.</p>

          <p className="flex items-center gap-1">
            Made with <FaHeart className="text-red-400 animate-pulse" />
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}