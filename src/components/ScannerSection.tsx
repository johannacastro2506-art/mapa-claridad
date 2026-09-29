import React from 'react';
import { CheckCircle, Filter, FileText, Zap } from 'lucide-react';

export const ScannerSection: React.FC = () => {
  return (
    <section id="scanner-section" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-widest text-stone-500 uppercase bg-stone-100 px-3 py-1 rounded-full border border-stone-200">
            Tecnología interactiva
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-950 mt-4 tracking-tight">
            Cómo Funciona: Escáner de Prioridades
          </h2>
          <p className="text-base sm:text-lg text-emerald-700 font-bold mt-2">
            Sin teoría. Sin videos largos. Solo acción.
          </p>
        </div>

        {/* 3 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-stone-50 border border-stone-200/90 shadow-xs flex flex-col justify-between hover:border-stone-400 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-stone-900 text-white flex items-center justify-center font-extrabold text-lg mb-5 shadow-sm">
                1
              </div>
              <h3 className="text-base sm:text-lg font-bold text-stone-950 mb-3 leading-snug">
                Respondes 12 preguntas clave sobre tu situación actual.
              </h3>
            </div>
            <div className="mt-4 pt-4 border-t border-stone-200/60 flex items-center gap-2 text-xs text-stone-500 font-medium">
              <Zap className="w-4 h-4 text-emerald-600" />
              <span>Tiempo estimado: 3 minutos</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-stone-50 border border-stone-200/90 shadow-xs flex flex-col justify-between hover:border-stone-400 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-extrabold text-lg mb-5 shadow-sm">
                2
              </div>
              <h3 className="text-base sm:text-lg font-bold text-stone-950 mb-3 leading-snug">
                El sistema procesa tus bloqueos y filtra el ruido innecesario.
              </h3>
            </div>
            <div className="mt-4 pt-4 border-t border-stone-200/60 flex items-center gap-2 text-xs text-stone-500 font-medium">
              <Filter className="w-4 h-4 text-emerald-600" />
              <span>Elimina comparaciones y falsas urgencias</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-stone-50 border border-stone-200/90 shadow-xs flex flex-col justify-between hover:border-stone-400 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-stone-900 text-white flex items-center justify-center font-extrabold text-lg mb-5 shadow-sm">
                3
              </div>
              <h3 className="text-base sm:text-lg font-bold text-stone-950 mb-3 leading-snug">
                Recibes tu Mapa de Acción listo. Sin dudas. Sin parálisis.
              </h3>
            </div>
            <div className="mt-4 pt-4 border-t border-stone-200/60 flex items-center gap-2 text-xs text-stone-500 font-medium">
              <FileText className="w-4 h-4 text-emerald-600" />
              <span>1 paso claro para empezar hoy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
