import React, { useState } from 'react';
import { Check, CheckSquare, Square, AlertCircle, ArrowDown } from 'lucide-react';
import { SELF_ASSESSMENT_ITEMS } from '../data/copyData';

export const SelfAssessmentSection: React.FC = () => {
  // Let user click/toggle the symptoms; pre-selecting 2 or 3 emphasizes resonance
  const [selectedIds, setSelectedIds] = useState<string[]>(['1', '2', '4']);

  const toggleItem = (id: string) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const count = selectedIds.length;
  const isTarget = count >= 3;

  return (
    <section id="self-assessment-section" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F4EF] border-b border-stone-300/70 text-stone-900">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-widest text-emerald-800 uppercase bg-emerald-100/80 px-3 py-1 rounded-full">
            Autodiagnóstico rápido
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-950 mt-3 tracking-tight">
            ¿ESTO ES PARA MÍ?
          </h2>
          <p className="text-sm text-stone-600 mt-2">
            Toca las casillas que describen lo que sientes en tu día a día:
          </p>
        </div>

        {/* 4 Interactive Check Items */}
        <div className="space-y-3 mb-8">
          {SELF_ASSESSMENT_ITEMS.map(item => {
            const isChecked = selectedIds.includes(item.id);
            return (
              <button
                key={item.id}
                id={`self-check-item-${item.id}`}
                onClick={() => toggleItem(item.id)}
                className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all flex items-start gap-4 cursor-pointer select-none ${
                  isChecked
                    ? 'bg-white border-stone-800 shadow-sm'
                    : 'bg-stone-100/80 border-stone-300/80 hover:bg-white text-stone-600'
                }`}
              >
                <div className={`mt-0.5 w-6 h-6 rounded flex items-center justify-center shrink-0 transition-colors ${
                  isChecked ? 'bg-stone-900 text-white' : 'border border-stone-400 bg-white'
                }`}>
                  {isChecked && <Check className="w-4 h-4 stroke-[3]" />}
                </div>
                <span className={`text-base sm:text-lg leading-snug ${
                  isChecked ? 'font-semibold text-stone-950' : 'font-normal text-stone-700'
                }`}>
                  {item.text}
                </span>
              </button>
            );
          })}
        </div>

        {/* Status Callout */}
        <div className={`p-5 sm:p-6 rounded-xl border text-center transition-all ${
          isTarget
            ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
            : 'bg-stone-100 border-stone-300 text-stone-800'
        }`}>
          <div className="flex items-center justify-center gap-2 mb-1.5 font-bold text-base sm:text-lg">
            <AlertCircle className={`w-5 h-5 ${isTarget ? 'text-emerald-700' : 'text-stone-500'}`} />
            <span>
              {count} de 4 identificados
            </span>
          </div>

          <p className="text-base sm:text-lg font-bold text-stone-900 mb-1">
            Si respondiste que sí a 3 o más, sigue leyendo.
          </p>
          <p className="text-xs sm:text-sm text-stone-600 font-normal">
            {isTarget
              ? 'Tu mente no necesita más información ni teoría, necesita un filtro urgente de prioridades.'
              : 'Selecciona las opciones que experimentas con frecuencia para validar si este método encaja contigo.'}
          </p>
          
          <div className="mt-4 flex justify-center">
            <a
              href="#problem-section"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-700 hover:text-stone-950 transition-colors"
            >
              <span>Descubre el origen de esta saturación</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
