import React from 'react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#0a0f14] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-lg font-semibold">Luxe Portfolio</div>
            <p className="mt-1 text-sm text-white/60">Modern, minimalist investing for a calmer future.</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/70 hover:text-white text-sm">Privacy</a>
            <a href="#" className="text-white/70 hover:text-white text-sm">Terms</a>
            <a href="#" className="text-white/70 hover:text-white text-sm">Support</a>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/50">© {new Date().getFullYear()} Luxe Portfolio. All rights reserved.</div>
      </div>
    </footer>
  );
}
