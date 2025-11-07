import React from 'react';

const features = [
  {
    title: 'Institutional Security',
    desc: 'Bank-grade encryption and multi-layer risk controls keep your assets protected.',
    emoji: '🛡️',
  },
  {
    title: 'Curated Portfolios',
    desc: 'Hand-picked thematic baskets spanning fintech, e‑commerce, and digital banking.',
    emoji: '📈',
  },
  {
    title: 'Transparent Fees',
    desc: 'Simple, all‑inclusive pricing—no surprises, ever.',
    emoji: '💎',
  },
  {
    title: 'Real-time Insights',
    desc: 'Clean dashboards and timely signals to guide confident decisions.',
    emoji: '⚡',
  },
];

export default function Features() {
  return (
    <section id="learn-more" className="relative bg-[#0b1117] text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">A refined toolkit for modern investors</h2>
          <p className="mt-3 text-white/70">Minimal surface, maximal clarity. Everything you need, nothing you don\'t.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
              <div className="text-3xl">{f.emoji}</div>
              <h3 className="mt-4 text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
