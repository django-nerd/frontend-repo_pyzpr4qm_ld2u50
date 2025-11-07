import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import StrategyShowcase from './components/StrategyShowcase';
import Footer from './components/Footer';

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur border-b border-white/10 bg-[#0a0f14]/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between text-white">
        <a href="#" className="font-semibold tracking-tight">Luxe Portfolio</a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
          <a href="#learn-more" className="hover:text-white">Features</a>
          <a href="#get-started" className="hover:text-white">Strategies</a>
          <a href="#footer" className="hover:text-white">Contact</a>
          <a href="#" className="rounded-md bg-white/10 hover:bg-white/15 px-3 py-1.5">Sign in</a>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0f14] font-inter">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <StrategyShowcase />
      </main>
      <Footer />
    </div>
  );
}
