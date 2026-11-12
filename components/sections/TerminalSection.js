'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { projectStories } from '@/components/projectStories';

const shortcuts = ['help', 'projects', 'architecture', 'stack', 'experience', 'contact'];
const welcome = { command: 'whoami', text: 'Srinivasan B — Full Stack Developer\nCoimbatore, India\nAvailable for opportunities. Type help to explore.' };

function answer(command) {
  const responses = {
    help: { text: 'Available commands\nwhoami · building · stack · experience · location\nprojects · architecture · contact · resume · clear\n\nOpen a project: open school | open nostra | open expenses\nUse ↑ / ↓ to recall your recent commands.' },
    whoami: welcome,
    building: { text: 'Responsive web applications, interfaces, APIs, and connected data systems.' },
    stack: { text: 'React · Next.js · JavaScript · TypeScript\nNode.js · Express · MongoDB · PostgreSQL\nTailwind CSS · Prisma · Git', href: '#skills', label: 'Explore the toolkit' },
    experience: { text: 'Junior Full Stack Developer\nTwenty4 Jewellery Pvt Ltd — Present\n\nFull stack developer intern\nError Makes Clever Academy — October–December 2024', href: '#experience', label: 'View experience & certifications' },
    location: { text: 'Coimbatore, Tamil Nadu, India' },
    projects: { text: projectStories.map(p => `${p.id} — ${p.name}`).join('\n') + '\n\nTry open school, open nostra, or open expenses.', href: '#projects', label: 'View all projects' },
    architecture: { text: 'Interface → Application logic → Data\nExplore the layers and follow a request through a project.', href: '#engineering', label: 'Open architecture explorer' },
    contact: { text: 'Let’s build something together.\nbsrinivasan2004@gmail.com', href: '#contact', label: 'Contact Srinivasan' },
    resume: { text: 'My résumé is ready to download.', href: '/Srinivasan_Resume.pdf', label: 'Download résumé', download: true },
  };
  if (Object.hasOwn(responses, command)) return responses[command];
  if (command.startsWith('open ')) {
    const project = projectStories.find(p => p.id === command.slice(5));
    if (project) return { text: `${project.name}\n${project.summary}`, href: `#architecture-${project.id}`, label: 'Inspect this project', project: project.id };
  }
  return { text: `Command not found: ${command}\nType help to see the available commands.` };
}

export default function TerminalSection() {
  const [entries, setEntries] = useState([welcome]);
  const [value, setValue] = useState('');
  const [history, setHistory] = useState([]);
  const [cursor, setCursor] = useState(-1);
  const [announcement, setAnnouncement] = useState('');
  const log = useRef(null);
  const input = useRef(null);
  useEffect(() => { if (log.current) log.current.scrollTop = log.current.scrollHeight; }, [entries]);
  function run(raw) {
    const command = raw.trim().toLowerCase().replace(/\s+/g, ' ');
    if (!command) return;
    setHistory(previous => [...previous.slice(-29), command]);
    setCursor(-1); setValue('');
    if (command === 'clear') { setEntries([]); setAnnouncement('Terminal cleared.'); }
    else { const result = answer(command); setEntries(previous => [...previous.slice(-29), { ...result, command }]); setAnnouncement(result.text); }
    input.current?.focus({ preventScroll: true });
  }
  return <section className="portfolio-terminal"><div className="terminal-layout">
    <Reveal className="terminal-intro"><p className="eyebrow">INTERACTIVE / TERMINAL</p><h2>Ask the <em>terminal.</em></h2><p>A different way to explore my work. Type <button onClick={() => run('help')}>help</button>, discover my <button onClick={() => run('stack')}>stack</button>, or try <button onClick={() => run('open school')}>open school</button> to look inside a project.</p><span className="terminal-caption"><Terminal size={15} /> Portfolio commands · no installation needed</span></Reveal>
    <Reveal className="terminal-window" delay={.12}>
      <div className="terminal-titlebar"><span className="terminal-lights" aria-hidden="true"><i /><i /><i /></span><span>srinivasan@portfolio: ~</span><span className="terminal-ready">READY</span></div>
      <div className="terminal-log" ref={log} role="region" aria-label="Terminal output" tabIndex={0}>{entries.length ? entries.map((entry, i) => <div className="terminal-entry" key={`${i}-${entry.command}`}><p className="terminal-command"><span aria-hidden="true">$</span> {entry.command}</p><p className="terminal-output">{entry.text}</p>{entry.href && <a className="terminal-result-link" href={entry.href} download={entry.download || undefined} onClick={() => {if(entry.project) window.dispatchEvent(new CustomEvent('portfolio-project', {detail:entry.project}));}}>{entry.label} <ArrowRight size={14} /></a>}</div>) : <p className="terminal-output">Ready for your next command. Try help.</p>}</div>
      <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">{announcement}</p>
      <form className="terminal-prompt" onSubmit={event => {event.preventDefault(); run(value);}}><span aria-hidden="true">$</span><input ref={input} aria-label="Terminal command" aria-describedby="terminal-hint" value={value} maxLength={100} onChange={event => {setValue(event.target.value);setCursor(-1);}} autoComplete="off" autoCapitalize="none" spellCheck={false} placeholder="Type help and press Enter" onKeyDown={event => {
        if (event.key === 'ArrowUp' && history.length) {event.preventDefault(); const next = cursor < 0 ? history.length - 1 : Math.max(0,cursor - 1); setCursor(next); setValue(history[next]);}
        if (event.key === 'ArrowDown' && cursor >= 0) {event.preventDefault(); const next = cursor + 1; setCursor(next >= history.length ? -1 : next); setValue(history[next] || '');}
      }} /><button type="submit" aria-label="Run command"><ArrowRight size={18} /></button></form>
      <div className="terminal-shortcuts" aria-label="Suggested commands">{shortcuts.map(command => <button key={command} onClick={() => run(command)}>{command}</button>)}</div>
      <p id="terminal-hint" className="terminal-hint">Enter to run · ↑ ↓ history · clear to reset</p>
    </Reveal>
  </div></section>;
}
