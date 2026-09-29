import React from 'react';
import { ACCESS_COMPONENTS, HOTMART_CHECKOUT_URL } from '../data/copyData';
import { Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface PricingSummarySectionProps {
  onCtaClick?: () => void;
}

export const PricingSummarySection: React.FC<PricingSummarySectionProps> = ({ onCtaClick }) => {
  return (
    <section id="pricing-summary-section" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-stone-500 uppercase bg-stone-100 px-3 py-1 rounded-full border border-stone-200">
            Desglose completo de valor
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-950 mt-4 tracking-tight">
            RESUMEN DE TU ACCESO
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Todo lo que recibes de inmediato al desbloquear tu acceso hoy.
          </p>
        </div>

        {/* Pricing Stack Table */}
        <div className="rounded-2xl border-2 border-stone-300 overflow-hidden shadow-md bg-stone-50/50 mb-8">
          {/* Header Row */}
          <div className="bg-stone-900 text-white px-6 py-4 flex items-center justify-between font-bold text-sm sm:text-base tracking-wider uppercase">
            <span>Componente</span>
            <span>Valor Original</span>
          </div>

          {/* Component Rows */}
          <div className="divide-y divide-stone-200 bg-white">
            {ACCESS_COMPONENTS.map((item, index) => (
              <div
                key={index}
                className="px-6 py-4 flex items-center justify-between text-sm sm:text-base hover:bg-stone-50/70 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-bold text-stone-900">{item.name}</span>
                    {item.description && (
                      <p className="text-xs text-stone-500 hidden sm:block mt-0.5">{item.description}</p>
                    )}
                  </div>
                </div>
                <span className="font-bold text-red-600 line-through decoration-red-600 decoration-2 shrink-0 ml-4">
                  $ {item.originalPrice}
                </span>
              </div>
            ))}
          </div>

          {/* Summary / Totals Footer */}
          <div className="bg-stone-100/90 p-6 sm:p-8 border-t-2 border-stone-300">
            <div className="flex items-center justify-between text-base sm:text-lg font-bold text-stone-700 mb-3">
              <span>Valor Total</span>
              <span className="line-through text-red-600 decoration-red-600 decoration-2 font-extrabold text-lg">$ 97</span>
            </div>

            <div className="flex items-center justify-between text-base sm:text-lg font-extrabold text-emerald-800 mb-4 bg-emerald-100/80 px-4 py-2 rounded-xl">
              <span>Hoy ahorras</span>
              <span>$ 80</span>
            </div>

            <div className="pt-4 border-t border-stone-300/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-stone-500 block">
                  Precio de Hoy:
                </span>
                <span className="text-4xl sm:text-5xl font-black text-stone-950 tracking-tight">
                  $ 17
                </span>
              </div>

              <a
                id="pricing-stack-cta"
                href={HOTMART_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base sm:text-lg font-bold text-white bg-emerald-700 hover:bg-emerald-800 active:scale-[0.99] rounded-xl shadow-lg transition-all cursor-pointer group"
              >
                <span>DESBLOQUEAR MI ACCESO</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Security badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-stone-500 font-medium">
          <span className="inline-flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-emerald-600" />
            Activación en tu bandeja de entrada en menos de 60 segundos
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Garantía total de devolución 15 días
          </span>
        </div>
      </div>
    </section>
  );
};
