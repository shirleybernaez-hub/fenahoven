import React, { useState, useEffect } from 'react';

// Componente interno para animar los números de forma interactiva (cuenta progresiva dinámica)
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
  // Estado para controlar cuál hito está seleccionado/activo. Inicia en 0 (1958) por defecto.
  const [activeHito, setActiveHito] = useState(0);

  // Arreglo con clases de tamaño personalizadas para equilibrar visualmente cada logo de la red
  const partners = [
    { src: '/conseturismo.png', alt: 'Conseturismo', className: 'max-h-12 w-auto' },
    { src: '/avavit.jpg', alt: 'AVAVIT', className: 'max-h-12 w-auto' },
    { src: '/avencintel.jpg', alt: 'AVENCINTEL', className: 'max-h-20 md:max-h-24 w-auto scale-110' },
    { src: '/asociaciondelienas.png', alt: 'ALAV', className: 'max-h-12 w-auto' },
    { src: '/camyticom.png', alt: 'Camyticom', className: 'max-h-12 w-auto' },
    { src: '/cvtt.jpg', alt: 'CVTT', className: 'max-h-16 md:max-h-20 w-auto scale-110' },
    { src: '/cavespa.png', alt: 'CAVESPA', className: 'max-h-14 w-auto' }
  ];

  // Hitos Cronológicos de la Historia de FENAHOVEN
  const timelineEvents = [
    {
      year: '1958',
      title: 'Fundación de ANAHOVEN',
      description: 'Nace la Asociación Nacional de Hoteles de Venezuela, sentando las bases de la unión gremial en una época de pleno desarrollo de infraestructuras icónicas en el país.'
    },
    {
      year: '1993',
      title: 'Transformación en FENAHOVEN',
      description: 'Evolución estructural hacia Federación Nacional de Hoteles de Venezuela, expandiendo su alcance para agrupar cámaras regionales y elevar la representatividad del sector.'
    },
    {
      year: '2000 - 2020',
      title: 'Expansión Gremial',
      description: 'Dos décadas de consolidación institucional, tejiendo alianzas estratégicas e impulsando la profesionalización de la hotelería en cada rincón del territorio nacional.'
    },
    {
      year: '2021 - 2026',
      title: 'Modernización y Recuperación',
      description: 'Enfoque total en la digitalización, optimización de datos de la industria turística y la reactivación estratégica de la red hotelera venezolana.'
    },
    {
      year: 'Futuro',
      title: 'Turismo Sostenible e Inversión',
      description: 'Hacia un modelo de hotelería verde, sustentable, con estándares internacionales de servicio y la apertura de nuevas ventanas para la inversión global.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900 antialiased">
      
      {/* 1. TOP BAR (ESTILO HOTREC) */}
      <div className="bg-[#2F92B9] py-2 px-6 md:px-12 text-white text-[11px] font-medium tracking-wide relative z-30">
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

      {/* 2. NAVBAR PRINCIPAL */}
      <nav className="bg-white border-b border-gray-200 relative px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between min-h-[100px] relative py-4 md:py-0">
          
          <div className="flex items-center justify-center md:justify-start relative md:absolute top-0 left-0 z-20 mb-4 md:mb-0">
            <img 
              src="/logowebfenahoven.png" 
              alt="Escudo Oficial FENAHOVEN" 
              className="h-36 md:h-44 w-auto object-contain select-none" 
            />
          </div>

          <div className="flex-1 flex flex-wrap gap-x-8 gap-y-3 items-center justify-center text-xs md:text-[15px] font-medium text-slate-900 tracking-wide md:min-h-[100px]">
            <a href="/quienes-somos" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-[#2F92B9] transition-colors py-1">
              Quiénes somos?
            </a>
            <span className="cursor-pointer hover:text-[#2F92B9] transition-colors py-1">Directorio</span>
            <span className="cursor-pointer hover:text-[#2F92B9] transition-colors py-1">Noticias</span>
            <span className="cursor-pointer hover:text-[#2F92B9] transition-colors py-1">Eventos</span>
            <span className="cursor-pointer hover:text-[#2F92B9] transition-colors py-1">Capacitación</span>
            <span className="cursor-pointer hover:text-[#2F92B9] transition-colors py-1">Contacto</span>
          </div>

          <div className="hidden md:block w-40 pointer-events-none" />
        </div>
      </nav>

      {/* 3. HERO INSTITUTIONAL CON MÁSCARA PARALLAX ROUNDED DE 35PX */}
      <section 
        className="relative min-h-[95vh] flex flex-col justify-center items-center px-8 bg-cover bg-center bg-no-repeat bg-fixed py-20 rounded-b-[35px] overflow-hidden shadow-md"
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

      {/* 3.5. INTRODUCCIÓN INSTITUCIONAL */}
      <section className="py-28 bg-[#F1F5F9] border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            
            <div className="md:col-span-5 space-y-4">
              <span className="text-xs font-bold text-[#2F92B9] uppercase tracking-[0.3em] block">Identidad Institucional</span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 uppercase leading-tight">
                La Voz Oficial <br />
                de la Hotelería <br />
                en Venezuela
              </h2>
              <div className="w-12 h-1 bg-[#2F92B9] rounded-full mt-2" />
            </div>

            <div className="md:col-span-7 space-y-10">
              <p className="text-slate-700 text-base md:text-lg font-light leading-relaxed">
                La <strong className="font-semibold text-slate-900">Federación Nacional de Hoteles de Venezuela (FENAHOVEN)</strong> es la organización gremial matriz que agrupa, representa y potencia a las cámaras y establecimientos de hospedaje en todo el territorio nacional. Actuamos como el puente estratégico fundamental entre el sector privado, los organismos públicos y las corrientes turísticas globales.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-white/40 backdrop-blur-md border border-white/60 shadow-inner flex items-center justify-center text-[#2F92B9]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs uppercase tracking-wider font-bold text-slate-900">Representación</h4>
                    <p className="text-[11px] text-slate-500 font-light leading-relaxed">Defensa activa de los intereses de la red hotelera nacional ante entes reguladores.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-white/40 backdrop-blur-md border border-white/60 shadow-inner flex items-center justify-center text-[#2F92B9]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2zm12 0v-11a2 2 0 00-2-2h-2a2 2 0 00-2 2v11a2 2 0 002 2h2a2 2 0 002-2z" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs uppercase tracking-wider font-bold text-slate-900">Desarrollo</h4>
                    <p className="text-[11px] text-slate-500 font-light leading-relaxed">Capacitación técnica continua y optimización de datos reales de la industria.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-white/40 backdrop-blur-md border border-white/60 shadow-inner flex items-center justify-center text-[#2F92B9]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs uppercase tracking-wider font-bold text-slate-900">Proyección</h4>
                    <p className="text-[11px] text-slate-500 font-light leading-relaxed">Impulso estratégico del destino Venezuela bajo estándares globales.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SECCIÓN INFOGRAFÍA: TIMELINE INTERACTIVO */}
      <section className="py-32 bg-[#FFFFFF] border-b border-slate-100 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-24">
            <span className="text-xs font-bold text-[#2F92B9] uppercase tracking-[0.3em] block mb-3">Trayectoria Histórica</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 uppercase">Nuestra Línea del Tiempo</h2>
            <p className="text-slate-500 mt-3 font-light text-sm leading-relaxed">
              Trabajamos de la mano con las principales organizaciones turísticas y comerciales del país, construyendo un legado de hospitalidad y desarrollo desde nuestros orígenes.
            </p>
            <div className="w-16 h-1 bg-[#2F92B9] mx-auto mt-5 rounded-full" />
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-slate-300 rounded-full z-20" />
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-[1px] h-full bg-[#D1D5DB] z-0" />
            <div className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-slate-300 rounded-full z-20" />

            <div className="space-y-16 md:space-y-24 py-8 relative z-10">
              {timelineEvents.map((event, index) => {
                const isLeftYear = index % 2 === 0;
                const isItemActive = activeHito === index;
                const isNextHitoToClick = activeHito === null ? index === 0 : index === activeHito + 1;

                return (
                  <div 
                    key={index} 
                    className="flex flex-col md:grid md:grid-cols-11 items-center w-full relative cursor-pointer"
                    onClick={() => setActiveHito(index)}
                  >
                    
                    <div className="w-full md:col-span-5 flex justify-center md:justify-end md:px-8 z-10">
                      {isLeftYear ? (
                        <div className="text-4xl lg:text-5xl font-black tracking-tight select-none pr-4 text-[#2F92B9]">
                          {event.year}
                        </div>
                      ) : (
                        <div className={`w-full max-w-sm bg-white rounded-2xl p-6 md:p-8 border transition-all duration-500 ease-out transform ${
                          isItemActive 
                            ? 'scale-105 border-[#2F92B9]/40 shadow-xl bg-slate-50/10' 
                            : 'scale-100 border-slate-100 shadow-sm hover:scale-[1.02]'
                        }`}>
                          <div className="block md:hidden text-2xl font-black text-[#2F92B9] mb-2">{event.year}</div>
                          <h3 className={`text-lg font-bold mb-3 transition-colors duration-300 ${isItemActive ? 'text-[#2F92B9]' : 'text-slate-950'}`}>{event.title}</h3>
                          <p className="text-sm text-slate-500 font-light leading-relaxed">{event.description}</p>
                        </div>
                      )}
                    </div>

                    <div className="hidden md:flex md:col-span-1 justify-center items-center z-20">
                      <div className="relative flex items-center justify-center">
                        {isNextHitoToClick && (
                          <div className="absolute w-8 h-8 rounded-full bg-[#2F92B9]/30 animate-ping z-0 pointer-events-none" />
                        )}
                        <div className={`rounded-full bg-white flex items-center justify-center shadow-sm border border-[#2F92B9] transition-all duration-300 ${
                          isItemActive ? 'w-7 h-7 scale-110' : 'w-6 h-6'
                        }`}>
                          <div className={`rounded-full bg-[#2F92B9] transition-all duration-300 ${
                            isItemActive ? 'w-3 h-3' : 'w-2.5 h-2.5'
                          }`} />
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:col-span-5 flex justify-center md:justify-start md:px-8 z-10 mt-4 md:mt-0">
                      {isLeftYear ? (
                        <div className={`w-full max-w-sm bg-white rounded-2xl p-6 md:p-8 border transition-all duration-500 ease-out transform ${
                          isItemActive 
                            ? 'scale-105 border-[#2F92B9]/40 shadow-xl bg-slate-50/10' 
                            : 'scale-100 border-slate-100 shadow-sm hover:scale-[1.02]'
                        }`}>
                          <div className="block md:hidden text-2xl font-black text-[#2F92B9] mb-2">{event.year}</div>
                          <h3 className={`text-lg font-bold mb-3 transition-colors duration-300 ${isItemActive ? 'text-[#2F92B9]' : 'text-slate-950'}`}>{event.title}</h3>
                          <p className="text-sm text-slate-500 font-light leading-relaxed">{event.description}</p>
                        </div>
                      ) : (
                        <div className="text-4xl lg:text-5xl font-black tracking-tight select-none pl-4 text-[#2F92B9]">
                          {event.year}
                        </div>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 5. BANNER OCUPACIÓN HOTELERA */}
      <section className="pt-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div 
          className="relative rounded-3xl overflow-hidden bg-cover bg-center py-20 px-8 md:px-16 text-center shadow-xl border border-slate-100"
          style={{ 
            backgroundImage: `linear-gradient(to right, rgba(16, 23, 42, 0.85), rgba(16, 23, 42, 0.85)), url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000&auto=format&fit=crop')` 
          }}
        >
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Ocupación Hotelera Nacional
            </h3>
            <p className="text-sm md:text-base text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
              Resultados del Sistema Nacional de Estadísticas correspondientes al mes de enero.
            </p>
            <div className="pt-4">
              <a 
                href="/reporte-ocupacion.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block border border-white text-white text-xs font-bold uppercase tracking-[0.2em] px-8 py-3.5 rounded-md hover:bg-white hover:text-[#10172A] transition-all duration-300"
              >
                descargar el reporte
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECCIÓN INTERACTIVA: DATOS DE LA INDUSTRIA */}
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

      {/* 7. RED DE GREMIOS Y ALIANZAS */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-bold text-[#0062B2] uppercase tracking-[0.3em] block mb-3">Ecosistema Institutional</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#10172A] uppercase">Red de Gremios y Alianzas</h2>
            <p className="text-slate-500 mt-2 font-light text-sm">Trabajamos de la mano con las principales organizaciones turísticas y comerciales del país.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-12 md:gap-8 items-center justify-center">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-2 group transition-all duration-300"
              >
                <img 
                  src={partner.src} 
                  alt={partner.alt} 
                  title={partner.alt}
                  className={`${partner.className} object-contain transform group-hover:scale-105 transition-all duration-300 select-none`} 
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. FOOTER INSTITUCIONAL: COLOR DEL BACKGROUND CAMBIADO A #2F92B9 */}
      <footer className="bg-[#2F92B9] text-white pt-20 pb-10">
        
        {/* Contenedor Maestro */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/20">
          
          {/* Bloque Izquierdo: Logo PNG Limpio y Protagonista */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center justify-start">
              <img 
                src="/logowebfenahoven.png" 
                alt="FENAHOVEN" 
                className="h-32 md:h-36 w-auto object-contain select-none filter brightness-0 invert"
              />
            </div>
            <p className="text-xs text-slate-100 font-light leading-relaxed max-w-xs">
              Federación Nacional de Hoteles de Venezuela. Potenciando la hospitalidad, infraestructura e inversión turística estratégica desde 1958.
            </p>
          </div>

          {/* Bloque Centro-Izquierda: Navegación */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white">Secciones</h4>
            <ul className="space-y-2.5 text-xs text-slate-100 font-light">
              <li className="hover:text-slate-200 cursor-pointer transition-colors">Quiénes somos?</li>
              <li className="hover:text-slate-200 cursor-pointer transition-colors">Directorio Nacional</li>
              <li className="hover:text-slate-200 cursor-pointer transition-colors">Noticias del Sector</li>
              <li className="hover:text-slate-200 cursor-pointer transition-colors">Eventos & Congresos</li>
              <li className="hover:text-slate-200 cursor-pointer transition-colors">Capacitación Técnica</li>
            </ul>
          </div>

          {/* Bloque Centro-Derecha: Institucional */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white">Afiliados</h4>
            <ul className="space-y-2.5 text-xs text-slate-100 font-light">
              <li className="hover:text-slate-200 cursor-pointer transition-colors">Cámaras Regionales</li>
              <li className="hover:text-slate-200 cursor-pointer transition-colors">Inscripción Gremial</li>
              <li className="hover:text-slate-200 cursor-pointer transition-colors">Estatutos Oficiales</li>
              <li className="hover:text-slate-200 cursor-pointer transition-colors">Bolsa de Trabajo</li>
            </ul>
          </div>

          {/* Bloque Derecho: Ubicación e Información de Registro */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white">Sede Central</h4>
            <p className="text-xs text-slate-100 font-light leading-relaxed">
              Av. Principal de Las Mercedes, Edificio Centro Las Mercedes, Piso 4, Oficina 41. Caracas, Distrito Capital, Venezuela.
            </p>
            <div className="pt-2 text-xs text-slate-200 font-mono">
              <span className="block">Rif: J-00248834-0</span>
            </div>
          </div>

        </div>

        {/* Cierre de Derechos y Firma Onshift Vinculada */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-200 font-light gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} FENAHOVEN. Todos los derechos reservados.</span>
            <span className="hidden sm:inline text-white/30">|</span>
            <a 
              href="https://onshift.com.ve" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-medium text-slate-200 hover:text-white transition-colors flex items-center gap-1"
            >
              Hecho por <span className="font-bold tracking-tight text-white hover:underline">onshift</span>
            </a>
          </div>
          <div className="flex gap-6 text-slate-200">
            <span className="hover:text-white cursor-pointer transition-colors">Términos de Uso</span>
            <span className="hover:text-white cursor-pointer transition-colors">Políticas de Privacidad</span>
          </div>
        </div>

      </footer>

    </div>
  );
}