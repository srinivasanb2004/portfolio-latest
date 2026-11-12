'use client';
import { useEffect, useRef, useState } from 'react';
import { Search, X, ArrowUpRight } from 'lucide-react';
const commands = [
  ['Ask the terminal', 'Explore the portfolio with interactive commands', '#terminal'],
  ['Selected projects', 'Browse applications and source code', '#projects'],
  ['Project case studies', 'Problems, implementation, and decisions', '#case-studies'],
  ['Architecture explorer', 'Inspect application layers and data flow', '#engineering'],
  ['Skills & technologies', 'Explore my development toolkit', '#skills'],
  ['Experience & certifications', 'Roles and credentials', '#experience'],
  ['About Srinivasan', 'Meet the developer', '#about'],
  ['Download résumé', 'Get my résumé as a PDF', '/Srinivasan_Resume.pdf'],
  ['Contact', 'Start a conversation', '#contact'],
];
export default function CommandPalette() {
  const dialog = useRef(null);
  const input = useRef(null);
  const previousFocus = useRef(null);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const results = commands.filter(item => item.join(' ').toLowerCase().includes(query.toLowerCase().trim()));
  const open = () => { if (dialog.current.open) return; previousFocus.current = document.activeElement; setQuery(''); setActive(0); dialog.current.showModal(); input.current.focus(); };
  const close = () => dialog.current.close();
  useEffect(() => {
    const shortcut = event => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); if (dialog.current.open) dialog.current.close(); else { previousFocus.current = document.activeElement; setQuery(''); setActive(0); dialog.current.showModal(); input.current.focus(); } } };
    window.addEventListener('keydown', shortcut);
    return () => window.removeEventListener('keydown', shortcut);
  }, []);
  useEffect(() => { if (dialog.current.open) dialog.current.querySelector(`[data-result="${active}"]`)?.scrollIntoView({block: 'nearest'}); }, [active]);
  return <>
    <button className="command-trigger" onClick={open} aria-label="Open command palette" aria-haspopup="dialog" title="Search portfolio (Ctrl or Cmd + K)"><Search size={18} /><kbd>⌘ / Ctrl K</kbd></button>
    <dialog ref={dialog} className="command-dialog" aria-labelledby="command-title" onClose={() => previousFocus.current?.focus()} onClick={event => {if(event.target === event.currentTarget) close();}}>
      <div className="command-content"><div className="lab-console-bar"><span>NAVIGATION / COMMAND CENTER</span><button onClick={close} aria-label="Close command palette"><X size={19} /></button></div><h2 id="command-title">Where would you like to go?</h2>
        <div className="command-search"><Search size={20} /><input ref={input} value={query} onChange={event => {setQuery(event.target.value);setActive(0);}} placeholder="Search projects, skills, résumé…" aria-label="Search portfolio" role="combobox" aria-expanded="true" aria-controls="command-results" aria-autocomplete="list" aria-activedescendant={results.length ? `command-result-${active}` : undefined} onKeyDown={event => {
          if (['ArrowDown', 'ArrowUp'].includes(event.key)) {event.preventDefault(); if(results.length) setActive((active + (event.key === 'ArrowDown' ? 1 : -1) + results.length) % results.length);}
          if(event.key === 'Enter' && results.length) {event.preventDefault(); dialog.current.querySelector(`[data-result="${active}"] a`)?.click();}
        }} /></div>
        <ul id="command-results" role="listbox" aria-label="Navigation results">{results.map(([title, description, href], index) => <li id={`command-result-${index}`} data-result={index} role="option" aria-selected={index === active} key={href} onMouseEnter={() => setActive(index)}><a href={href} download={href.endsWith('.pdf') ? true : undefined} onClick={close}><span><strong>{title}</strong><small>{description}</small></span><ArrowUpRight size={18} /></a></li>)}</ul>
        {!results.length && <p className="command-empty">No results. Try “projects”, “skills”, or “contact”.</p>}
        <div className="command-hints"><span>↑ ↓ Navigate</span><span>Enter Open</span><span>Esc Close</span></div>
      </div>
    </dialog>
  </>;
}
