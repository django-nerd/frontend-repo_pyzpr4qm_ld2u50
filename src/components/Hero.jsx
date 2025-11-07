import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-[#0a0f14] via-[#0a0f14] to-[#0c1218]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/60 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-[radial-gradient(circle_at_center,rgba(165,243,252,0.18),transparent_60%)] blur-2xl pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-16 sm:pt-36 sm:pb-24 text-center text-white">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide backdrop-blur">
          Luxe Portfolio • Fintech Grade
        </span>
        <h1 className="mt-6 text-4xl sm:text-6xl font-semibold leading-[1.1] tracking-tight">
          Elevate your capital with a modern, minimalist edge
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-white/70">
          A serene platform for curated portfolio investments. Designed with premium simplicity, built for clarity and performance.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#get-started" className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-400/90 hover:bg-teal-300 text-slate-900 px-6 py-3 font-medium transition">
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
          <a href="#learn-more" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 text-white px-6 py-3 font-medium transition">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
