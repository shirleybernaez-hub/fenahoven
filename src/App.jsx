import React from 'react';

export default function App() {
  return (
    <div className="bg-[#FDFDFD] text-[#1E293B] font-sans antialiased">
      
      {/* SECCIÓN INTRODUCCIÓN */}
      <section className="min-h-[60vh] w-full bg-[#0062B2] text-white flex flex-col justify-center items-center p-8 md:p-16 border-b border-white/10">
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 mb-6">Estudio de Identidad</span>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-center leading-tight">
          <span className="font-light">Propuesta de</span> <span className="font-bold">rebranding</span><br />
          <span className="font-light text-base md:text-xl mt-4 block">para la marca FENAHOVEN</span>
        </h1>
      </section>

      {/* SECCIÓN ESTRATEGIA - Responsiva */}
      <section className="py-24 px-8 md:px-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="md:col-span-5">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0062B2] uppercase tracking-tight">¿Por qué un<br />rebranding?</h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-base md:text-lg text-slate-600 leading-relaxed text-justify">
              Esta propuesta es una inversión estratégica: eliminamos el ruido visual para potenciar su autoridad. Al simplificar, garantizamos que su marca no solo sea vista, sino recordada.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN TIPOGRAFÍA - Responsive adaptativo */}
      <section className="min-h-screen w-full bg-[#0367A6] text-white p-8 md:p-24 flex flex-col justify-center items-center">
        <h2 className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-bold mb-16">Tipografía</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold tracking-tight">Times Sans Serif</h3>
            <p className="text-xs opacity-80 mt-2">Light / Regular / Bold</p>
          </div>
          
          <div className="text-center text-sm md:text-base font-light leading-relaxed tracking-wide">
            AaBbCcDdEeFfGg<br />HhJjKkLlMmNnOoPp<br />QqRrSsTtUuVvWw<br />XxYyZz - 123456789
          </div>
        </div>
        
        <div className="mt-16 text-[200px] md:text-[600px] font-bold leading-none opacity-20 select-none">
          Aa
        </div>
      </section>

      {/* SECCIÓN APLICACIÓN MÓVIL - Grid responsivo */}
      <section className="py-24 w-full bg-[#F1F5F9]">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold mb-16 text-center">Aplicación móvil</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Teléfonos con escalonamiento md:mt-12 solo en desktop */}
            <div className="flex justify-center">
              <div className="w-full max-w-[280px] aspect-[9/19] bg-[#0468BF] rounded-[3rem] border-[8px] border-white shadow-xl flex items-center justify-center">
                <img src="/logofenahovenblanco.png" alt="Logo" className="w-1/2 object-contain" />
              </div>
            </div>
            
            <div className="flex justify-center md:mt-12">
              <div className="w-full max-w-[280px] aspect-[9/19] bg-[#FFFFFF] rounded-[3rem] border-[8px] border-slate-200 shadow-xl flex items-center justify-center">
                <img src="/logofenahoven_azul.svg" alt="Logo" className="w-1/2 object-contain" />
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-full max-w-[280px] aspect-[9/19] bg-[#0367A6] rounded-[3rem] border-[8px] border-white shadow-xl flex items-center justify-center">
                <img src="/logofenahovenblanco.png" alt="Logo" className="w-1/2 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 w-full bg-[#000000] text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-light">onshift 2026</p>
      </footer>
    </div>
  );
}