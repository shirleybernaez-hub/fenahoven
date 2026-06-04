import React from 'react';

export default function App() {
  return (
    <div className="bg-[#FDFDFD] text-[#1E293B] font-nexa antialiased selection:bg-[#0062B2]/10">
      
      {/* SECCIÓN INTRODUCCIÓN */}
      <section className="min-h-[60vh] w-full bg-[#0062B2] text-white flex flex-col justify-center items-center p-8 md:p-16 border-b border-white/10">
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 mb-6 font-nexa">Estudio de Identidad</span>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-center leading-tight font-nexa">
          <span className="font-light">Propuesta de</span> <span className="font-bold">rebranding</span><br />
          <span className="font-light">para la marca </span><span className="font-bold">FENAHOVEN</span>
        </h1>
        <div className="mt-8 h-[1px] w-24 bg-white/30"></div>
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
              Actualmente, una identidad visual saturada de ornamentos no solo resta elegancia, sino que anula la legibilidad en los soportes digitales e impresos. Hemos optado por una solución basada exclusivamente en la tipografía porque el nombre de la institución es su activo más valioso. Al eliminar elementos gráficos y accesorios, la marca gana una personalidad atemporal e institucional, permitiendo que la legibilidad sea absoluta en cualquier formato y escala.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN LOGO ACTUAL */}
      <section className="py-24 md:py-36 px-8 md:px-16 max-w-5xl mx-auto border-t border-slate-100">
        <div className="flex flex-col items-center">
          <h3 className="text-xs uppercase tracking-[0.3em] text-slate-400 font-bold mb-8">LOGO ACTUAL</h3>
          <div className="w-full flex justify-center">
            <div className="bg-slate-50/50 rounded-3xl p-12">
              <img src="/logofenahoven.jpg" alt="Logo Actual FENAHOVEN" className="h-96 md:h-[32rem] w-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN ANATOMÍA DE MARCA (Con signos + e = para móvil y desktop) */}
      <section className="min-h-screen w-full bg-[#0062B2] text-white p-8 md:p-16 flex flex-col justify-center relative overflow-hidden">
        <div className="w-full text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.3em] text-white/60 font-bold">Nueva propuesta</h2>
        </div>
        
        <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-center">
          <div className="space-y-2 md:w-1/4">
            <h4 className="text-xs uppercase tracking-wider font-bold">Eliminación de Ornamentos</h4>
            <p className="text-[10px] text-white/70 font-light">Se elimina el mapa de Venezuela y el fondo con gradientes.</p>
          </div>

          <div className="text-white/20 text-3xl font-bold">+</div>

          <div className="space-y-2 md:w-1/4">
            <h4 className="text-xs uppercase tracking-wider font-bold">Depuración Geométrica</h4>
            <p className="text-[10px] text-white/70 font-light">Enfoque exclusivo en el valor de la palabra.</p>
          </div>

          <div className="text-white/20 text-3xl font-bold">+</div>

          <div className="space-y-2 md:w-1/4">
            <h4 className="text-xs uppercase tracking-wider font-bold">Respeto Histórico</h4>
            <p className="text-[10px] text-white/70 font-light">Conservamos la tipografía original.</p>
          </div>

          <div className="text-white/20 text-3xl font-bold">=</div>

          <div className="md:w-1/4 flex flex-col items-center">
            <img src="/logofenahovenblanco.png" alt="Resultado" className="h-16 w-auto object-contain" />
          </div>
        </div>
      </section>

      {/* SECCIÓN LOGO COLOR ÚNICO */}
      <section className="py-24 px-8 md:px-16 flex flex-col items-center bg-white">
        <div className="w-full text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.3em] text-slate-400 font-bold">Logo en color único</h2>
        </div>
        <div className="w-full flex flex-col items-center justify-center p-12">
          <img src="/logofenahoven_azul.svg" alt="Logo Azul" className="h-20 md:h-28 w-auto object-contain" />
          <span className="text-[10px] tracking-[0.3em] text-slate-400 uppercase mt-6 font-bold">Federación Nacional de Hoteles de Venezuela</span>
        </div>
      </section>

      {/* SECCIÓN VARIACIÓN DE LOGO */}
      <section className="w-full flex flex-col border-t border-slate-100">
        <div className="px-8 py-12 text-center">
          <h2 className="text-xs uppercase tracking-[0.3em] text-slate-400 font-bold">Variación de logo</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full">
          <div className="aspect-square flex items-center justify-center bg-white"><img src="/logofenahoven_azul.svg" alt="Azul" className="w-32" /></div>
          <div className="aspect-square flex items-center justify-center bg-[#0468BF]"><img src="/logofenahovenblanco.png" alt="Blanco" className="w-32" /></div>
          <div className="aspect-square flex items-center justify-center bg-[#0367A6]"><img src="/logofenahovenblanco.png" alt="Blanco" className="w-32" /></div>
        </div>
      </section>

      {/* SECCIÓN PALETA DE COLORES */}
      <section className="py-24 w-full bg-[#FDFDFD] border-t border-slate-100">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-8 max-w-6xl mx-auto">
          {["#0468BF", "#0367A6", "#36A6BF", "#F2D785", "#F2E1C2"].map((hex, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="h-32 md:h-64 w-full rounded-2xl shadow-sm mb-4" style={{ backgroundColor: hex }}></div>
              <span className="text-[10px] font-mono font-bold uppercase">{hex}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN TIPOGRAFÍA */}
      <section className="min-h-screen w-full bg-[#0367A6] text-white p-8 md:p-24 flex flex-col justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl mx-auto gap-8">
          <div><h3 className="text-xl font-bold">Times Sans Serif</h3><p className="text-sm opacity-80">Light / Regular / Bold</p></div>
          <div className="text-center font-light text-sm">AaBbCcDdEeFfGg<br />HhJjKkLlMmNnOoPp<br />QqRrSsTtUuVvWw</div>
        </div>
        <div className="flex items-center justify-center mt-12 opacity-20 text-[150px] md:text-[600px] font-bold">Aa</div>
      </section>

      {/* SECCIÓN APLICACIÓN MÓVIL */}
      <section className="py-24 w-full bg-[#F1F5F9]">
        <h2 className="text-xs uppercase tracking-[0.3em] text-slate-400 font-bold mb-16 text-center">Aplicación móvil</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 px-8 items-center">
          {[
            { bg: "bg-[#0468BF]", src: "/logofenahovenblanco.png" },
            { bg: "bg-white", src: "/logofenahoven_azul.svg" },
            { bg: "bg-[#0367A6]", src: "/logofenahovenblanco.png" }
          ].map((item, i) => (
            <div key={i} className={`w-full max-w-[200px] md:max-w-[280px] aspect-[9/19] ${item.bg} rounded-[3rem] border-[8px] border-white flex items-center justify-center shadow-2xl`}>
              <img src={item.src} alt="Logo" className="w-3/5" />
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-black text-center text-[10px] uppercase text-white/50 tracking-[0.2em]">
        onshift 2026
      </footer>
    </div>
  );
}