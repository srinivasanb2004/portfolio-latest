'use client';

import { useEffect, useRef, useState } from 'react';
import { FaPaperPlane, FaRobot, FaTimes } from 'react-icons/fa';

const profileAnswers = [
  {
    terms: ['hire', 'why should'],
    answer: 'Srinivasan brings hands-on full-stack experience with React, Next.js, Node.js, Express, MongoDB, and modern UI development. His portfolio demonstrates practical projects across school management, e-commerce, AI expense tracking, weather, and travel applications.',
  },
  {
    terms: ['skill', 'stack', 'technology', 'technologies', 'know', 'frontend', 'backend'],
    answer: 'Srinivasan works with HTML, CSS, JavaScript, React, Next.js, Node.js, Express, MongoDB, MySQL, Tailwind CSS, Git, and GitHub.',
  },
  {
    terms: ['experience', 'intern', 'job', 'work history', 'company'],
    answer: 'Srinivasan is a Full Stack Developer Intern at Twenty4 Jewellery Pvt Ltd. Previously, he was a Full Stack Developer Intern at Error Makes Clever Academy from October to December 2024.',
  },
  {
    terms: ['education', 'college', 'degree', 'graduate', 'graduation'],
    answer: 'Srinivasan holds a B.Sc. in Information Technology from Sri Krishna Adithya College of Arts and Science. He graduated in 2024 with 86%.',
  },
  {
    terms: ['project', 'portfolio', 'built', 'work'],
    answer: 'His featured work includes a School Management Application, NOSTRA mens clothing e-commerce app, AI-Powered Expense Tracker, Weather Forecast App, Trip Advisor Clone, and GreenDen.',
  },
  {
    terms: ['school', 'management'],
    answer: 'The School Management Application helps teachers manage attendance, students, marks, fees, reports, and academic records. It uses Next.js, React, TypeScript, Tailwind CSS, Prisma, PostgreSQL, and JWT authentication.',
  },
  {
    terms: ['expense', 'ai-powered', 'ocr'],
    answer: 'The AI-Powered Expense Tracker provides automated expense categorization and insights. Its stack includes Next.js, Tailwind CSS, PostgreSQL, Supabase, Prisma, OCR, and the OpenAI API.',
  },
  {
    terms: ['contact', 'email', 'phone', 'reach', 'hire', 'linkedin', 'github'],
    answer: 'You can contact Srinivasan at bsrinivasan2004@gmail.com or +91 6381296152. He is based in Coimbatore, Tamil Nadu, India. His LinkedIn and GitHub links are in the contact section.',
  },
  {
    terms: ['certificate', 'certification', 'course'],
    answer: 'His certifications include Full Stack MERN Development from Error Makes Clever Academy (2024), Relational Database Management System from NPTEL (2024), and Prompt Engineering from Error Makes Clever Academy (2026).',
  },
  {
    terms: ['hobby', 'interest'],
    answer: 'Srinivasan is interested in web development, UI design, open source, and modern frontend technologies. His hobbies include reading, documentaries, basketball, and learning new technologies.',
  },
  {
    terms: ['who is', 'tell me about', 'introduce', 'yourself', 'background'],
    answer: 'I’m Srinivasan B, a Full Stack Developer based in Coimbatore. I build modern, responsive web applications with React, Next.js, Node.js, Express, and MongoDB.',
  },
];

const suggestedQuestions = [
  'Why should we hire Srinivasan?',
  'What skills does he have?',
  'Tell me about his projects',
  'What is his experience?',
  'What is his education?',
];

const welcomeMessage = {
  role: 'bot',
  text: 'Hi! 👋 I’m Srinivasan’s AI assistant. Ask me anything about his work, skills, projects, or experience.',
};

function answerQuestion(question) {
  const normalized = question.toLowerCase();
  const match = profileAnswers.find((item) => item.terms.some((term) => normalized.includes(term)));
  return match?.answer || 'I can only answer questions about Srinivasan’s portfolio—his background, skills, experience, education, projects, certifications, or contact details.';
}

export default function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([welcomeMessage]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  function handleSubmit(event) {
    event.preventDefault();
    const trimmedQuestion = question.trim();
    if (!trimmedQuestion) return;

    setMessages((current) => [
      ...current,
      { role: 'user', text: trimmedQuestion },
      { role: 'bot', text: answerQuestion(trimmedQuestion) },
    ]);
    setQuestion('');
  }

  function askSuggestedQuestion(suggestedQuestion) {
    setMessages((current) => [
      ...current,
      { role: 'user', text: suggestedQuestion },
      { role: 'bot', text: answerQuestion(suggestedQuestion) },
    ]);
  }

  function showQuickQuestions() {
    setMessages([welcomeMessage]);
    setQuestion('');
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-7 sm:right-7">
      {isOpen && (
        <section id="portfolio-chat" className="mb-4 flex h-[min(34rem,calc(100vh-7.5rem))] w-[calc(100vw-2.5rem)] max-w-[32rem] flex-col overflow-hidden rounded-[28px] border border-cyan-300/25 bg-[#070d20]/[0.98] shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl" aria-label="Portfolio assistant">
          <header className="flex items-center justify-between border-b border-cyan-200/15 bg-gradient-to-br from-[#102447] via-[#0c1931] to-[#10112e] px-6 py-5">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-500 text-xl text-[#07132c] shadow-[0_0_24px_rgba(34,211,238,0.55)]"><FaRobot /></span>
              <div>
                <h2 className="text-lg font-bold tracking-tight text-white">Ask Srinivasan&apos;s AI</h2>
                <p className="mt-0.5 flex items-center gap-1.5 text-sm text-emerald-400"><span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />online · knows his work</p>
              </div>
            </div>
            <button type="button" onClick={() => setIsOpen(false)} className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white" aria-label="Close chat"><FaTimes /></button>
          </header>
          <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`max-w-[92%] rounded-2xl px-4 py-3 text-[15px] leading-6 ${message.role === 'user' ? 'ml-auto rounded-br-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-950/50' : 'rounded-bl-md border border-[#2a3b62] bg-[#151b30] text-slate-200'}`}>
                {message.text}
              </div>
            ))}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-20">
                {suggestedQuestions.map((suggestedQuestion) => (
                  <button key={suggestedQuestion} type="button" onClick={() => askSuggestedQuestion(suggestedQuestion)} className="rounded-full border border-cyan-400/55 bg-cyan-400/[0.07] px-3.5 py-1.5 text-left text-sm text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-400/15">
                    {suggestedQuestion}
                  </button>
                ))}
              </div>
            )}
            {messages.length > 1 && (
              <button type="button" onClick={showQuickQuestions} className="rounded-full border border-cyan-400/45 bg-cyan-400/[0.07] px-3.5 py-1.5 text-sm text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-400/15">
                ↺ Back to quick questions
              </button>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSubmit} className="flex gap-3 border-t border-cyan-200/10 px-5 py-4">
            <label className="sr-only" htmlFor="portfolio-question">Ask a portfolio question</label>
            <input id="portfolio-question" value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Ask about his projects, skills, work..." className="min-w-0 flex-1 rounded-2xl border border-[#34466e] bg-[#11172c] px-4 py-3 text-[15px] text-white outline-none placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/15" />
            <button type="submit" className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-500 text-[#06142d] shadow-lg shadow-cyan-900/40 transition hover:scale-105 hover:from-cyan-200 hover:to-blue-400" aria-label="Send question"><FaPaperPlane className="text-base" /></button>
          </form>
        </section>
      )}
      <button type="button" onClick={() => setIsOpen((current) => !current)} className="group flex items-center gap-3 rounded-2xl border border-cyan-300/30 bg-[#0c1830]/95 px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-cyan-950/50 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-300 hover:bg-[#122242]" aria-expanded={isOpen} aria-controls="portfolio-chat">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-cyan-400/15 text-cyan-200"><FaRobot /></span>
        <span>{isOpen ? 'Close AI' : 'Ask my AI'}</span>
      </button>
    </div>
  );
}
