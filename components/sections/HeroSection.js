import TypedHeroHeading from '@/components/TypedHeroHeading';
import MachineCore from '@/components/MachineCore';
import Image from 'next/image';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function HeroSection() {
  return (
    <section className="hero-stage">
      <div className="hero-orbit" aria-hidden="true"><i /><i /><i /></div>
      <div className="hero-topline"><span>FULL STACK DEVELOPER / DIGITAL SYSTEMS</span><span>BASED IN COIMBATORE, INDIA</span></div>
      <div className="hero-composition">
        <div className="hero-copy">
          <Reveal><p className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</p></Reveal>
          <TypedHeroHeading />
          <Reveal delay={0.24}><p className="hero-intro">I’m Srinivasan B. A full stack developer turning complex ideas into intuitive digital experiences.</p></Reveal>
          <p className="hero-skill-summary">React · Next.js · Node.js · MongoDB</p>
          <Reveal delay={0.36} className="hero-actions"><a className="lux-button" href="#projects">View projects <ArrowUpRight size={18} /></a><a className="text-link" href="/Srinivasan_Resume.pdf" download>Download résumé <ArrowDown size={17} /></a><a className="text-link" href="#contact">Contact me <ArrowUpRight size={17} /></a></Reveal>
        </div>
        <Reveal delay={0.25} className="hero-machine">
          <MachineCore />
          <div className="developer-signature"><Image src="/me.jpg" alt="Srinivasan B" width={44} height={44} /><span><strong>Srinivasan B.</strong><small>Full Stack Developer · Coimbatore, India</small></span><span className="signature-mark">&lt;/&gt;</span></div>
        </Reveal>
      </div>
      <div className="hero-bottom"><a href="#about"><ArrowDown size={16} /> SCROLL TO DISCOVER</a><span>REACT / NEXT.JS / NODE.JS / MONGODB</span><span>PORTFOLIO — 2026</span></div>
    </section>
  );
}
