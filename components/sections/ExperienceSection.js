import AnimatedHeading from '@/components/AnimatedHeading';
import Reveal from '@/components/Reveal';
import { FaBriefcase, FaCertificate } from 'react-icons/fa';

const experience = [
  {
    role: 'Junior Full Stack Developer',
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
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#101110] via-[#101110] to-[#101110] text-white px-6 pb-20 pt-12 flex items-center">
      {/* Background Effects */}



      {/* Grid Pattern */}


      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <AnimatedHeading className="text-center mb-14">
          <p className="text-[#c9b38c] font-semibold uppercase tracking-[0.2em]">
            My Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Experience &amp;
            <span className="bg-gradient-to-r from-[#c9b38c] to-[#c9b38c] bg-clip-text text-transparent">
              {' '}Certifications
            </span>
          </h2>

          <p className="text-[#a6a39b] mt-4 max-w-2xl mx-auto text-lg">
            A timeline of the roles I&apos;ve taken on and the credentials
            I&apos;ve earned along the way.
          </p>
        </AnimatedHeading>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-[#c9b38c] mb-6">
              <FaBriefcase /> Experience
            </h2>

            <div className="journey-bus space-y-6 border-l border-white/10 pl-6">
              {experience.map((item, i) => (
                <Reveal key={item.role + i} delay={i * 0.1}>
                  <div className="journey-card relative bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:border-[#c9b38c]/40 transition duration-300">
                    <span aria-hidden="true" className="journey-port absolute -left-[31px] top-6 w-3 h-3 rounded-full bg-[#c9b38c] shadow-[0_0_10px_2px_rgba(34,211,238,0.5)]"></span>
                    <div className="journey-instrument" aria-hidden="true"><span>CAREER LOG / 0{i + 1}</span><div>{[0,1,2,3,4,5,6,7].map(bar => <i key={bar} style={{animationDelay: `${bar * -.3}s`}} />)}</div></div>
                    <p className="text-sm text-[#c9b38c] font-medium">
                      {item.period}
                    </p>
                    <h3 className="text-lg font-semibold text-white mt-1">
                      {item.role}
                    </h3>
                    <p className="text-[#c9b38c] text-sm">{item.org}</p>
                    <p className="text-[#a6a39b] mt-2 leading-7 text-sm">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-[#c9b38c] mb-6">
              <FaCertificate /> Certifications
            </h2>

            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <Reveal key={cert.title + i} delay={i * 0.1}>
                  <div className="credential-card flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:border-[#c9b38c]/40 transition duration-300">
                    <div className="credential-rotor w-12 h-12 shrink-0 rounded-xl bg-[#c9b38c]/10 border border-[#c9b38c]/20 flex items-center justify-center text-[#c9b38c]">
                      <FaCertificate className="text-xl" /><span className="credential-orbit" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">
                        {cert.title}
                      </h3>
                      <p className="text-[#a6a39b] text-sm mt-1">
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
