import React from 'react';
import { Clock, AlertTriangle, ArrowRight } from 'lucide-react';
import { HOTMART_CHECKOUT_URL } from '../data/copyData';

interface UrgencySectionProps {
  onCtaClick?: () => void;
}

export const UrgencySection: React.FC<UrgencySectionProps> = ({ onCtaClick }) => {
  return (
    <section id="urgency-section" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#18181B] text-white border-b border-stone-800 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-bold tracking-widest uppercase mb-6">
          <Clock className="w-3.5 h-3.5" />
          <span>Llamado de realidad</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-8">
          EL TIEMPO NO TE VA A ESPERAR
        </h2>

        <div className="bg-stone-900/90 border border-stone-800 p-6 sm:p-8 rounded-2xl mb-8 text-left space-y-5">
          <p className="text-lg sm:text-xl text-stone-200 font-medium leading-relaxed">
            Los años no se detienen mientras tú decides qué hacer. Cada mes que pasas dudando es un mes que le robas a tu futuro.
          </p>
          <div className="h-px bg-stone-800 w-full" />
          <p className="text-lg sm:text-xl text-amber-200 font-semibold leading-relaxed">
            El costo de seguir igual es demasiado alto. Elige actuar ahora o acepta que el próximo año estarás en el mismo lugar.
          </p>
        </div>

        <a
          id="urgency-cta"
          href={HOTMART_CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-bold text-stone-950 bg-white hover:bg-stone-100 active:scale-[0.99] rounded-xl shadow-lg transition-all cursor-pointer group"
        >
          <span>ELEGIR MI DIRECCIÓN POR $17</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};
