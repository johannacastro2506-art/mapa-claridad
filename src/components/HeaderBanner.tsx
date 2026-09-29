import React, { useState, useEffect } from 'react';
import { ShieldCheck, Zap } from 'lucide-react';
import { HOTMART_CHECKOUT_URL } from '../data/copyData';

interface HeaderBannerProps {
  onCtaClick?: () => void;
}

export const HeaderBanner: React.FC<HeaderBannerProps> = ({ onCtaClick }) => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 52 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 15, seconds: 0 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <aside aria-label="Aviso de oferta especial" id="top-urgency-banner" className="w-full bg-stone-900 text-stone-100 py-2.5 px-4 sticky top-0 z-40 border-b border-stone-800 text-xs sm:text-sm">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 tracking-wider uppercase">
            Acceso Inmediato
          </span>
          <span className="font-medium text-stone-300 hidden sm:inline">
            Descuento especial activo: De <span className="line-through text-stone-500">$97</span> por <span className="text-white font-bold">$17</span>
          </span>
          <span className="font-medium text-stone-300 sm:hidden">
            De <span className="line-through text-stone-500">$97</span> por <span className="text-white font-bold">$17</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-mono text-emerald-400 bg-stone-800/80 px-2 py-0.5 rounded text-xs border border-stone-700/50">
            <Zap className="w-3 h-3 text-emerald-400 fill-emerald-400" />
            <span className="text-stone-400 text-[11px] font-sans font-medium">Caduca en:</span>
            <span className="font-semibold text-white tracking-wider">{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}</span>
          </div>
          <a
            id="banner-quick-cta"
            href={HOTMART_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1 font-semibold text-emerald-400 hover:text-emerald-300 underline underline-offset-2 transition-colors cursor-pointer"
          >
            Obtener acceso ahora
          </a>
        </div>
      </div>
    </aside>
  );
};
