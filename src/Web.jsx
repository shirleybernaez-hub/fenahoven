import React, { useState, useEffect } from 'react';

// Componente interno para animar los números de forma interactiva
function Counter({ value, duration = 1500 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (start === end) return;

    // Calcular el tiempo por cada incremento
    const totalMilisecondsByStep = Math.max(Math.floor(duration / end), 1);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, totalMilisecondsByStep);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}</span>;
}

export default function Web() {
  const navLinks = [
    "Quiénes Somos", "Federación", "Dashboard Nacional", "Radar Hotelero", 
    "Capacitación", "Eventos", "Inversión Hotelera", "Sala de Prensa", 
    "Afíliate", "Contacto"
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900 antialiased">
      
      {/* NAVBAR INSTITUCIONAL */}
      <nav className="border-b border-slate-100 bg-white sticky top-0 z-50 px-6 py-4 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="text-xl font-bold tracking-tighter text-[#0062B2] uppercase select-none">
            FENAHOVEN
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 items-center text-xs md:text-sm font-medium text-slate-600">
            {navLinks.map((link, index) => (
              <span key={index} className="cursor-pointer hover:text-[#0062B2] transition-colors whitespace-nowrap py-1">
                {link}
              </span>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO INSTITUCIONAL */}
      <section className="min-h-[75vh] flex flex-col justify-center items-center px-8 bg-gradient-to-b from-white to-slate-50/50 border-b border-slate-100">
        <div className="text-center max-w-4xl mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-[#0062B2] leading-tight mb-8 uppercase tracking-tight">
            67 AÑOS IMPULSANDO EL TURISMO EN VENEZUELA
          </h1>
          <p className="text-xl text-slate-500 font-light">
            La voz oficial de la hotelería venezolana desde 1958.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full max-w-5xl border-t border-slate-200/60 pt-12">
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

      {/* SECCIÓN INTERACTIVA: DATOS DE LA INDUSTRIA */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* COLUMNA IZQUIERDA: IMAGEN CON ESTILO PREMIUM */}
          <div className="lg:col-span-5 w-full">
            <div className="relative aspect-[4/5] w-full bg-slate-100 rounded-3xl overflow-hidden shadow-lg border border-slate-100">
              {/* Puedes cambiar este placeholder por una fotografía de arquitectura de hotel de lujo */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop" 
                alt="Industria Hotelera Venezuela" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-8 left-8 z-20 text-white">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-80">Reporte Nacional</span>
                <p className="text-lg font-medium mt-1">Cifras Auditadas 2026</p>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: CIFRAS CON CONTADORES INTERACTIVOS */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <span className="text-xs font-bold text-[#0062B2] uppercase tracking-[0.3em] block mb-3">Estadísticas en Tiempo Real</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1E293B] uppercase">Datos de la Industria</h2>
            </div>

            {/* Grid de cifras de alto impacto */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-10 border-t border-slate-100 pt-8">
              
              <div>
                <div className="text-5xl font-bold text-[#0062B2] tracking-tight mb-2">
                  <Counter value="32" />%
                </div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-800 mb-1">Ocupación Hotelera</h4>
                <p className="text-xs text-slate-400 font-light">Promedio base consolidado a nivel nacional.</p>
              </div>

              <div>
                <div className="text-5xl font-bold text-[#1E293B] tracking-tight mb-2">
                  $<Counter value="80" />
                </div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-800 mb-1">Tarifa Promedio Premium</h4>
                <p className="text-xs text-slate-400 font-light">Eje de comercialización del segmento de alta gama.</p>
              </div>

              <div>
                <div className="text-5xl font-bold text-amber-600 tracking-tight mb-2">
                  <Counter value="24" />
                </div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-800 mb-1">Estados Monitoreados</h4>
                <p className="text-xs text-slate-400 font-light">Inteligencia turística de cobertura absoluta.</p>
              </div>

              <div>
                <div className="text-5xl font-bold text-emerald-600 tracking-tight mb-2">
                  +<Counter value="15" />%
                </div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-800 mb-1">Crecimiento en Eventos</h4>
                <p className="text-xs text-slate-400 font-light">Dinamización por turismo de espectáculos.</p>
              </div>

            </div>

            {/* EL CTA REQUERIDO DEBAJO DE LAS CIFRAS */}
            <div className="pt-6">
              <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#1E293B] text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full overflow-hidden hover:bg-[#0062B2] transition-colors duration-300 shadow-sm">
                <span>Datos y Cifras</span>
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}