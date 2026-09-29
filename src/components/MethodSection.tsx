import React from 'react';
import { METHOD_STEPS } from '../data/copyData';
import { ArrowRight, Check } from 'lucide-react';

export const MethodSection: React.FC = () => {
  return (
    <section id="method-section" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F4EF] text-stone-900 border-b border-stone-300/80">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-widest text-stone-600 uppercase bg-stone-200/80 px-3 py-1 rounded-full">
            Estructura comprobada
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-950 mt-4 tracking-tight">
            CÓMO FUNCIONA EL MÉTODO
          </h2>
          <p className="text-base sm:text-lg text-stone-700 font-medium mt-2">
            3 pasos simples para salir del bloqueo y llegar a la claridad
          </p>
        </div>

        {/* 3 Step sequential layout */}
        <div className="space-y-4">
          {METHOD_STEPS.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start sm:items-center gap-4">
                <span className="inline-flex items-center px-3 py-1.5 rounded-lg font-extrabold text-sm tracking-wider bg-stone-900 text-white shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-stone-950 tracking-tight">
                    {item.name}
                  </h3>
                  <p className="text-sm sm:text-base text-stone-700 font-normal mt-0.5">
                    — {item.summary}
                  </p>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-full shrink-0 border border-emerald-200/60">
                <Check className="w-3.5 h-3.5" />
                <span>{item.tagline}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
