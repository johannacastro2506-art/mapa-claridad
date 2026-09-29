import React from 'react';
import { ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { HOTMART_CHECKOUT_URL } from '../data/copyData';

interface GuaranteeSectionProps {
  onCtaClick?: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onCtaClick }) => {
  return (
    <section id="guarantee-section" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F7F4] text-stone-900 border-b border-stone-200">
      <div className="max-w-3xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border-2 border-emerald-900/20 shadow-md text-center relative overflow-hidden">
          {/* Subtle badge glow */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-emerald-100/80 text-emerald-800 flex items-center justify-center mx-auto mb-6 border border-emerald-300">
            <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>

          <span className="text-xs font-bold tracking-widest text-emerald-800 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80">
            100% libre de riesgo
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-950 mt-4 tracking-tight">
            GARANTÍA INCONDICIONAL DE 15 DÍAS
          </h2>

          <p className="text-base sm:text-xl text-stone-700 font-medium max-w-xl mx-auto mt-4 mb-8 leading-relaxed">
            Si lo pruebas y sientes que no es para ti, te devolvemos tu dinero. Sin preguntas incómodas. Sin trámites.
          </p>

          <a
            id="guarantee-cta"
            href={HOTMART_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-w-[280px] inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-bold text-white bg-emerald-700 hover:bg-emerald-800 active:scale-[0.99] rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer group"
          >
            <span>PROBAR SIN RIESGO AHORA</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="mt-6 pt-6 border-t border-stone-100 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-500 font-medium">
            <span className="inline-flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              Reembolso en 1 clic
            </span>
            <span className="inline-flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              Conserva los bonos de regalo
            </span>
            <span className="inline-flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              Soporte humano directo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
