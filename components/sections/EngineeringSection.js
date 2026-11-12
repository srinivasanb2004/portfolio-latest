'use client';



import Reveal from '@/components/Reveal';
import ArchitectureExplorer from '@/components/ArchitectureExplorer';

export default function EngineeringSection() {


  return <section className="engineering-section">
    <div className="engineering-shell">
      <Reveal className="engineering-heading"><p className="eyebrow">THE ENGINEERING / BEHIND THE EXPERIENCE</p><h2>Beautiful on the surface.<br /><em>Considered at every layer.</em></h2><p>I connect interfaces, application logic, and data to build complete web experiences. Explore my project stacks, follow a request, and inspect conceptual data relationships.</p></Reveal>
      <Reveal delay={0.12}><ArchitectureExplorer /></Reveal>
      <div className="build-process">
        {[
          ['01', 'Understand', 'Start with the problem, the people, and the essential user journey.'],
          ['02', 'Design & build', 'Connect thoughtful interfaces to clear application logic and data.'],
          ['03', 'Refine', 'Review responsiveness, edge cases, and the details of each interaction.'],
        ].map(([number, title, description], index) => <Reveal key={number} delay={index * .1}><span className="process-number">{number} /</span><h3>{title}</h3><p>{description}</p></Reveal>)}
      </div>
    </div>
  </section>;
}

