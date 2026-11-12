'use client';
import ThemeToggle from '@/components/ThemeToggle';
import CommandPalette from '@/components/CommandPalette';
import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight, Download } from 'lucide-react';
const links = ['About', 'Skills', 'Engineering', 'Experience', 'Projects', 'Contact'];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    }), { rootMargin: '-30% 0px -55% 0px' });
    document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
    const escape = event => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', escape);
    return () => { observer.disconnect(); window.removeEventListener('keydown', escape); };
  }, []);
  return <header className="site-header">
    <a href="#home" className="wordmark" aria-label="Srinivasan home" onClick={() => setOpen(false)}>srinivasan<span>.</span><small>Full Stack Developer</small></a>
    <nav id="main-navigation" aria-label="Main navigation" className={`main-navigation ${open ? 'is-open' : ''}`}>
      {links.map(link => <a key={link} href={`#${link.toLowerCase()}`} aria-current={active === link.toLowerCase() ? 'location' : undefined} onClick={() => setOpen(false)}>{link}</a>)}
      <a href="/Srinivasan_Resume.pdf" download className="nav-resume">Résumé <Download size={14} /></a>
    </nav>
    <a className="nav-contact" href="#contact">Let’s connect <ArrowUpRight size={16} /></a>
    <CommandPalette />
    <ThemeToggle />
    <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </header>;
}
