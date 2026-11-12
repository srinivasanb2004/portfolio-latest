'use client';
import { useState } from 'react';
import { ArrowUpRight, Code2, ScanLine } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { projectStories } from '@/components/projectStories';

export default function CaseStudiesSection() {
  const [selected, setSelected] = useState(0);
  const project = projectStories[selected];
  return <section className="portfolio-lab"><div className="lab-shell">
    <Reveal><p className="eyebrow">BUILD NOTES / SELECTED APPLICATIONS</p><h2>Beyond the <em>finished screen.</em></h2><p className="lab-intro">The problem, the implementation scope, and the thinking behind the stack.</p></Reveal>
    <div className="lab-selector" aria-label="Choose a case study">{projectStories.map((item, i) => <button key={item.id} aria-pressed={i === selected} aria-controls="case-study-content" onClick={() => setSelected(i)}><span>0{i + 1}</span>{item.name}</button>)}</div>
    <Reveal><article className="case-console" id="case-study-content">
      <div className="lab-console-bar"><span><Code2 size={16} /> BUILD DOSSIER / 0{selected + 1}</span><span className="lab-status">PROJECT NOTES</span></div>
      <div className="case-layout" key={project.id}>
        <div className="case-lead"><p className="eyebrow">{project.name}</p><h3>{project.title}</h3><p>{project.summary}</p><div className="lab-chips">{project.stack.map(tool => <span key={tool}>{tool}</span>)}</div><div className="lab-actions"><a href={project.demo} target="_blank" rel="noopener noreferrer">Open application <ArrowUpRight size={16} /></a><a href={project.repo} target="_blank" rel="noopener noreferrer">View source <Code2 size={16} /></a></div></div>
        <div className="case-notes">{[['01', 'The challenge', project.challenge], ['02', 'Implementation scope', project.scope], ['03', 'Design rationale', project.decision]].map(([n, title, description]) => <div key={n}><span className="case-note-index">{n}</span><div><h4>{title}</h4><p>{description}</p></div></div>)}</div>
      </div>
      <div className="lab-console-footer"><ScanLine size={15} /><span>Explore the system behind this build</span><a href={`#architecture-${project.id}`} onClick={() => window.dispatchEvent(new CustomEvent('portfolio-project', {detail: project.id}))}>Inspect architecture <ArrowUpRight size={15} /></a></div>
    </article></Reveal>
  </div></section>;
}
