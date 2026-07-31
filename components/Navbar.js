'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Experience', path: '#experience' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' },
  ];

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.path.replace('#', ''));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050816]/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center font-bold text-black shadow-lg shadow-cyan-500/30">
            S
          </div>

          <div className="leading-tight">
            <div className="text-lg font-bold">
              <span className="text-cyan-300">Srinivasan B</span>
            </div>

            <div className="text-xs text-purple-300 tracking-wide">
              Full Stack Developer
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.path.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.path}
                className={`relative transition duration-300 group font-medium ${
                  isActive ? 'text-cyan-300' : 'text-gray-200 hover:text-cyan-300'
                }`}>
                {link.name}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </a>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="/Srinivasan_Resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-200 hover:bg-cyan-400/20 hover:border-cyan-400/60 transition duration-300 text-sm font-medium">
            ⬇ CV
          </a>

          <a
            href="#contact"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium shadow-lg shadow-cyan-500/20 hover:scale-105 transition duration-300 text-sm">
            Let's Talk
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg border border-white/10 bg-white/5 text-cyan-300 hover:bg-cyan-400/10 transition"
          aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0b1120]/95 backdrop-blur-xl">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-gray-200 hover:text-cyan-300 hover:bg-white/5 transition font-medium border border-transparent hover:border-cyan-400/20">
                {link.name}
              </a>
            ))}

            <a
              href="/Srinivasan_B_Resume.pdf"
              download
              className="mt-2 px-4 py-3 rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-200 hover:bg-cyan-400/20 transition font-medium text-center">
              ⬇ Download CV
            </a>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-center shadow-lg shadow-cyan-500/20">
              Let's Talk
            </a>
          </nav>
        </div>
      )}

      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>
    </header>
  );
}