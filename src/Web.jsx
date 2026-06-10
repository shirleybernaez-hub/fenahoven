import React from 'react';

export default function Web() {
  const navLinks = [
    "Quiénes Somos",
    "Federación",
    "Dashboard Nacional",
    "Radar Hotelero",
    "Capacitación",
    "Eventos",
    "Inversión Hotelera",
    "Sala de Prensa",
    "Afíliate",
    "Contacto"
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900">
      
      {/* NAVBAR INSTITUCIONAL */}
      <nav className="border-b border-slate-100 bg-white sticky top-0 z-50 px-6 py-4 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          
          {/* Logo Principal */}
          <div className="text-xl font-bold tracking-tighter text-[#0062B2] uppercase select-none">
            FENAHOVEN
          </div>

          {/* Menú de Enlaces */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 items-center text-xs md:text-sm font-medium text-slate-600">
            {navLinks.map((link, index) => (
              <span 
                key={index} 
                className="cursor-pointer hover:text-[#0062B2] transition-colors whitespace-nowrap py-1"
              >
                {link}
              </span>
            ))}
          </div>

        </div>
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

    </div>
  );
}