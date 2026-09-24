'use client';

import AnimatedHeading from '@/components/AnimatedHeading';
import { motion, useReducedMotion } from 'framer-motion';

import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaServer,
  FaDatabase,
} from 'react-icons/fa';

const projects = [

   {
    title: 'Full Stack School Management Application',
    description:
      'A full-stack school management application for teachers to manage attendance, students, marks, fees, reports, and academic records with a paper-register inspired interface.',
    tech: ['Next.js 15', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'JWT Auth', 'Vercel'],
    icon: FaDatabase,
    color: 'text-green-400',
    github: 'https://github.com/srinivasanb2004/smart-teacher-register.git',
    demo: 'https://smart-teacher-register-pej4.vercel.app/',
  },

  
   {
    title: 'NOSTRA-Mens Clothing E-Comm App',
    description:
      'A responsive e-commerce clothing app for browsing, searching, and shopping fashion products online.',
    tech: ['React', 'Next.js', 'TypeScript', 'Auth.js', 'Prisma'],
    icon: FaCode,
    color: 'text-yellow-400',
    github: 'https://github.com/srinivasanb2004/NOSTRA-ECOMMERCE-NEXT-JS.git',
    demo: 'https://nostra-mens-clothing.vercel.app/',
  },

   {
    title: 'AI-Powered Expense Tracker',
    description:
      'A smart expense tracking application powered by AI for automated categorization and insights.',
    tech: ['Next.js', 'Tailwind CSS','PostgreSQL', 'Supabase', 'Prisma','OCR', 'OpenAI API'],
    icon: FaCode,
    color: 'text-pink-400',
    github: 'https://github.com/srinivasanb2004/ai-expense-tracker.git',
    demo: 'https://ai-expense-tracker-sage-seven.vercel.app/',
  },

  {
    title: 'Weather Forecast App',
    description:
      'Responsive weather application with live API data, search, humidity, and forecast details.',
    tech: ['React', 'Weather API', 'CSS', 'Javascript'],
    icon: FaCode,
    color: 'text-blue-400',
    github: 'https://github.com/srinivasanb2004/Weather-App.git',
    demo: 'https://weather-app-two-pi-85.vercel.app/',
  },


  {
    title: 'TRIP ADVISOR CLONE',
    description:
      'A responsive travel discovery web app inspired by TripAdvisor.',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'MySQL'],
    icon: FaDatabase,
    color: 'text-purple-400',
    github: 'https://github.com/srinivasanb2004/TRIPADVISOR-CLONE.git',
    demo: 'https://srinivasanb2004.github.io/TRIPADVISOR-CLONE/',
  },

 

  {
    title: 'GreenDen Plant your Dream!',
    description:
      'Plants which turns your home as garden.',
    tech: ['Node.js', 'Express', 'Nodemailer'],
    icon: FaServer,
    color: 'text-cyan-400',
    github: 'https://github.com/srinivasanb2004/Greenden-Tailwind.git',
    demo: 'https://srinivasanb2004.github.io/Greenden-Tailwind/',
  },

 
];

export default function ProjectsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a0f1f] via-[#111827] to-[#050816] text-white px-6 py-20 flex items-center">
      {/* Background Effects */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute top-20 right-[-120px] w-[420px] h-[420px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-120px] left-1/3 w-[380px] h-[380px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}


        <AnimatedHeading className="text-center mb-14">
          <p className="text-cyan-300 font-semibold uppercase tracking-[0.2em]">
            My Projects
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Featured
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Work
            </span>
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Real-world full stack projects built with modern technologies,
            focusing on performance and user experience.
          </p>

        </AnimatedHeading>



        {/* Project stack: cards flow normally on small screens and layer as the
            visitor scrolls on desktop. */}
        <div className="max-w-6xl mx-auto space-y-6 lg:space-y-20">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                style={{ '--stack-offset': `${6 + index * 2.2}rem`, zIndex: index + 1 }}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                className="group relative lg:sticky lg:top-[var(--stack-offset)] motion-reduce:lg:relative motion-reduce:lg:top-auto overflow-hidden rounded-3xl border border-white/10 bg-[#111827]/95 backdrop-blur-md hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10 transition duration-300 flex flex-col lg:min-h-[25rem] lg:flex-row"
                whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}>
                  {/* Icon Area */}
                  <div className="relative h-44 shrink-0 bg-gradient-to-br from-[#111827] to-[#1e293b] flex items-center justify-center overflow-hidden lg:h-auto lg:w-[44%]">
                    <div className="absolute inset-3 overflow-hidden rounded-2xl border border-white/10 bg-[#0b1120] shadow-2xl shadow-black/30">
                      <iframe
                        src={project.demo}
                        title={`${project.title} live preview`}
                        loading="lazy"
                        tabIndex="-1"
                        className="pointer-events-none h-[270%] w-[270%] origin-top-left scale-[0.37] border-0"
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1120]/45 via-transparent to-cyan-400/5" />
                    <div className="absolute bottom-6 right-6 grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-[#0b1120]/80 backdrop-blur-sm">
                      <Icon className={`text-3xl ${project.color} group-hover:scale-110 transition duration-300`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col gap-4 p-6 lg:p-9">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                      {String(index + 1).padStart(2, '0')} / Featured Project
                    </p>

                    <h3 className="text-2xl font-bold text-white lg:text-3xl">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 leading-7 flex-1">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-[#111827] border border-cyan-400/20 text-xs text-cyan-300">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 pt-2">
                      <a
                        href={project.github}
                        target="_blank"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition text-sm font-medium">
                        <FaGithub /> GitHub
                      </a>

                      <a
                        href={project.demo}
                        target="_blank"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition text-sm font-medium text-white shadow-lg shadow-cyan-500/20">
                        <FaExternalLinkAlt /> Demo
                      </a>
                    </div>
                  </div>
              </motion.article>
            );
          })}
        </div>
      </div>

    </section>
  );
}
