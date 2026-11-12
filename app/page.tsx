import EngineeringSection from '@/components/sections/EngineeringSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import TerminalSection from '@/components/sections/TerminalSection';
import CinematicScene from '@/components/CinematicScene';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import PortfolioChatbot from '@/components/PortfolioChatbot';

import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative isolate">
      <section id="home" className="cinematic-section">
        <CinematicScene chapter="01" label="Introduction" />
        <HeroSection />
      </section>

      <section id="about" className="cinematic-section">
        <CinematicScene chapter="02" label="The person" />
        <AboutSection />
      </section>

      <section id="skills" className="cinematic-section">
        <CinematicScene chapter="03" label="The toolkit" />
        <SkillsSection />
      </section>

      <section id="engineering" className="cinematic-section">
        <CinematicScene chapter="04" label="Engineering" />
        <EngineeringSection />
      </section>

      <section id="experience" className="cinematic-section">
        <CinematicScene chapter="05" label="The journey" />
        <ExperienceSection />
      </section>

      <section id="projects" className="cinematic-section">
        <CinematicScene chapter="06" label="Selected work" />
        <ProjectsSection />
      </section>

      <section id="case-studies" className="cinematic-section">
        <CinematicScene chapter="07" label="Build notes" />
        <CaseStudiesSection />
      </section>

      <section id="terminal" className="cinematic-section">
        <CinematicScene chapter="08" label="Command line" />
        <TerminalSection />
      </section>

      <section id="contact" className="cinematic-section">
        <CinematicScene chapter="09" label="Next chapter" />
        <ContactSection />
      </section>

      <Footer/>
      <PortfolioChatbot />
    </main>
  );
}
