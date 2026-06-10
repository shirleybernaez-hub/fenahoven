import React from 'react';
import { Link } from 'react-router-dom';

export default function Web() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <nav className="border-b border-slate-100 py-6 px-8 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tighter text-[#0062B2]">← VOLVER A REBRANDING</Link>
      </nav>

      <div className="p-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Dashboard Nacional</h1>
        <div className="mt-12 p-8 bg-slate-50 rounded-3xl max-w-sm mx-auto border border-slate-100">
            <h3 className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Ocupación Nacional</h3>
            <p className="text-4xl font-bold text-[#0062B2] mt-2">30%</p>
        </div>
      </div>
    </div>
  );
}