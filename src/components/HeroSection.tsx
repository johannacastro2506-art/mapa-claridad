import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Lock, Sparkles } from 'lucide-react';
import { HERO_BULLETS, HOTMART_CHECKOUT_URL } from '../data/copyData';
import claridadMockupImg from '../assets/images/claridad_mockup_1789494552962.jpg';

interface HeroSectionProps {
  onCtaClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <section id="hero-section" className="relative bg-[#FAFAF8] text-stone-900 pt-10 pb-16 md:pt-16 md:pb-24 px-4 sm:px-6 lg:px-8 border-b border-stone-200/80 overflow-hidden">
      {/* Subtle background ambient blur for polish */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-stone-200/40 via-stone-100/20 to-transparent pointer-events-none -z-10 rounded-full blur-3xl opacity-60" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Brand label / Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900 text-stone-100 mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase">
            MAPA DE CLARIDAD
          </span>
        </div>

        {/* Main H1 Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-950 tracking-tight leading-[1.12] mb-6">
          Detén la sensación de ir tarde en la vida
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-stone-700 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
          Mini-app que identifica tus bloqueos invisibles y genera tu hoja de ruta personalizada para recuperar el control en 5 minutos.
        </p>

        {/* Hero Visual Mockup */}
        <div className="relative mx-auto max-w-3xl mb-12 rounded-2xl overflow-hidden shadow-2xl border border-stone-300/80 bg-stone-100 group">
          <div className="absolute top-3 left-4 flex items-center gap-1.5 z-10">
            <div className="w-2.5 h-2.5 rounded-full bg-stone-300"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-stone-300"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-stone-300"></div>
          </div>
          <div className="absolute top-2.5 right-4 z-10 hidden sm:flex items-center gap-1.5 text-[11px] font-semibold text-stone-600 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-stone-200 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Diagnóstico activo en 5 min
          </div>
          <img
            src={claridadMockupImg}
            alt="Mapa de Claridad - Interfaz de la aplicación en pantalla digital"
            referrerPolicy="no-referrer"
            className="w-full h-auto object-cover max-h-[460px] transform transition-transform duration-700 hover:scale-[1.01]"
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-stone-950/80 via-stone-950/40 to-transparent p-4 text-white text-left sm:hidden">
            <p className="text-xs font-semibold text-stone-200">Hoja de ruta lista para ejecutar sin dudas ni parálisis</p>
          </div>
        </div>

        {/* 4 Core Value Bullets */}
        <div className="max-w-2xl mx-auto text-left mb-10 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm">
          <ul className="space-y-4">
            {HERO_BULLETS.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-3.5">
                <div className="mt-0.5 shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                <span className="text-base sm:text-lg text-stone-800 font-medium leading-snug">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing Box & CTA */}
        <div className="max-w-xl mx-auto bg-stone-100/90 rounded-2xl p-6 sm:p-8 border-2 border-stone-300/80 shadow-md">
          {/* Price comparison */}
          <div className="flex items-baseline justify-center gap-3 mb-2">
            <span className="text-stone-500 line-through text-xl sm:text-2xl font-semibold">
              De $97
            </span>
            <span className="text-stone-950 text-4xl sm:text-5xl font-extrabold tracking-tight">
              por $17
            </span>
          </div>

          <p className="text-sm sm:text-base text-stone-600 font-medium mb-6">
            Pagas menos que un almuerzo para sacar de tu cabeza el peso de no saber hacia dónde vas.
          </p>

          {/* Main CTA Button */}
          <a
            id="hero-primary-cta"
            href={HOTMART_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-w-[320px] inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white bg-emerald-700 hover:bg-emerald-800 active:scale-[0.99] rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer group"
          >
            <span>QUIERO RECUPERAR MI DIRECCIÓN</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Micro Trust Indicators */}
          <div className="mt-5 pt-4 border-t border-stone-200/80 flex flex-wrap items-center justify-center gap-y-2 gap-x-5 text-xs text-stone-600 font-medium">
            <span className="inline-flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-500" />
              Acceso instantáneo a la mini-app
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-emerald-700" />
              Pago cifrado 256-Bit SSL
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              Garantía incondicional 15 días
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
