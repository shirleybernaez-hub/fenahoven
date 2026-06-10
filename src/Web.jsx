import React, { useState, useEffect } from 'react';

// Componente interno para animar los números de forma interactiva
function Counter({ value, duration = 1500 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (start === end) return;

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
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900 antialiased">
      
      {/* 1. TOP BAR (ESTILO HOTREC) */}
      <div className="bg-[#0062B2] py-2 px-6 md:px-12 text-white text-[11px] font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="opacity-80">✉</span> contacto@fenahoven.org.ve
            </span>
            <span className="flex items-center gap-2">
              <span className="opacity-80">📞</span> +58 (212) 993-4444
            </span>
          </div>
          <div className="flex items-center gap-4 opacity-90">
            <span className="cursor-pointer hover:text-slate-200">𝕏</span>
            <span className="cursor-pointer hover:text-slate-200 font-bold">in</span>
            <span className="cursor-pointer hover:text-slate-200">ƒ</span>
          </div>
        </div>
      </div>

      {/* 2. NAVBAR PRINCIPAL ALTO PREMIUM */}
      <nav className="bg-white sticky top-0 z-50 px-6 py-8 md:px-12 border-b border-slate-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 md:flex-row md:items-center relative">
          
          {/* Logo Principal */}
          <div className="flex items-center justify-center md:justify-start md:absolute">
            <img 
              src="/logofenahoven_azul.png" 
              alt="Logo FENAHOVEN" 
              className="h-5 w-auto object-contain select-none" 
            />
          </div>

          {/* Menú de Enlaces Centrado, Bold, Color #10172A */}
          <div className="flex-1 flex flex-wrap gap-x-8 gap-y-3 items-center justify-center text-xs md:text-[13px] font-bold text-[#10172A] tracking-wide">
            <a 
              href="/quienes-somos" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cursor-pointer hover:text-[#0062B2] transition-colors whitespace-nowrap py-1"
            >
              Quiénes Somos
            </a>
            <span className="cursor-pointer hover:text-[#0062B2] transition-colors whitespace-nowrap py-1">Datos de la Industria</span>
            <span className="cursor-pointer hover:text-[#0062B2] transition-colors whitespace-nowrap py-1">Dashboard Nacional</span>
            <span className="cursor-pointer hover:text-[#0062B2] transition-colors whitespace-nowrap py-1">Eventos</span>
            <span className="cursor-pointer hover:text-[#0062B2] transition-colors whitespace-nowrap py-1">Capacitación</span>
            <span className="cursor-pointer hover:text-[#0062B2] transition-colors whitespace-nowrap py-1">Contacto</span>
          </div>

        </div>
      </nav>

      {/* 3. HERO INSTITUTIONAL CON TITULAR EN 3 LÍNEAS */}
      <section 
        className="relative min-h-[95vh] flex flex-col justify-center items-center px-8 bg-cover bg-center bg-no-repeat bg-fixed py-20"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(16, 23, 42, 0.85), rgba(16, 23, 42, 0.50)), url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop')` 
        }}
      >
        <div className="text-center max-w-5xl mb-16 z-10">
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.15] mb-8 uppercase tracking-tight">
            67 AÑOS <br />
            IMPULSANDO EL TURISMO <br />
            EN VENEZUELA
          </h1>
          <p className="text-lg md:text-xl text-slate-200 font-light tracking-wide max-w-2xl mx-auto">
            La voz oficial de la hotelería venezolana desde 1958.
          </p>
        </div>

        {/* Cards de Indicadores */}
        <div className="w-full max-w-6xl z-10 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-100 flex flex-col justify-center items-center transform hover:scale-102 transition-transform duration-300">
              <span className="block text-4xl md:text-5xl font-black text-[#0062B2] tracking-tight mb-3">
                <Counter value="300" />+
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold text-center">Hoteles Representados</span>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-100 flex flex-col justify-center items-center transform hover:scale-102 transition-transform duration-300">
              <span className="block text-4xl md:text-5xl font-black text-[#0062B2] tracking-tight mb-3">
                <Counter value="24" />
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold text-center">Estados Afiliados</span>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-100 flex flex-col justify-center items-center transform hover:scale-102 transition-transform duration-300">
              <span className="block text-4xl md:text-5xl font-black text-[#0062B2] tracking-tight mb-3">
                <Counter value="67" />
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold text-center">Años de Trayectoria</span>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-100 flex flex-col justify-center items-center transform hover:scale-102 transition-transform duration-300">
              <span className="block text-4xl md:text-5xl font-black text-[#0062B2] tracking-tight mb-3">
                <Counter value="12" />+
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold text-center">Eventos Anuales</span>
            </div>
          </div>
          <div className="text-center pt-2">
            <span className="text-[9px] font-mono tracking-wider text-slate-300 uppercase bg-slate-900/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
              Fuente: Registro Histórico FENAHOVEN
            </span>
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN INTERACTIVA: DATOS DE LA INDUSTRIA */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 w-full">
            <div className="relative aspect-[4/5] w-full bg-slate-100 rounded-3xl overflow-hidden shadow-lg border border-slate-100">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop" 
                alt="Industria Hotelera Venezuela" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-8 left-8 z-20 text-white">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-80">Reporte Nacional</span>
                <p className="text-lg font-medium mt-1">Cifras Auditadas</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-12">
            <div>
              <span className="text-xs font-bold text-[#0062B2] uppercase tracking-[0.3em] block mb-3">Estadísticas en Tiempo Real</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1E293B] uppercase">Datos de la Industria</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-10 border-t border-slate-100 pt-8">
              <div className="flex flex-col justify-between">
                <div>
                  <div className="text-5xl font-bold text-[#0062B2] tracking-tight mb-2">
                    <Counter value="32" />%
                  </div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-slate-800 mb-1">Ocupación Hotelera</h4>
                  <p className="text-xs text-slate-400 font-light mb-3">Promedio base consolidado a nivel nacional.</p>
                </div>
                <span className="text-[9px] font-mono tracking-wider text-slate-300 uppercase block">Fuente: FENAHOVEN / CONSETURISMO</span>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <div className="text-5xl font-bold text-[#1E293B] tracking-tight mb-2">
                    $<Counter value="80" />
                  </div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-slate-800 mb-1">Tarifa Promedio Premium</h4>
                  <p className="text-xs text-slate-400 font-light mb-3">Eje de comercialización del segmento de alta gama.</p>
                </div>
                <span className="text-[9px] font-mono tracking-wider text-slate-300 uppercase block">Fuente: Monitoreo de Mercado Estimado</span>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <div className="text-5xl font-bold text-amber-600 tracking-tight mb-2">
                    <Counter value="24" />
                  </div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-slate-800 mb-1">Estados Monitoreados</h4>
                  <p className="text-xs text-slate-400 font-light mb-3">Inteligencia turística de cobertura absoluta.</p>
                </div>
                <span className="text-[9px] font-mono tracking-wider text-slate-300 uppercase block">Fuente: División de Estadística FENAHOVEN</span>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <div className="text-5xl font-bold text-emerald-600 tracking-tight mb-2">
                    +<Counter value="15" />%
                  </div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-slate-800 mb-1">Crecimiento en Eventos</h4>
                  <p className="text-xs text-slate-400 font-light mb-3">Dinamización por turismo de espectáculos.</p>
                </div>
                <span className="text-[9px] font-mono tracking-wider text-slate-300 uppercase block">Fuente: Reporte de Afiliados Trimestral</span>
              </div>
            </div>

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

      {/* 5. NUEVA SECCIÓN: BANNER BOLETÍN DE OCUPACIÓN (CLONADO DE HOTREC) */}
      <section className="pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div 
          className="relative rounded-3xl overflow-hidden bg-cover bg-center py-20 px-8 md:px-16 text-center shadow-xl border border-slate-100"
          style={{ 
            backgroundImage: `linear-gradient(to right, rgba(16, 23, 42, 0.85), rgba(16, 23, 42, 0.85)), url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000&auto=format&fit=crop')` 
          }}
        >
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            {/* Título Principal */}
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Ocupación Hotelera Nacional (Boletín Informativo)
            </h3>
            
            {/* Subtexto descriptivo */}
            <p className="text-sm md:text-base text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
              El informe estadístico oficial de FENAHOVEN le ofrece un desglose detallado del comportamiento, pernoctaciones y evolución de la actividad turística en los 24 estados de Venezuela.
            </p>
            
            {/* CTA Outline estilo Hotrec para abrir y descargar el PDF */}
            <div className="pt-4">
              <a 
                href="/reporte-ocupacion.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block border border-white text-white text-xs font-bold uppercase tracking-[0.2em] px-8 py-3.5 rounded-md hover:bg-white hover:text-[#10172A] transition-all duration-300"
              >
                Lea el boletín informativo
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}