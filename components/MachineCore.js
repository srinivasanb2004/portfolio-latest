import Image from 'next/image';
import { Braces, Database, Network } from 'lucide-react';

export default function MachineCore() {
  return <div className="machine-core" role="img" aria-label="Srinivasan B, full stack developer, surrounded by animated interface, API and database connections">
    <div className="machine-top"><span>SB / SYSTEM ARCHITECTURE</span><span>VISUAL EXPLORATION</span></div>
    <div className="machine-stage" aria-hidden="true">
      <div className="machine-coordinate coord-top">X: INTERFACE / Y: LOGIC / Z: DATA</div>
      <div className="machine-ring ring-outer" /><div className="machine-ring ring-ticks" /><div className="machine-ring ring-inner" />
      <div className="machine-radar" />
      <svg className="machine-wires" viewBox="0 0 500 500" fill="none">
        <g className="wire-base"><path d="M250 250V120H110V80" /><path d="M250 250H395V180H460" /><path d="M250 250V380H140V440" /><path d="M250 250H85V300H30" /><path d="M250 250V420H390V460" /></g>
        <g className="wire-packets"><path pathLength="100" d="M250 250V120H110V80" /><path pathLength="100" d="M250 250H395V180H460" /><path pathLength="100" d="M250 250V380H140V440" /><path pathLength="100" d="M250 250V420H390V460" /></g>
      </svg>
      <div className="processor processor-portrait"><div className="processor-photo"><Image src="/me.jpg" alt="" fill loading="eager" fetchPriority="high" sizes="(max-width: 767px) 34vw, 18vw" /></div></div>
      <div className="machine-module module-ui"><Braces size={18} /><span>INTERFACE<small>React · Next.js</small></span><i /></div>
      <div className="machine-module module-api"><Network size={18} /><span>API LAYER<small>Node.js · Express</small></span><i /></div>
      <div className="machine-module module-db"><Database size={18} /><span>DATA ENGINE<small>SQL · MongoDB</small></span><i /></div>
      <span className="machine-cross cross-one">+</span><span className="machine-cross cross-two">+</span>
    </div>
    <div className="machine-bottom"><div className="signal-bars" aria-hidden="true">{Array.from({length:20},(_,i)=><i key={i} style={{animationDelay:`${i * -.17}s`}} />)}</div><span>IDEA → INTERFACE → SYSTEM</span></div>
  </div>;
}
