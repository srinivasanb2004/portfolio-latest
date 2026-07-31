'use client';

import AnimatedHeading from '@/components/AnimatedHeading';
import Reveal from '@/components/Reveal';


import { useState } from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaPaperPlane,
} from 'react-icons/fa';

export default function ContactSection() {
  const [status, setStatus] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    const formData = new FormData(e.target);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setIsError(true);
        setStatus(data.message || 'Something went wrong. Please try again or email me directly.');
      } else {
        setIsError(false);
        setStatus(data.message);
        e.target.reset();
      }
    } catch (err) {
      setIsError(true);
      setStatus('Network error. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0f1f] via-[#111827] to-[#050816] text-white px-6 py-20 flex items-center">
      {/* Background Effects */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute top-20 right-[-120px] w-[420px] h-[420px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-120px] left-1/3 w-[380px] h-[380px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Side */}
        <Reveal className="space-y-8">
          <AnimatedHeading className="space-y-4">
            <p className="text-cyan-300 font-semibold uppercase tracking-[0.2em]">
              Contact Me
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Let's Build Something
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h1>

            <p className="text-gray-400 text-lg leading-8 max-w-xl">
              I'm currently available for freelance projects, internships,
              and full-time opportunities.
            </p>
          </AnimatedHeading>

          {/* Contact Info */}
          <div className="grid gap-4">
            {[
              {
                icon: FaEnvelope,
                title: 'Email',
                value: 'bsrinivasan2004@gmail.com',
                color: 'text-cyan-300',
              },
              {
                icon: FaPhone,
                title: 'Phone',
                value: '+91 6381296152',
                color: 'text-purple-300',
              },
              {
                icon: FaMapMarkerAlt,
                title: 'Location',
                value: 'Coimbatore, Tamil Nadu, India',
                color: 'text-blue-300',
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:border-cyan-400/40 hover:-translate-y-1 transition duration-300 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${item.color}`} >
                    <Icon className="text-xl" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">{item.title}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/srinivasan2004/" target="_blank" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-300 hover:border-cyan-400 hover:bg-cyan-400/10 transition">
              <FaLinkedin />
            </a>

            <a href="https://github.com/Srinivasanb2004" target="_blank" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-300 hover:border-cyan-400 hover:bg-cyan-400/10 transition">
              <FaGithub />
            </a>

            <a
              href="https://wa.me/916381296152?text=Hi%20Srinivasan,%20I%20saw%20your%20portfolio."
              target="_blank"
              className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-green-400 hover:border-green-400 hover:bg-green-400/10 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </Reveal>

        {/* Right Side - Form */}
        <Reveal delay={0.15} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-2xl shadow-cyan-500/10">
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-[#0b1120] border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none"
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full bg-[#0b1120] border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Tell me about your project..."
              required
              className="w-full bg-[#0b1120] border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white py-4 rounded-xl font-semibold transition duration-300 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100">
              <FaPaperPlane className="group-hover:translate-x-1 transition" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {status && (
            <div
              className={`mt-5 rounded-xl p-4 text-center font-medium border ${
                isError
                  ? 'bg-red-500/10 border-red-400/20 text-red-300'
                  : 'bg-green-500/10 border-green-400/20 text-green-300'
              }`}
            >
              {status}
            </div>
          )}
        </Reveal>
      </div>

    </section>
  );
}