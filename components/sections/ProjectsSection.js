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
    color: 'text-[#c9b38c]',
    github: 'https://github.com/srinivasanb2004/Weather-App.git',
    demo: 'https://weather-app-two-pi-85.vercel.app/',
  },


  {
    title: 'TRIP ADVISOR CLONE',
    description:
      'A responsive travel discovery web app inspired by TripAdvisor.',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'MySQL'],
    icon: FaDatabase,
    color: 'text-[#c9b38c]',
    github: 'https://github.com/srinivasanb2004/TRIPADVISOR-CLONE.git',
    demo: 'https://srinivasanb2004.github.io/TRIPADVISOR-CLONE/',
  },



  {
    title: 'GreenDen Plant your Dream!',
    description:
      'Plants which turns your home as garden.',
    tech: ['Node.js', 'Express', 'Nodemailer'],
    icon: FaServer,
    color: 'text-[#c9b38c]',
    github: 'https://github.com/srinivasanb2004/Greenden-Tailwind.git',
    demo: 'https://srinivasanb2004.github.io/Greenden-Tailwind/',
  },


];

function getDemoScreenshotUrl(demoUrl) {
  return `https://image.thum.io/get/width/1200/crop/760/noanimate/${demoUrl}`;
}

export default function ProjectsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#101110] via-[#101110] to-[#101110] text-white px-6 py-20 flex items-center">
      {/* Background Effects */}




      {/* Grid Pattern */}


      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}


        <AnimatedHeading className="text-center mb-14">
          <p className="text-[#c9b38c] font-semibold uppercase tracking-[0.2em]">
            My Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Featured
            <span className="bg-gradient-to-r from-[#c9b38c] to-[#c9b38c] bg-clip-text text-transparent">
              {' '}Work
            </span>
          </h2>

          <p className="text-[#a6a39b] mt-4 max-w-2xl mx-auto text-lg">
            Real-world full stack projects built with modern technologies,
            focusing on performance and user experience.
          </p>

        </AnimatedHeading>



        <div className="max-w-6xl mx-auto mb-8"><a className="text-link" href="#case-studies">Read project case studies <FaExternalLinkAlt /></a></div>
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
                className="project-stack-card group relative lg:sticky lg:top-[var(--stack-offset)] motion-reduce:lg:relative motion-reduce:lg:top-auto overflow-hidden rounded-3xl border border-white/10 bg-[#101110]/95 backdrop-blur-md hover:border-[#c9b38c]/40 hover:shadow-2xl hover:shadow-cyan-500/10 transition duration-300 flex flex-col lg:min-h-[25rem] lg:flex-row"
                whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}>
                  {/* Icon Area */}
                  <div className="relative h-44 shrink-0 bg-gradient-to-br from-[#101110] to-[#1e293b] flex items-center justify-center overflow-hidden lg:h-auto lg:w-[44%]">
                    <div className="absolute inset-3 overflow-hidden rounded-2xl border border-white/10 bg-[#101110] shadow-2xl shadow-black/30">
                      <div className="project-preview-fallback"><FaCode aria-hidden="true" /><span>{project.title}</span><small>Explore the live demo below</small></div>
                      <img
                        src={getDemoScreenshotUrl(project.demo)}
                        alt={`${project.title} demo preview`}
                        loading="lazy"
                        decoding="async"
                        width={1200}
                        height={760}
                        onError={event => { event.currentTarget.style.display = 'none'; }}
                        referrerPolicy="no-referrer"
                        className="relative h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                      />
                    </div>

                    <div className="absolute bottom-6 right-6 grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-[#101110]/80 backdrop-blur-sm">
                      <Icon className={`text-3xl ${project.color} group-hover:scale-110 transition duration-300`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col gap-4 p-6 lg:p-9">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c9b38c]">
                      {String(index + 1).padStart(2, '0')} / Featured Project
                    </p>

                    <h3 className="text-2xl font-bold text-white lg:text-3xl">
                      {project.title}
                    </h3>

                    <p className="text-[#a6a39b] leading-7 flex-1">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-[#101110] border border-[#c9b38c]/20 text-xs text-[#c9b38c]">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 pt-2">
                      <a
                        href={project.github}
                        target="_blank" rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:border-[#c9b38c]/40 hover:bg-[#c9b38c]/10 transition text-sm font-medium">
                        <FaGithub /> GitHub
                      </a>

                      <a
                        href={project.demo}
                        target="_blank" rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#c9b38c] to-[#c9b38c] hover:from-[#c9b38c] hover:to-[#c9b38c] transition text-sm font-medium text-white shadow-lg shadow-cyan-500/20">
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
