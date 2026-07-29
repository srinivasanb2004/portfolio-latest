import Image from 'next/image';
import { FaGraduationCap, FaLaptopCode, FaBasketballBall } from 'react-icons/fa';
import AnimatedHeading from '@/components/AnimatedHeading';



export default function AboutSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0f1f] via-[#111827] to-[#050816] text-white px-6 py-20 flex items-center">
      {/* Background Glows */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute top-20 right-[-120px] w-[420px] h-[420px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>


      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="hidden md:block">
          <div className="flex justify-center">
            <div className="relative w-[320px] h-[420px] md:w-[380px] md:h-[500px]">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 p-[2px]">
                <div className="w-full h-full rounded-[2rem] bg-[#0b1120]"></div>
              </div>

              <div className="relative w-full h-full p-2">
                <Image
                  src="/techy.jpg"
                  alt="Srinivasan B"
                  fill
                  className="object-cover rounded-[1.8rem]"
                />
              </div>
            </div>
          </div>
        </div>


        {/* Content */}
        <div className="space-y-8">
          <div>
            <AnimatedHeading>
              <p className="text-cyan-300 font-semibold uppercase tracking-[0.2em]">
                About Me
              </p>

              <h1 className="text-4xl md:text-5xl font-bold mt-3">
                Passionate <br />
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Full Stack Developer
                </span>
              </h1>
            </AnimatedHeading>

            <p className="text-gray-300 text-lg leading-8 mt-6">
              Hi, I'm Srinivasan B, a Full Stack Developer passionate about
              building modern web applications using React, Next.js, Node.js,
              Express.js, and MongoDB.
            </p>
          </div>

          {/* Cards */}
          <div className="space-y-5">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:border-cyan-400/40 transition duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300">
                  <FaGraduationCap className="text-2xl" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-cyan-300">Education</h2>
                  <p className="text-gray-300 mt-1 leading-7">
                    B.Sc. Information Technology
                    <br />
                    Sri Krishna Adithya College of Arts and Science
                    <br />
                    Graduated in 2024 with 86%
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:border-purple-400/40 transition duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-400/20 flex items-center justify-center text-purple-300">
                  <FaLaptopCode className="text-2xl" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-purple-300">Interests</h2>
                  <p className="text-gray-300 mt-1 leading-7">
                    Web Development, React, Next.js, Node.js, UI Design,
                    Open Source, and modern frontend technologies.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:border-blue-400/40 transition duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-300">
                  <FaBasketballBall className="text-2xl" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-blue-300">Hobbies</h2>
                  <p className="text-gray-300 mt-1 leading-7">
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
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-center backdrop-blur-md hover:border-cyan-400/40 transition duration-300">
                <div className="text-2xl font-bold text-cyan-300">
                  {item.value}
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}