import React, { useState } from 'react';
import { FAQS, HOTMART_CHECKOUT_URL } from '../data/copyData';
import { ChevronDown, ArrowRight, HelpCircle } from 'lucide-react';

interface FaqSectionProps {
  onCtaClick?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onCtaClick }) => {
  // First item open by default for immediate preview
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);

  const toggleFaq = (id: string) => {
    setOpenIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq-section" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFAF8] text-stone-900 border-b border-stone-200">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-stone-500 uppercase bg-stone-150 px-3 py-1 rounded-full border border-stone-200">
            Claridad total antes de empezar
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-950 mt-4 tracking-tight">
            PREGUNTAS FRECUENTES
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Respuestas directas para que tomes tu decisión con total tranquilidad.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 mb-12">
          {FAQS.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="rounded-xl border border-stone-200 bg-white overflow-hidden shadow-2xs transition-all"
              >
                <button
                  id={`faq-btn-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/80 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-stone-950 pr-2">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-stone-100 text-stone-700 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-stone-900 text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-stone-600 font-normal leading-relaxed border-t border-stone-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA as required by copy structure */}
        <div className="text-center bg-stone-100 p-6 sm:p-8 rounded-2xl border border-stone-200">
          <p className="text-sm font-semibold text-stone-700 mb-4">
            ¿Listo para despejar el ruido y avanzar con un plan a tu medida?
          </p>
          <a
            id="faq-cta"
            href={HOTMART_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-w-[300px] inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-bold text-white bg-emerald-700 hover:bg-emerald-800 active:scale-[0.99] rounded-xl shadow-lg transition-all cursor-pointer group"
          >
            <span>QUIERO RECUPERAR MI DIRECCIÓN</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
