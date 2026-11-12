import SkillMachine from '@/components/SkillMachine';
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
  { name: 'CSS3', icon: FaCss3Alt, color: 'text-[#c9b38c]' },
  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-300' },
  { name: 'React', icon: FaReact, color: 'text-[#c9b38c]' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-[#e6e0d4]' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-400' },
  { name: 'Express', icon: SiExpress, color: 'text-[#e6e0d4]' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-emerald-400' },
  { name: 'MySQL', icon: SiMysql, color: 'text-[#c9b38c]' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-[#c9b38c]' },
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-400' },
  { name: 'GitHub', icon: FaGithub, color: 'text-[#e6e0d4]' },
];

const skillGroups = [
  {
    title: 'Frontend',
    icon: FaReact,
    accent: 'bg-[#c9b38c]/15 text-[#c9b38c]',
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
    accent: 'bg-violet-400/15 text-[#c9b38c]',
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
    accent: 'bg-fuchsia-400/15 text-[#c9b38c]',
    skills: ['Claude', 'GPT', 'Gemini', 'Prompt Engineering', 'LLM Integration', 'RAG'],
  },
  {
    title: 'DevOps & Infra',
    icon: FaRocket,
    accent: 'bg-sky-400/15 text-[#c9b38c]',
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
    <section className="relative overflow-hidden bg-[#101110] px-6 pb-12 pt-16 text-white sm:pb-16 sm:pt-20 lg:pb-16 lg:pt-20">



      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-[#c9b38c]">
            Tech stack
          </p>
          <h2 className="text-5xl font-bold tracking-tight text-[#e6e0d4] sm:text-6xl">
            Tools I build with.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#a6a39b] sm:text-xl">
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
          {skillGroups.map(({ title, icon: Icon, accent, skills }, index) => (
            <article
              className="skill-module-card min-h-48 rounded-3xl border border-slate-700/70 bg-slate-900/55 p-7 backdrop-blur-sm transition-colors duration-300 hover:border-[#c9b38c]/35 sm:p-8"
              style={{ "--module-delay": `${index * -.7}s` }}
              key={title}
            >
              <div className="mb-6 flex items-center gap-4">
                <span className={`grid h-11 w-11 place-items-center rounded-xl ${accent}`}>
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-[#e6e0d4]">
                  {title}
                </h3>
              </div>
              <SkillMachine index={index} />
              <ul className="flex flex-wrap gap-2.5" aria-label={`${title} skills`}>
                {skills.map((skill) => (
                  <li className="rounded-xl border border-slate-700 bg-slate-800/65 px-4 py-2 text-sm text-[#e6e0d4]" key={skill}>
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
