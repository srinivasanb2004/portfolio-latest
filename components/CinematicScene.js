/** Decorative layers stay underneath the content and never capture input. */
export default function CinematicScene({ chapter, label }) {
  return <div className="cinematic-scene" aria-hidden="true">
    <div className="scene-light scene-light-primary" />
    <div className="scene-light scene-light-secondary" />
    <div className="scene-ribbons"><i /><i /><i /></div>
    <div className="scene-orbits"><i /><i /><i /></div>
    <div className="scene-grid" />
    <div className="scene-circuit">
      <svg viewBox="0 0 1200 850" fill="none" preserveAspectRatio="xMidYMid slice">
        <g className="circuit-traces">
          <path d="M-40 180H180L260 260H450L520 330H780L850 260H1240" />
          <path d="M-40 600H130L230 500H420L500 420H840L940 520H1240" />
          <path d="M120 -40V100L350 330V650L500 800V900" />
          <path d="M1080 -40V140L900 320V620L1060 780V900" />
          <path d="M-40 720H210L290 640H700L800 740H1240" />
        </g>
        <g className="circuit-signals">
          <path pathLength="100" d="M-40 180H180L260 260H450L520 330H780L850 260H1240" />
          <path pathLength="100" d="M-40 600H130L230 500H420L500 420H840L940 520H1240" />
          <path pathLength="100" d="M1080 -40V140L900 320V620L1060 780V900" />
        </g>
        <g className="circuit-terminals"><circle cx="260" cy="260" r="5" /><circle cx="520" cy="330" r="5" /><circle cx="840" cy="420" r="5" /><circle cx="900" cy="620" r="5" /><circle cx="290" cy="640" r="5" /></g>
      </svg>
    </div>
    <div className="scene-code"><span>01 &nbsp; const experience = await build(idea);</span><span>02 &nbsp; interface → api → database</span><span>03 &nbsp; export default createExperience;</span></div>
    <div className="scene-scan" />
    <div className="machine-floor" />
    <div className="machine-rail rail-left"><i /><i /><i /></div>
    <div className="machine-rail rail-right"><i /><i /><i /></div>
    <div className="ambient-reticle"><i /><i /><span>+</span></div>
    <div className="scene-grain" />
    <div className="scene-chapter"><span>{chapter}</span><small>{label}</small></div>
    <div className="scene-horizon" />
  </div>;
}
