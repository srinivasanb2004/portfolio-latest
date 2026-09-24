import {
  FaCss3Alt,
  FaDatabase,
  FaBrain,
  FaGithub,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaRocket,
  FaServer,
} from 'react-icons/fa';
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
} from 'react-icons/si';

const technologies = [
  { name: 'HTML5', icon: FaHtml5, color: 'text-orange-400' },
  { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-400' },
  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-300' },
  { name: 'React', icon: FaReact, color: 'text-cyan-300' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-slate-200' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-400' },
  { name: 'Express', icon: SiExpress, color: 'text-slate-300' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-emerald-400' },
  { name: 'MySQL', icon: SiMysql, color: 'text-sky-400' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-300' },
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-400' },
  { name: 'GitHub', icon: FaGithub, color: 'text-slate-100' },
];

const skillGroups = [
  {
    title: 'Frontend',
    icon: FaReact,
    accent: 'bg-cyan-400/15 text-cyan-300',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: FaServer,
    accent: 'bg-emerald-400/15 text-emerald-300',
    skills: ['Node.js', 'Express', 'REST APIs', 'Authentication'],
  },
  {
    title: 'Databases',
    icon: FaDatabase,
    accent: 'bg-violet-400/15 text-violet-300',
    skills: ['MongoDB', 'MySQL', 'Database Design'],
  },
  {
    title: 'Workflow',
    icon: FaGitAlt,
    accent: 'bg-orange-400/15 text-orange-300',
    skills: ['Git', 'GitHub', 'Responsive Design', 'Deployment'],
  },
  {
    title: 'AI & LLMs',
    icon: FaBrain,
    accent: 'bg-fuchsia-400/15 text-fuchsia-300',
    skills: ['Claude', 'GPT', 'Gemini', 'Prompt Engineering', 'LLM Integration', 'RAG'],
  },
  {
    title: 'DevOps & Infra',
    icon: FaRocket,
    accent: 'bg-sky-400/15 text-sky-300',
    skills: ['Docker', 'CI/CD', 'GitHub', 'GitLab', 'Vercel', 'Render', 'Supabase', 'MongoDB Atlas'],
  },
];

function TechnologyTrack({ hidden = false }) {
  return (
    <div className="skills-marquee__group" aria-hidden={hidden || undefined}>
      {technologies.map(({ name, icon: Icon, color }) => (
        <div className="skills-marquee__item" key={`${hidden ? 'copy-' : ''}${name}`}>
          <Icon aria-hidden="true" className={`h-6 w-6 shrink-0 ${color}`} />
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section className="relative overflow-hidden bg-[#070b1d] px-6 pb-12 pt-16 text-white sm:pb-16 sm:pt-20 lg:pb-16 lg:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_8%,rgba(34,211,238,0.09),transparent_28%),radial-gradient(circle_at_7%_75%,rgba(99,102,241,0.1),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
            Tech stack
          </p>
          <h2 className="text-5xl font-bold tracking-tight text-slate-100 sm:text-6xl">
            Tools I build with.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-400 sm:text-xl">
            Full-stack tools for building responsive, reliable web experiences—from polished interfaces to the systems behind them.
          </p>
        </div>

        <div className="skills-marquee mt-14" aria-label="Technologies I work with">
          <div className="skills-marquee__track">
            <TechnologyTrack />
            <TechnologyTrack hidden />
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {skillGroups.map(({ title, icon: Icon, accent, skills }) => (
            <article
              className="min-h-48 rounded-3xl border border-slate-700/70 bg-slate-900/55 p-7 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-400/35 sm:p-8"
              key={title}
            >
              <div className="mb-6 flex items-center gap-4">
                <span className={`grid h-11 w-11 place-items-center rounded-xl ${accent}`}>
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-slate-200">
                  {title}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2.5" aria-label={`${title} skills`}>
                {skills.map((skill) => (
                  <li className="rounded-xl border border-slate-700 bg-slate-800/65 px-4 py-2 text-sm text-slate-300" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
