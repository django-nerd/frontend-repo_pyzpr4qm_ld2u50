import React from 'react';

const strategies = [
  {
    name: 'Fintech Core',
    apr: '8.4% APY',
    risk: 'Moderate',
    summary: 'A balanced blend of digital banking and payments leaders.',
  },
  {
    name: 'Commerce Momentum',
    apr: '11.2% APY',
    risk: 'Elevated',
    summary: 'High‑growth e‑commerce and enablement platforms.',
  },
  {
    name: 'Stable Yield',
    apr: '5.1% APY',
    risk: 'Low',
    summary: 'Income‑oriented basket of cash‑equivalents and treasuries.',
  },
];

export default function StrategyShowcase() {
  return (
    <section id="get-started" className="relative bg-gradient-to-b from-[#0b1117] to-[#0e151c] text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Curated strategies</h2>
            <p className="mt-2 text-white/70 max-w-xl">Explore elegantly constructed portfolios that align risk and reward with minimalist precision.</p>
          </div>
          <a href="#footer" className="inline-flex items-center gap-2 rounded-lg bg-teal-400/90 hover:bg-teal-300 text-slate-900 px-5 py-3 font-medium transition">Open an account</a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {strategies.map((s) => (
            <div key={s.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{s.name}</h3>
                <span className="rounded-full bg-teal-400/20 text-teal-200 px-3 py-1 text-xs font-medium">{s.risk}</span>
              </div>
              <p className="mt-3 text-sm text-white/70">{s.summary}</p>
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <div className="text-2xl font-semibold">{s.apr}</div>
                  <div className="text-xs text-white/60">Projected, net of fees</div>
                </div>
                <button className="rounded-lg bg-white/10 hover:bg-white/15 px-4 py-2 text-sm font-medium">View details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
