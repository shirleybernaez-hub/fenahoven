import React from 'react';
import { Link } from 'react-router-dom';

export default function Web() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900">
      
      {/* NAVBAR */}
      <nav className="border-b border-slate-100 py-6 px-8 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tighter text-[#0062B2]">← VOLVER A REBRANDING</Link>
      </nav>

      {/* HERO INSTITUCIONAL */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center px-8">
        {/* Frase poderosa */}
        <div className="text-center max-w-4xl mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-[#0062B2] leading-tight mb-8 uppercase tracking-tight">
            67 AÑOS IMPULSANDO EL TURISMO EN VENEZUELA
          </h1>
          <p className="text-xl text-slate-500 font-light">
            La voz oficial de la hotelería venezolana desde 1958.
          </p>
        </div>

        {/* Indicadores del sector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full max-w-5xl border-t border-slate-100 pt-12">
          <div className="text-center">
            <span className="block text-3xl md:text-4xl font-bold text-[#1E293B] mb-2">300+</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">Hoteles Representados</span>
          </div>
          <div className="text-center">
            <span className="block text-3xl md:text-4xl font-bold text-[#1E293B] mb-2">24</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">Estados Afiliados</span>
          </div>
          <div className="text-center">
            <span className="block text-3xl md:text-4xl font-bold text-[#1E293B] mb-2">67</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">Años de Trayectoria</span>
          </div>
          <div className="text-center">
            <span className="block text-3xl md:text-4xl font-bold text-[#1E293B] mb-2">12+</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">Eventos Anuales</span>
          </div>
        </div>
      </section>

      {/* AQUÍ AGREGAREMOS LA SIGUIENTE SECCIÓN DESPUÉS */}
      
    </div>
  );
}