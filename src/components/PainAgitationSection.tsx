import React from 'react';
import { EyeOff, Flame, Compass, BrainCircuit } from 'lucide-react';

export const PainAgitationSection: React.FC = () => {
  return (
    <section id="problem-section" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-stone-950 text-stone-100 border-b border-stone-800 relative overflow-hidden">
      {/* Visual background subtle grid / noise */}
      <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-amber-400 uppercase bg-amber-950/60 border border-amber-800/60 px-3 py-1 rounded-full">
            La verdadera raíz del problema
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-4 tracking-tight leading-tight">
            EL PESO DE SENTIR QUE TE QUEDASTE ATRÁS
          </h2>
        </div>

        {/* Narrative flow cards */}
        <div className="space-y-6">
          {/* Paragraph 1 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-stone-900/90 border border-stone-800 flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 shrink-0 mt-1">
              <EyeOff className="w-5 h-5" />
            </div>
            <div>
              <p className="text-base sm:text-lg text-stone-200 font-normal leading-relaxed">
                Ves los días pasar y sientes que estás desperdiciando tu tiempo. Ese nudo en el pecho no es falta de ganas, es <strong className="text-white font-bold underline decoration-amber-500/50 underline-offset-4">exceso de ruido</strong>.
              </p>
            </div>
          </div>

          {/* Paragraph 2 - Niebla del Estancamiento */}
          <div className="p-6 sm:p-7 rounded-2xl bg-stone-900/90 border border-stone-800 flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400 shrink-0 mt-1">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-wider text-rose-300 uppercase mb-1">
                La trampa oculta
              </h3>
              <p className="text-base sm:text-lg text-stone-200 font-normal leading-relaxed">
                El problema es la <span className="text-white font-bold">Niebla del Estancamiento</span>. Tu cerebro está tan saturado de comparaciones que ya no sabe distinguir qué es importante para ti.
              </p>
            </div>
          </div>

          {/* Paragraph 3 - The Breakthrough insight */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-900/60 border border-emerald-900/40 flex items-start gap-4 shadow-lg">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0 mt-1">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-wider text-emerald-400 uppercase mb-1">
                Por qué fallaban los métodos anteriores
              </h3>
              <p className="text-base sm:text-lg text-stone-200 font-normal leading-relaxed">
                Ya intentaste agendas, videos motivadores y promesas de lunes. Nada funcionó porque estabas buscando motivación cuando <strong className="text-emerald-300 font-bold">lo que te falta es un mapa real</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
