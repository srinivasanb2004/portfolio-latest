import AnimatedHeading from '@/components/AnimatedHeading';
import Reveal from '@/components/Reveal';
import { FaBriefcase, FaCertificate } from 'react-icons/fa';

const experience = [
  {
    role: 'Full Stack Developer Intern',
    org: 'Twenty4 Jewellery Pvt Ltd',
    period: 'Present',
    description:
      'Built and maintained full stack web applications using React, Next.js, Node.js, Express, and MongoDB — handling everything from UI design to API development and database architecture.',
  },

  {
    role: 'Full stack developer intern',
    org: 'Error Makes Clever Academy',
    period: 'October 2024- December 2024',
    description:
      'Developed and styled interactive web interfaces with React, Next.js, and Tailwind CSS — implementing animations, responsive layouts, and pixel-perfect UI from design mockups.',
  },
];


const certifications = [
  {
    title: 'Full Stack MERN Development',
    issuer: 'Error Makes Clever Academy',
    year: '2024',
  },

  {
    title: 'Relational Database Management System',
    issuer: 'NPTEL',
    year: '2024',
  },

  {
    title: 'Prompt Engineering',
    issuer: 'Error Makes Clever Academy',
    year: '2026',
  },

];


export default function ExperienceSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0f1f] via-[#111827] to-[#050816] text-white px-6 py-20 flex items-center">
      {/* Background Effects */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-120px] right-1/3 w-[380px] h-[380px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <AnimatedHeading className="text-center mb-14">
          <p className="text-cyan-300 font-semibold uppercase tracking-[0.2em]">
            My Journey
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Experience &amp;
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Certifications
            </span>
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            A timeline of the roles I&apos;ve taken on and the credentials
            I&apos;ve earned along the way.
          </p>
        </AnimatedHeading>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-cyan-300 mb-6">
              <FaBriefcase /> Experience
            </h2>

            <div className="space-y-6 border-l border-white/10 pl-6">
              {experience.map((item, i) => (
                <Reveal key={item.role + i} delay={i * 0.1}>
                  <div className="relative bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:border-cyan-400/40 transition duration-300">
                    <span className="absolute -left-[31px] top-6 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_2px_rgba(34,211,238,0.5)]"></span>
                    <p className="text-sm text-cyan-300 font-medium">
                      {item.period}
                    </p>
                    <h3 className="text-lg font-semibold text-white mt-1">
                      {item.role}
                    </h3>
                    <p className="text-purple-300 text-sm">{item.org}</p>
                    <p className="text-gray-400 mt-2 leading-7 text-sm">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-purple-300 mb-6">
              <FaCertificate /> Certifications
            </h2>

            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <Reveal key={cert.title + i} delay={i * 0.1}>
                  <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:border-purple-400/40 transition duration-300">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-purple-500/10 border border-purple-400/20 flex items-center justify-center text-purple-300">
                      <FaCertificate className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">
                        {cert.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">
                        {cert.issuer} &middot; {cert.year}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
