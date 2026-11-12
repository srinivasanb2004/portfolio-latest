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
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#101110] via-[#101110] to-[#101110] text-white px-6 py-20 flex items-center">
      {/* Background Effects */}




      {/* Grid Pattern */}


      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Side */}
        <Reveal className="space-y-8">
          <AnimatedHeading className="space-y-4">
            <p className="text-[#c9b38c] font-semibold uppercase tracking-[0.2em]">
              Contact Me
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Let's Build Something
              <br />
              <span className="bg-gradient-to-r from-[#c9b38c] to-[#c9b38c] bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>

            <p className="text-[#a6a39b] text-lg leading-8 max-w-xl">
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
                color: 'text-[#c9b38c]',
              },
              {
                icon: FaPhone,
                title: 'Phone',
                value: '+91 6381296152',
                color: 'text-[#c9b38c]',
              },
              {
                icon: FaMapMarkerAlt,
                title: 'Location',
                value: 'Coimbatore, Tamil Nadu, India',
                color: 'text-[#c9b38c]',
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:border-[#c9b38c]/40 hover:-translate-y-1 transition duration-300 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${item.color}`} >
                    <Icon className="text-xl" />
                  </div>

                  <div>
                    <p className="text-sm text-[#a6a39b]">{item.title}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/srinivasan2004/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#c9b38c] hover:border-[#c9b38c] hover:bg-[#c9b38c]/10 transition">
              <FaLinkedin />
            </a>

            <a aria-label="GitHub" href="https://github.com/Srinivasanb2004" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#c9b38c] hover:border-[#c9b38c] hover:bg-[#c9b38c]/10 transition">
              <FaGithub />
            </a>

            <a
              aria-label="WhatsApp" href="https://wa.me/916381296152?text=Hi%20Srinivasan,%20I%20saw%20your%20portfolio."
              target="_blank" rel="noopener noreferrer"
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
              name="name" aria-label="Your name" autoComplete="name"
              placeholder="Your Name"
              required
              className="w-full bg-[#101110] border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:border-[#c9b38c] focus:outline-none"
            />

            <input
              name="email" aria-label="Your email" autoComplete="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full bg-[#101110] border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:border-[#c9b38c] focus:outline-none"
            />

            <textarea
              name="message" aria-label="Your message"
              rows="6"
              placeholder="Tell me about your project..."
              required
              className="w-full bg-[#101110] border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:border-[#c9b38c] focus:outline-none resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group w-full bg-gradient-to-r from-[#c9b38c] to-[#c9b38c] hover:from-[#c9b38c] hover:to-[#c9b38c] text-white py-4 rounded-xl font-semibold transition duration-300 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100">
              <FaPaperPlane className="group-hover:translate-x-1 transition" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {status && (
            <div
              role="status" aria-live="polite" className={`mt-5 rounded-xl p-4 text-center font-medium border ${
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
