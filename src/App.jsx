import React from 'react';

export default function App() {
  return (
    <div className="bg-[#FDFDFD] text-[#1E293B] font-sans antialiased">
      
      {/* SECCIÓN INTRODUCCIÓN */}
      <section className="min-h-[60vh] w-full bg-[#0062B2] text-white flex flex-col justify-center items-center px-4">
        <span className="text-sm uppercase tracking-[0.4em] text-white/80 mb-6 font-bold">
          ESTUDIO DE IDENTIDAD
        </span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-center leading-tight uppercase">
          PROPUESTA DE<br />REBRANDING
        </h1>
        <p className="text-xl md:text-2xl font-light tracking-wide text-white/90 mt-6 text-center uppercase">
          PARA LA MARCA FENAHOVEN
        </p>
      </section>

      {/* SECCIÓN ESTRATEGIA */}
      <section className="py-24 md:py-36 px-8 md:px-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="md:col-span-5 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0062B2] uppercase tracking-tight leading-none">
              ¿Por qué un<br className="hidden md:block" /> rebranding?
            </h2>
          </div>
          <div className="md:col-span-7 pt-2 md:pt-6">
            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-light text-justify">
              Actualmente, una identidad visual saturada de ornamentos no solo resta elegancia, sino que anula la legibilidad en los soportes digitales e impresos. Hemos optado por una solución basada exclusivamente en la tipografía porque el nombre de la institución es su activo.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN APLICACIÓN WEB */}
      <section className="py-24 w-full bg-white flex flex-col items-center">
        <h2 className="text-lg uppercase tracking-[0.3em] text-slate-400 font-bold mb-16 text-center">
          Aplicación web
        </h2>
        <div className="relative w-full max-w-4xl px-8">
          <div className="aspect-[16/10] bg-slate-900 rounded-t-3xl border-[12px] border-slate-800 shadow-2xl flex items-center justify-center overflow-hidden">
             <div className="text-white/20 font-bold text-xl uppercase tracking-widest">Mockup Web FENAHOVEN</div>
          </div>
          <div className="h-6 w-full bg-slate-800 rounded-b-xl"></div>
        </div>
        <div className="mt-16">
          <a 
            href="https://fenahoven.vercel.app/web" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#0062B2] text-white font-bold uppercase tracking-[0.2em] rounded-full hover:bg-[#004a85] transition-all"
          >
            FENAHOVENWEB
          </a>
        </div>
      </section>

    </div>
  );
}