import Image from 'next/image';
import Link from 'next/link';


export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0f1f] via-[#111827] to-[#050816] text-white flex items-center">
      {/* Background Glows */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute top-20 right-[-120px] w-[420px] h-[420px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-120px] left-1/3 w-[380px] h-[380px] bg-blue-500/20 rounded-full blur-[120px]animate-pulse"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div className="space-y-6">
          <p className="text-cyan-300 font-semibold uppercase tracking-wide animate-fade-in">
            Full Stack Developer
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-slide-up delay-200">
            Hi, I'm <br />
            <span className="text-purple-400 animate-glow">
              Srinivasan B
            </span>
          </h1>

          <div className="overflow-hidden">
            <h2 className="typing text-2xl md:text-3xl font-semibold text-gray-200">
              MERN & Next.js Developer
            </h2>
          </div>

          <p className="text-gray-400 text-lg leading-8 max-w-lg animate-slide-up delay-600">
            I build fast, responsive, and modern web applications with React, Next.js, Node.js, Express, and MongoDB, focusing on clean UI and real-world user experience.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 animate-slide-up delay-800">
            <a
              href="#contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-7 py-3 rounded-xl font-medium transition shadow-lg shadow-cyan-500/20 hover:scale-105 duration-300">
              Hire Me
            </a>

            <a
              href="#projects"
              className="border border-purple-400 text-purple-300 hover:bg-purple-500/10 px-7 py-3 rounded-xl font-medium transition hover:scale-105 duration-300">
              See Projects
            </a>

            <a
              href="/Srinivasan_B_Resume.pdf"
              download
              className="flex items-center gap-2 bg-white/5 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/10 px-7 py-3 rounded-xl font-medium transition hover:scale-105 duration-300 backdrop-blur-md">
              ⬇ Download CV
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-[320px] h-[420px] md:w-[460px] md:h-[580px]">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 p-[2px] animate-float">
              <div className="w-full h-full rounded-[2rem] bg-[#0b1120]"></div>
            </div>

            <div className="absolute -inset-6 bg-cyan-500/10 blur-2xl rounded-full"></div>

            <div className="relative w-full h-full p-2">
              <Image
                src="/me.jpg"
                alt="Srinivasan B"
                fill
                priority
                sizes="(max-width: 768px) 320px, 460px"
                className="object-cover rounded-[1.8rem]"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}