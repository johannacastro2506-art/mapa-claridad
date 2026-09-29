import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { HOTMART_CHECKOUT_URL } from '../data/copyData';

interface StickyBottomBarProps {
  onCtaClick?: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onCtaClick }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside aria-label="Acceso flotante de compra" id="sticky-bottom-bar" className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 shadow-2xl py-3 px-4 transition-transform duration-300">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
              Oferta Especial Directa
            </span>
            <span className="text-base font-extrabold text-stone-900">
              Mapa de Claridad + 4 Bonos
            </span>
          </div>

          <div className="flex items-baseline gap-1.5">
            <span className="text-xs text-stone-600 line-through">De $97</span>
            <span className="text-xl sm:text-2xl font-black text-stone-950">por $17</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            id="sticky-bar-cta"
            href={HOTMART_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:scale-[0.98] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>QUIERO RECUPERAR MI DIRECCIÓN</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </aside>
  );
};
