import React, { useState } from 'react';
import { BONUSES, HOTMART_CHECKOUT_URL } from '../data/copyData';
import { BonusItem } from '../types';
import { Headphones, Sparkles, CheckSquare, ShieldAlert, Play, Pause, ArrowRight, X, Send } from 'lucide-react';

interface BonusesSectionProps {
  onCtaClick?: () => void;
}

export const BonusesSection: React.FC<BonusesSectionProps> = ({ onCtaClick }) => {
  const [activeModal, setActiveModal] = useState<BonusItem | null>(null);

  // Mini interactive state for the modal demonstrations
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [userDoubt, setUserDoubt] = useState('');
  const [suggestedAction, setSuggestedAction] = useState<string | null>(null);

  const handleOpenDemo = (bonus: BonusItem) => {
    setActiveModal(bonus);
    setAudioPlaying(false);
    setUserDoubt('');
    setSuggestedAction(null);
  };

  const handleGenerateStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userDoubt.trim()) return;
    const actions = [
      `Primer micro-paso de 2 minutos: Abre un borrador en blanco y escribe una sola frase sobre "${userDoubt}". No edites nada aún.`,
      `Acción lógica inmediata: Desglosa "${userDoubt}" en 3 tareas de 5 minutos y tacha la más fácil ahora mismo.`,
      `Regla de los 3 minutos: Ignora el resultado final de "${userDoubt}". Pon un cronómetro de 3 minutos y haz únicamente el primer movimiento físico necesario.`
    ];
    const picked = actions[Math.floor(Math.random() * actions.length)];
    setSuggestedAction(picked);
  };

  const getBonusIcon = (iconName: string) => {
    switch (iconName) {
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-emerald-700" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-600" />;
      case 'CheckSquare':
        return <CheckSquare className="w-6 h-6 text-blue-600" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-rose-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-stone-700" />;
    }
  };

  return (
    <section id="bonuses-section" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFAF8] text-stone-900 border-b border-stone-200">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-emerald-900 uppercase bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
            Incluidos 100% gratis hoy
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-950 mt-4 tracking-tight">
            BONOS
          </h2>
          <p className="text-stone-600 font-medium mt-2 max-w-xl mx-auto">
            Herramientas y recursos complementarios diseñados para acelerar tu claridad y blindar tu enfoque.
          </p>
        </div>

        {/* Visual presentation image for BONOS as requested */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-stone-200 shadow-lg bg-stone-100">
          <img
            src="/src/assets/images/bonos_pack_1789494591236.jpg"
            alt="Paquete de Bonos Exclusivos - Mapa de Claridad"
            referrerPolicy="no-referrer"
            className="w-full h-auto object-cover max-h-[420px]"
          />
        </div>

        {/* 4 Cards following the exact structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {BONUSES.map((bonus, idx) => (
            <div
              key={bonus.id}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-stone-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-stone-100 flex items-center justify-center">
                    {getBonusIcon(bonus.iconName)}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-stone-100 px-3 py-1.5 rounded-full border border-stone-200">
                    <span className="text-stone-600">Valor:</span>
                    <span className="line-through text-red-600 font-extrabold decoration-red-600 decoration-2">${bonus.originalPrice}</span>
                    <span className="text-emerald-700 font-extrabold ml-1 bg-emerald-100/90 px-1.5 py-0.5 rounded text-[11px]">Gratis</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-stone-950 mb-1">
                  {bonus.title}
                </h3>
                <p className="text-sm font-semibold text-emerald-800 mb-3">
                  {bonus.subtitle}
                </p>
                <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
                  {bonus.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-medium text-stone-600">
                  {bonus.badgeText}
                </span>
                <button
                  id={`preview-bonus-${idx}`}
                  onClick={() => handleOpenDemo(bonus)}
                  className="text-xs font-bold text-stone-900 hover:text-emerald-700 flex items-center gap-1 cursor-pointer"
                >
                  <span>Ver vista previa</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Demo Modal for curiosity satisfaction */}
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/70 p-4 backdrop-blur-xs">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative animate-in fade-in zoom-in-95 duration-150">
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
                aria-label="Cerrar ventana"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4">
                <span className="text-xs font-bold uppercase text-emerald-800 tracking-wider">
                  Bono Incluido
                </span>
                <h4 className="text-xl font-extrabold text-stone-950 mt-1">
                  {activeModal.title}
                </h4>
                <p className="text-sm text-stone-600 mt-1">
                  {activeModal.subtitle}
                </p>
              </div>

              {/* Audio Demo */}
              {activeModal.interactiveType === 'audio' && (
                <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 text-center my-4">
                  <p className="text-xs text-stone-600 mb-3">Muestra sonora: Bajar revoluciones en 3 minutos</p>
                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={() => setAudioPlaying(!audioPlaying)}
                      className="w-12 h-12 rounded-full bg-emerald-700 text-white flex items-center justify-center hover:bg-emerald-800 transition-colors cursor-pointer shadow-md"
                    >
                      {audioPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                    </button>
                    <div className="text-left">
                      <p className="text-xs font-bold text-stone-900">
                        {audioPlaying ? 'Reproduciendo respiración guiada...' : 'Pausa guiada (Simulación)'}
                      </p>
                      <p className="text-[11px] text-stone-600">Duración completa: 3 minutos y 15 segundos</p>
                    </div>
                  </div>
                  {audioPlaying && (
                    <div className="mt-3 flex items-center justify-center gap-1">
                      <span className="w-1 h-3 bg-emerald-700 animate-pulse"></span>
                      <span className="w-1 h-5 bg-emerald-700 animate-pulse delay-75"></span>
                      <span className="w-1 h-2 bg-emerald-700 animate-pulse delay-150"></span>
                      <span className="w-1 h-6 bg-emerald-700 animate-pulse delay-100"></span>
                      <span className="w-1 h-3 bg-emerald-700 animate-pulse"></span>
                    </div>
                  )}
                </div>
              )}

              {/* Next Step Generator Demo */}
              {activeModal.interactiveType === 'generator' && (
                <div className="my-4">
                  <form onSubmit={handleGenerateStep} className="space-y-3">
                    <label htmlFor="user-doubt-input" className="block text-xs font-bold text-stone-700">
                      Escribe tu duda actual:
                    </label>
                    <div className="flex gap-2">
                      <input
                        id="user-doubt-input"
                        type="text"
                        value={userDoubt}
                        onChange={e => setUserDoubt(e.target.value)}
                        placeholder="Ej: No sé si cambiar de trabajo o estudiar"
                        className="flex-1 px-3 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 bg-stone-900 text-white text-xs font-bold rounded-lg hover:bg-stone-800 transition-colors shrink-0 cursor-pointer flex items-center gap-1"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Filtrar</span>
                      </button>
                    </div>
                  </form>
                  {suggestedAction && (
                    <div className="mt-3 p-3.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 font-medium">
                      <p className="font-bold text-emerald-900 mb-1">Acción lógica sugerida:</p>
                      <p>{suggestedAction}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Checklist & Crisis explanation */}
              {(activeModal.interactiveType === 'checklist' || activeModal.interactiveType === 'crisis') && (
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 my-4 text-xs sm:text-sm text-stone-700 space-y-2">
                  <p className="font-medium text-stone-900">
                    Recibirás acceso instantáneo a este recurso en tu portal de usuario junto con tu Mapa de Claridad al completar tu acceso hoy por $17.
                  </p>
                  <ul className="list-disc pl-4 space-y-1 text-stone-600">
                    <li>Optimizado para consulta rápida en celular</li>
                    <li>Sin descargas pesadas ni registros extra</li>
                  </ul>
                </div>
              )}

              <a
                href={HOTMART_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setActiveModal(null)}
                className="w-full mt-3 py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm rounded-xl transition-colors cursor-pointer inline-flex items-center justify-center text-center"
              >
                Acceder a todos los bonos por $17
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
