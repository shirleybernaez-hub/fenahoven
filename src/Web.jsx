import React from 'react';

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

      {/* SECCIÓN: DATOS DE LA INDUSTRIA */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-bold text-[#0062B2] uppercase tracking-[0.3em] block mb-3">Inteligencia Sectorial</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1E293B] uppercase">Datos de la Industria</h2>
          <p className="text-slate-500 mt-2 font-light">Monitoreo y estadísticas clave del comportamiento hotelero en Venezuela.</p>
        </div>

        {/* Grid Principal de Datos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Ocupación Hotelera */}
          <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold block mb-4">Ocupación Hotelera</span>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold text-[#0062B2]">32%</span>
              <span className="text-xs text-emerald-600 font-medium">Promedio Nacional</span>
            </div>
            <p className="text-xs text-slate-500 mt-6 leading-relaxed">
              La ocupación base ronda el 30%, concentrándose la mayor demanda en la Región Capital (Caracas, Miranda, La Guaira) con picos estables de entre 50% y 60% impulsados por eventos corporativos y entretenimiento.
            </p>
          </div>

          {/* Card 2: Tarifas Promedio */}
          <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold block mb-4">Tarifas Promedio</span>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold text-[#1E293B]">$20 - $100</span>
              <span className="text-xs text-slate-400">USD / Noche</span>
            </div>
            <p className="text-xs text-slate-500 mt-6 leading-relaxed">
              Mercado con tarifas estables pero polarizadas según escalafón. Las opciones base e intermedias se ubican desde los $20, mientras que el segmento Premium de gran estructura oscila sólidamente entre $80 y $100 por noche.
            </p>
          </div>

          {/* Card 3: Inversión y Costos */}
          <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold block mb-4">Inversión Operativa</span>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-amber-600">Optimización</span>
            </div>
            <p className="text-xs text-slate-500 mt-8 leading-relaxed">
              El capital actual se destina principalmente a sopesar altos costos operativos de servicios públicos y actualizaciones de infraestructura para cumplir con las recategorizaciones de estrellas exigidas por el marco regulatorio nacional.
            </p>
          </div>

        </div>

        {/* Fila Inferior: Tendencias, Empleo y Temporadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          
          {/* Card 4: Empleo y Talento Humano */}
          <div className="bg-slate-50/60 border border-slate-100/80 p-8 rounded-3xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">Empleo y Sustentabilidad</span>
              <span className="px-2 py-1 bg-blue-50 text-[#0062B2] rounded text-[9px] font-bold uppercase tracking-wider">Fuerza Laboral</span>
            </div>
            <h4 className="text-lg font-bold text-[#1E293B] mb-2">Retención y Capacitación Continua</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              El sector enfoca esfuerzos en robustecer el empleo formal. Las demandas principales se centran en mandos técnicos y operativos especializados (Recepcionistas, Camareras, Lenceros y Gerencia de Alimentos y Bebidas), impulsando planes de formación interna frente a la competitividad del mercado.
            </p>
          </div>

          {/* Card 5: Tendencias y Temporadas */}
          <div className="bg-slate-50/60 border border-slate-100/80 p-8 rounded-3xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">Dinámicas de Consumo</span>
              <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-[9px] font-bold uppercase tracking-wider">Estacionalidad</span>
            </div>
            <h4 className="text-lg font-bold text-[#1E293B] mb-2">Turismo Temático y Espectáculos</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Cambio radical en las temporadas: el turismo religioso y de eventos masivos/conciertos se consolidan como los mayores dinamizadores del flujo de huéspedes. Destacan picos de ocupación total regionales por eventos de fe y una constante movilización interna hacia la Región Capital durante fines de semana festivos.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}