import React from 'react';
import { TESTIMONIALS } from '../data/copyData';
import { Star, CheckCircle2, MessageSquareQuote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials-section" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#F4F3ED] text-stone-900 border-b border-stone-300/80">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-widest text-stone-600 uppercase bg-stone-200/80 px-3 py-1 rounded-full">
            Resultados reales
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-950 mt-4 tracking-tight">
            LO QUE ESTÁN DICIENDO
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Personas que detuvieron la parálisis mental y recuperaron su dirección.
          </p>
        </div>

        {/* 3 Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-base sm:text-lg text-stone-800 font-medium italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-stone-950 text-base">
                    {t.author}, {t.age} años
                  </h3>
                  {t.location && (
                    <p className="text-xs text-stone-600 font-normal">
                      {t.location}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-200/60">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verificado</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
