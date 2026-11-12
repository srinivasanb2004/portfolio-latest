import Image from 'next/image';
import { FaGraduationCap, FaLaptopCode, FaBasketballBall } from 'react-icons/fa';
import AnimatedHeading from '@/components/AnimatedHeading';
import Reveal from '@/components/Reveal';



export default function AboutSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#101110] via-[#101110] to-[#101110] text-white px-6 py-20 flex items-center">
      {/* Background Glows */}



      {/* Grid Pattern */}



      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <Reveal className="hidden md:block" y={20}>
          <div className="flex justify-center">
            <div className="relative w-[320px] h-[420px] md:w-[380px] md:h-[500px]">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-[#c9b38c] via-[#c9b38c] to-[#c9b38c] p-[2px]">
                <div className="w-full h-full rounded-[2rem] bg-[#101110]"></div>
              </div>

              <div className="relative w-full h-full p-2">
                <Image
                  src="/techy.jpg"
                  alt="Srinivasan B"
                  fill
                  sizes="(max-width: 768px) 320px, 380px"
                  className="object-cover rounded-[1.8rem]"
                />
              </div>
            </div>
          </div>
        </Reveal>


        {/* Content */}
        <Reveal className="space-y-8" delay={0.15}>
          <div>
            <AnimatedHeading>
              <p className="text-[#c9b38c] font-semibold uppercase tracking-[0.2em]">
                About Me
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mt-3">
                Passionate <br />
                <span className="bg-gradient-to-r from-[#c9b38c] to-[#c9b38c] bg-clip-text text-transparent">
                  Full Stack Developer
                </span>
              </h2>
            </AnimatedHeading>

            <p className="text-[#e6e0d4] text-lg leading-8 mt-6">
              Hi, I'm Srinivasan B, a Full Stack Developer passionate about
              building modern web applications using React, Next.js, Node.js,
              Express.js, and MongoDB.
            </p>
          </div>

          {/* Cards */}
          <div className="space-y-5">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:border-[#c9b38c]/40 transition duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#c9b38c]/10 border border-[#c9b38c]/20 flex items-center justify-center text-[#c9b38c]">
                  <FaGraduationCap className="text-2xl" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-[#c9b38c]">Education</h2>
                  <p className="text-[#e6e0d4] mt-1 leading-7">
                    B.Sc. Information Technology
                    <br />
                    Sri Krishna Adithya College of Arts and Science
                    <br />
                    Graduated in 2024 with 86%
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:border-[#c9b38c]/40 transition duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#c9b38c]/10 border border-[#c9b38c]/20 flex items-center justify-center text-[#c9b38c]">
                  <FaLaptopCode className="text-2xl" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-[#c9b38c]">Interests</h2>
                  <p className="text-[#e6e0d4] mt-1 leading-7">
                    Web Development, React, Next.js, Node.js, UI Design,
                    Open Source, and modern frontend technologies.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:border-[#c9b38c]/40 transition duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#c9b38c]/10 border border-[#c9b38c]/20 flex items-center justify-center text-[#c9b38c]">
                  <FaBasketballBall className="text-2xl" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-[#c9b38c]">Hobbies</h2>
                  <p className="text-[#e6e0d4] mt-1 leading-7">
                    Reading books, watching documentaries, playing basketball,
                    and continuously learning new technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-2">
            {[
              { value: '2024', label: 'Graduate' },
              { value: '12+', label: 'Skills' },
              { value: '6+', label: 'Projects' },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-center backdrop-blur-md hover:border-[#c9b38c]/40 transition duration-300">
                <div className="text-2xl font-bold text-[#c9b38c]">
                  {item.value}
                </div>
                <div className="text-sm text-[#a6a39b] mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

    </section>
  );
}
