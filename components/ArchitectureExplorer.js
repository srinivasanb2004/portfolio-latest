'use client';
import { useEffect, useState } from 'react';
import { Monitor, Server, Database, ArrowRight, RotateCcw } from 'lucide-react';
import { projectStories } from './projectStories';
const icons = [Monitor, Server, Database];
export default function ArchitectureExplorer() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [view, setView] = useState('Overview');
  const [layer, setLayer] = useState(0);
  const [signal, setSignal] = useState(0);
  const activateLayer = index => { setLayer(index); setSignal(value => value + 1); };
  const project = projectStories[projectIndex];
  useEffect(() => {
    const select = event => { const index = projectStories.findIndex(p => p.id === event.detail); if (index >= 0) { setProjectIndex(index); setLayer(0); } };
    const fromHash = () => select({ detail: window.location.hash.replace('#architecture-', '') });
    fromHash();
    window.addEventListener('hashchange', fromHash);
    window.addEventListener('portfolio-project', select);
    return () => { window.removeEventListener('portfolio-project', select); window.removeEventListener('hashchange', fromHash); };
  }, []);
  return <div className="architecture-console">
    {projectStories.map(p => <span className="architecture-anchor" id={`architecture-${p.id}`} key={p.id} />)}
    <div className="lab-console-bar"><span>APPLICATION EXPLORER</span><span className="lab-status">ILLUSTRATIVE SYSTEM MAP</span></div>
    <div className="architecture-controls"><label>Application<select value={projectIndex} onChange={e => {setProjectIndex(Number(e.target.value)); setLayer(0);}}>{projectStories.map((p, i) => <option key={p.id} value={i}>{p.name}</option>)}</select></label><div className="lab-selector" aria-label="Architecture view">{['Overview', 'Request flow', 'Data model'].map(name => <button key={name} aria-pressed={view === name} onClick={() => {setView(name); setLayer(0);}}>{name}</button>)}</div></div>
    <div className="architecture-body" key={`${project.id}-${view}`}>
      <div><div className={`architecture-map ${view === 'Request flow' ? 'request-view' : ''}`} aria-label="Select an application layer">{project.layers.map((name, i) => { const Icon = icons[i]; return <div className="architecture-node-wrap" key={name}><button className={`architecture-node ${i === layer ? 'selected' : ''}`} aria-pressed={layer === i} aria-controls="architecture-detail" onClick={() => activateLayer(i)}><span className="architecture-rotor"><Icon size={26} /></span><small>0{i + 1} / {view === 'Request flow' ? 'STEP' : 'LAYER'}</small><strong>{view === 'Request flow' ? project.flow[i] : view === 'Data model' ? project.model[i] : name}</strong><span>{project.tools[i]}</span><div className="node-meter" aria-hidden="true">{Array.from({length: 9}, (_, n) => <i key={n} style={{animationDelay: `${n * -.17}s`}} />)}</div></button>{i < 2 && <div className="architecture-wire" aria-hidden="true"><i key={signal} className={signal > 0 ? `selection-signal ${i < layer ? "signal-return" : ""}` : ""} style={{animationDelay: `${Math.abs(i - layer) * .65}s`}} /><ArrowRight size={15} /></div>}</div>;})}</div>
        <p className="architecture-note">{view === 'Data model' ? 'Conceptual relationships, not an exported database schema.' : 'A simplified explanation based on the project stack; animated signals are illustrative.'}</p>
        {view === 'Request flow' && <button className="lab-step" onClick={() => activateLayer((layer + 1) % 3)}>{layer === 2 ? <RotateCcw size={16} /> : <ArrowRight size={16} />}{layer === 2 ? 'Restart request' : 'Follow next step'}</button>}
      </div>
      <aside id="architecture-detail" className="architecture-detail" aria-live="polite"><p className="eyebrow">INSPECT / 0{layer + 1}</p><h3>{project.layers[layer]}</h3><p>{view === 'Data model' ? `Conceptual relationship: ${project.model[layer]}. ${project.details[layer]}` : project.details[layer]}</p><div className="architecture-readout"><span>STACK</span><strong>{project.tools[layer]}</strong><span>{view === 'Request flow' ? 'CURRENT STEP' : 'CONTEXT'}</span><strong>{view === 'Request flow' ? project.flow[layer] : project.name}</strong></div><a href={project.repo} target="_blank" rel="noopener noreferrer">Inspect project source ↗</a></aside>
    </div>
  </div>;
}

