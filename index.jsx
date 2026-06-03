import React, { useState } from 'react';

export default function FenahovenRebranding() {
  // Estado para controlar la interactividad del "Antes y Después"
  const [currentView, setCurrentView] = useState('antes'); // 'antes' | 'despues_azul' | 'despues_contraste'

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1E293B] font-sans antialiased">
      
      {/* HEADER INSTITUCIONAL */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center shadow-sm">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-serif tracking-widest text-[#0062B2] font-bold">FENAHOVEN</span>
        </div>
        <span className="bg-[#E5C158]/10 text-[#0062B2] border border-[#E5C158]/30 text-xs font-semibold px-4 py-1.5 rounded-full">
          Propuesta de Evolución de Marca 2026
        </span>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16 space-y-24">
        
        {/* INTRODUCCIÓN / JUSTIFICACIÓN */}
        <section className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Hacia un lenguaje visual <br />
            <span className="text-[#0062B2]">Atemporal y Elevado</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Una marca con la trayectoria de FENAHOVEN merece una identidad que no dependa de modas pasajeras. Simplificamos la estructura tipográfica para ganar sofisticación, adaptabilidad digital y el peso institucional que exige el sector hotelero global en 2026.
          </p>
        </section>

        {/* CONTENEDOR INTERACTIVO PRINCIPAL */}
        <section className="bg-white rounded-3xl p-6 md:p-12 shadow-xl border border-slate-100 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-slate-800">Laboratorio de Identidad</h2>
            <p className="text-sm text-slate-500">Interactúa con los controles para visualizar el salto evolutivo de la marca</p>
          </div>

          {/* Área de Visualización Dinámica */}
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="w-full max-w-2xl h-96 flex items-center justify-center rounded-2xl border border-slate-200 shadow-inner relative overflow-hidden transition-all duration-500 bg-slate-50">
              
              {/* VISTA 1: LOGO HISTÓRICO */}
              {currentView === 'antes' && (
                <div className="flex flex-col items-center space-y-4 p-6 animate-fadeIn text-center">
                  <img 
                    src="logofenahoven_2.jpg" 
                    alt="Logo Anterior Fenahoven" 
                    className="h-56 object-contain drop-shadow-md rounded-lg"
                  />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Identidad Histórica</span>
                </div>
              )}

              {/* VISTA 2: PROPUESTA NUEVA AZUL CORPORATIVO */}
              {currentView === 'despues_azul' && (
                <div className="w-full h-full p-6 animate-scaleUp flex flex-col items-center justify-center bg-[#0062B2]">
                  <img 
                    src="logofenahoven_nuevo.jpg" 
                    alt="Nueva Propuesta Corporativa" 
                    className="max-h-48 object-contain transition-transform duration-300 hover:scale-105"
                  />
                  <span className="text-xs font-bold uppercase tracking-widest text-white/60 absolute bottom-4">Versión Principal en Azul</span>
                </div>
              )}

              {/* VISTA 3: ALTO CONTRASTE (BLANCO Y NEGRO) */}
              {currentView === 'despues_contraste' && (
                <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 animate-scaleUp">
                  {/* Bloque Blanco */}
                  <div className="bg-white p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-slate-200">
                    <img src="logofenahoven_negro.png" alt="Logo Negro" className="max-h-20 object-contain" />
                    <span className="text-[10px] uppercase font-bold text-slate-400 mt-4 tracking-wider">Aplicación Positiva</span>
                  </div>
                  {/* Bloque Negro */}
                  <div className="bg-[#1E293B] p-8 flex flex-col items-center justify-center">
                    <img src="logofenahovenblanco.png" alt="Logo Blanco" className="max-h-20 object-contain" />
                    <span className="text-[10px] uppercase font-bold text-slate-400 mt-4 tracking-wider">Aplicación Negativa</span>
                  </div>
                </div>
              )}

            </div>

            {/* BOTONES NAVEGADORES */}
            <div className="flex flex-wrap justify-center gap-3 p-1 bg-slate-100 rounded-2xl border border-slate-200">
              <button
                onClick={() => setCurrentView('antes')}
                className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-200 ${currentView === 'antes' ? 'bg-white text-red-500 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              >
                1. Estado Actual
              </button>
              <button
                onClick={() => setCurrentView('despues_azul')}
                className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-200 ${currentView === 'despues_azul' ? 'bg-[#0062B2] text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
              >
                2. Propuesta Corporativa
              </button>
              <button
                onClick={() => setCurrentView('despues_contraste')}
                className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-200 ${currentView === 'despues_contraste' ? 'bg-[#1E293B] text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
              >
                3. Versatilidad de Fondos
              </button>
            </div>
          </div>
        </section>

        {/* ESTRATEGIA DE COMPORTAMIENTO DIGITAL */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold tracking-tight text-slate-900">
              Por qué la tipografía pura es la mejor decisión
            </h3>
            <p className="text-slate-600 leading-relaxed">
              El diseño original contenía demasiados micro-detalles geométricos y cartográficos. Al independizar la marca del mapa y las formas circulares, logramos que el nombre respire por sí mismo, evocando marcas hoteleras de alto nivel internacional.
            </p>
            <blockquote className="border-l-4 border-[#E5C158] bg-[#E5C158]/5 p-4 rounded-r-xl text-slate-700 italic text-sm">
              "El lujo no grita, el lujo se presenta con sutileza."
            </blockquote>
          </div>

          {/* MOCKUP SIMULADO DE PERFIL INSTAGRAM */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl space-y-6">
            <h4 className="font-bold text-slate-800 text-lg">Impacto en Entornos Digitales</h4>
            
            {/* Cabecera Instagram */}
            <div className="flex items-center space-x-4 border-b border-slate-100 pb-4">
              <div className="w-16 h-16 rounded-full bg-[#0062B2] flex items-center justify-center p-2 ring-4 ring-[#E5C158]/40 shadow-md">
                <span className="text-white font-serif font-bold text-xl">F</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <p className="font-bold text-sm">fenahoven</p>
                  <span className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-[8px] text-white">✓</span>
                </div>
                <p className="text-xs text-slate-500">Federación Nacional de Hoteles de Venezuela</p>
              </div>
            </div>

            {/* Grid de Contenido */}
            <div className="grid grid-cols-3 gap-2">
              <div className="aspect-square bg-[#0062B2] rounded-lg flex items-center justify-center p-2">
                <img src="logofenahovenblanco.png" alt="Feed 1" className="w-full object-contain opacity-80" />
              </div>
              <div className="aspect-square bg-slate-900 rounded-lg flex items-center justify-center p-2 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
                <span className="text-[10px] text-[#E5C158] z-10 font-bold tracking-widest uppercase">Lujo</span>
              </div>
              <div className="aspect-square bg-slate-100 rounded-lg flex items-center justify-center p-2">
                <img src="logofenahoven_negro.png" alt="Feed 3" className="w-full object-contain opacity-80" />
              </div>
            </div>
            
            <p className="text-xs text-slate-400 text-center italic">
              Ejemplo de rendimiento limpio para avatares de redes y contenidos con alto aire visual.
            </p>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-500 py-8 text-center text-xs mt-24 border-t border-slate-800">
        Desarrollado por <span className="text-white font-medium">ONSHIFT</span> &copy; 2026
      </footer>
    </div>
  );
}