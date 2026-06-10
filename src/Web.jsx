import React, { useState, useEffect } from 'react';

// Componente para animar los números
function Counter({ value, duration = 1500 }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (start === end) return;
    const step = Math.max(Math.floor(duration / end), 1);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [value, duration]);
  return <span>{count}</span>;
}

export default function Web() {
  const [activeHito, setActiveHito] = useState(0);

  const partners = [
    { src: '/conseturismo.png', alt: 'Conseturismo', className: 'max-h-12 w-auto' },
    { src: '/avavit.jpg', alt: 'AVAVIT', className: 'max-h-12 w-auto' },
    { src: '/avencintel.jpg', alt: 'AVENCINTEL', className: 'max-h-20 md:max-h-24 w-auto scale-110' },
    { src: '/asociaciondelienas.png', alt: 'ALAV', className: 'max-h-12 w-auto' },
    { src: '/camyticom.png', alt: 'Camyticom', className: 'max-h-12 w-auto' },
    { src: '/cvtt.jpg', alt: 'CVTT', className: 'max-h-16 md:max-h-20 w-auto scale-110' },
    { src: '/cavespa.png', alt: 'CAVESPA', className: 'max-h-14 w-auto' }
  ];

  const timelineEvents = [
    { year: '1958', title: 'Fundación de ANAHOVEN', description: 'Nace la Asociación Nacional de Hoteles de Venezuela, sentando las bases de la unión gremial.' },
    { year: '1993', title: 'Transformación en FENAHOVEN', description: 'Evolución estructural hacia Federación Nacional de Hoteles de Venezuela.' },
    { year: '2000-2020', title: 'Expansión Gremial', description: 'Dos décadas de consolidación institucional y profesionalización.' },
    { year: '2021-2026', title: 'Modernización', description: 'Enfoque en digitalización y reactivación estratégica.' },
    { year: 'Futuro', title: 'Turismo Sostenible', description: 'Hacia un modelo de hotelería verde y global.' }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900 antialiased">
      
      {/* 1. TOP BAR */}
      <div className="bg-[#2F92B9] py-2 px-6 md:px-12 text-white text-[11px] font-medium tracking-wide relative z-30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><span className="opacity-80">✉</span> contacto@fenahoven.org.ve</span>
            <span className="flex items-center gap-2"><span className="opacity-80">📞</span> +58 (212) 993-4444</span>
          </div>
        </div>
      </div>

      {/* 2. NAVBAR */}
      <nav className="bg-white border-b border-gray-200 relative px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between min-h-[100px] py-4 md:py-0">
          <img src="/logowebfenahoven.png" alt="FENAHOVEN" className="h-36 md:h-44 w-auto object-contain select-none" />
          <div className="flex-1 flex flex-wrap gap-8 items-center justify-center text-xs md:text-[15px] font-bold text-slate-900 uppercase">
            <a href="#" className="hover:text-[#2F92B9]">Quiénes somos</a>
            <a href="#" className="hover:text-[#2F92B9]">Directorio</a>
            <a href="#" className="hover:text-[#2F92B9]">Contacto</a>
          </div>
        </div>
      </nav>

      {/* 3. HERO PARALLAX */}
      <section 
        className="relative min-h-[90vh] flex flex-col justify-center items-center px-8 bg-cover bg-center bg-no-repeat bg-fixed py-20 rounded-b-[35px] overflow-hidden shadow-md"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(16, 23, 42, 0.85), rgba(16, 23, 42, 0.50)), url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop')` }}
      >
        <div className="text-center max-w-5xl z-10 mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight mb-8">67 AÑOS <br />IMPULSANDO EL TURISMO</h1>
          <p className="text-lg text-slate-200 font-light">La voz oficial de la hotelería venezolana desde 1958.</p>
        </div>
        <div className="w-full max-w-6xl z-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[ {v:'300', t:'Hoteles'}, {v:'24', t:'Estados'}, {v:'67', t:'Años'}, {v:'12', t:'Eventos'} ].map((s,i) => (
            <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-2xl">
              <span className="block text-4xl font-black text-[#0062B2]"><Counter value={s.v}/>+</span>
              <span className="text-[10px] uppercase font-bold text-slate-400">{s.t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. LÍNEA DEL TIEMPO */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-16 text-center">Nuestra Trayectoria</h2>
          {timelineEvents.map((e, i) => (
            <div key={i} className="flex gap-8 cursor-pointer group mb-12" onClick={() => setActiveHito(i)}>
              <div className={`text-xl font-medium ${activeHito === i ? 'text-[#2F92B9]' : 'text-slate-300'}`}>{e.year}</div>
              <div className="border-l border-slate-100 pl-8 pb-4">
                <h3 className="text-lg font-bold">{e.title}</h3>
                <p className="text-slate-500 text-sm">{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. GESTIÓN INSTITUCIONAL (EDITORIAL) */}
      <section className="py-32 bg-[#FDFDFD]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="mb-20">
            <span className="text-[10px] font-bold text-[#2F92B9] uppercase tracking-[0.3em] block mb-4 italic">Ejes Estratégicos</span>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tighter uppercase">Gestión <span className="font-bold">Institucional</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-20">
            {[
              { n: '01', t: 'Representación Gremial', d: 'Defensa estratégica de los intereses del sector ante los poderes públicos.' },
              { n: '02', t: 'Estadísticas Sectoriales', d: 'Monitoreo riguroso de ocupación y tendencias de mercado.' },
              { n: '03', t: 'Promoción Turística', d: 'Fortalecimiento de la marca destino y estándares internacionales.' },
              { n: '04', t: 'Formación Empresarial', d: 'Capacitación constante y actualización técnica.' },
              { n: '05', t: 'Atención de Emergencias', d: 'Soporte y coordinación integral ante crisis.' },
              { n: '06', t: 'Atracción de Inversión', d: 'Puente directo para nuevos proyectos hoteleros.' }
            ].map((item, i) => (
              <div key={i} className="group border-t border-slate-100 pt-8 hover:border-[#2F92B9] transition-all">
                <div className="text-[10px] font-mono text-slate-300 mb-4">{item.n}</div>
                <h4 className="text-lg font-bold mb-3 uppercase tracking-wide">{item.t}</h4>
                <p className="text-slate-500 text-[13px] font-light leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-32 pt-20 border-t border-slate-100">
            <p className="text-2xl italic text-slate-700 leading-relaxed max-w-2xl">
              "El sector hotelero en Venezuela es un activo estratégico. Estamos trabajando en la recuperación de la conectividad y en la profesionalización de la oferta."
            </p>
            <p className="mt-8 text-xs font-bold uppercase tracking-widest">— Alberto Vieira, Presidente FENAHOVEN</p>
          </div>
        </div>
      </section>

      {/* 6. RED DE GREMIOS */}
      <section className="py-24 border-t">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 opacity-50">
          {partners.map((p, i) => <img key={i} src={p.src} alt={p.alt} className={p.className} />)}
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-[#2F92B9] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 pb-12">
          <img src="/logowebfenahoven.png" alt="FENAHOVEN" className="h-48 w-auto" />
          <div className="text-xs font-light flex flex-col items-end gap-2 text-right">
             <p>Av. Principal de Las Mercedes, Caracas, Venezuela.</p>
             <div className="flex gap-4 font-bold uppercase cursor-pointer"><span>Términos de Uso</span><span>Privacidad</span></div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12"><div className="w-full h-[1px] bg-white/20" /></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 flex justify-between text-[11px] font-light">
          <div>© 2026 FENAHOVEN. Todos los derechos reservados.</div>
          <a href="https://onshift.com.ve" className="uppercase font-bold hover:underline">Diseñado por onshift</a>
        </div>
      </footer>
    </div>
  );
}