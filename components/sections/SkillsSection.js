import SkillCard from '@/components/SkillCard';

import AnimatedHeading from '@/components/AnimatedHeading';


import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
} from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
  { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
  { name: 'React', icon: FaReact, color: 'text-cyan-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  { name: 'Express', icon: SiExpress, color: 'text-gray-300' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
  { name: 'MySQL', icon: SiMysql, color: 'text-blue-400' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-300' },
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-400' },
  { name: 'GitHub', icon: FaGithub, color: 'text-white' },
];

export default function SkillsSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0f1f] via-[#111827] to-[#050816] text-white px-6 py-20 flex items-center">
      {/* Background Effects */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute top-20 right-[-120px] w-[420px] h-[420px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-120px] left-1/3 w-[380px] h-[380px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        
          <AnimatedHeading className="text-center mb-14">

          <p className="text-cyan-300 font-semibold uppercase tracking-[0.2em]">
            My Skills
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Technologies I
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Work With
            </span>
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Modern frontend and backend technologies for building scalable,
            high-performance web applications.
          </p>

          </AnimatedHeading>
        

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              color={skill.color}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {[
            { value: '12+', label: 'Technologies' },
            { value: '4+', label: 'Frontend' },
            { value: '4+', label: 'Backend' },
            { value: '100%', label: 'Passion' },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-md hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition duration-300">
              <div className="text-3xl font-bold text-cyan-300">
                {item.value}
              </div>
              <div className="text-gray-400 mt-2 text-sm">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}