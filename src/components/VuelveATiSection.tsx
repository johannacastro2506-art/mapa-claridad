import React from 'react';
import { ArrowRight, Heart, Sparkles, ShieldCheck } from 'lucide-react';
import { HOTMART_CHECKOUT_URL } from '../data/copyData';
import vuelveATiImg from '../assets/images/vuelve_a_ti_1789494570720.jpg';

interface VuelveATiSectionProps {
  onCtaClick?: () => void;
}

export const VuelveATiSection: React.FC<VuelveATiSectionProps> = ({ onCtaClick }) => {
  return (
    <section id="vuelve-a-ti-section" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#111614] text-stone-100 relative overflow-hidden">
      {/* Background soft ambient warm glow */}
      <div className="absolute inset-0 bg-radial from-emerald-950/30 via-transparent to-transparent opacity-60 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Section title */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/40 text-emerald-300 border border-emerald-700/40 text-xs font-bold tracking-widest uppercase mb-8">
          <Heart className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
          <span>El retorno a tu paz interior</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-8">
          VUELVE A TI
        </h2>

        {/* Emotion-evoking imagery requested by copy */}
        <div className="mx-auto max-w-2xl mb-12 rounded-3xl overflow-hidden border-2 border-stone-800 shadow-2xl relative group">
          <img
            src={vuelveATiImg}
            alt="Vuelve a ti - Despertar en tranquilidad y a tu propio ritmo"
            referrerPolicy="no-referrer"
            className="w-full h-auto object-cover max-h-[440px] transform transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Emotional copy statements */}
        <div className="max-w-2xl mx-auto space-y-5 text-center mb-12">
          <p className="text-xl sm:text-2xl md:text-3xl text-stone-200 font-medium leading-relaxed">
            Merecías despertar con tranquilidad.
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl text-stone-200 font-medium leading-relaxed">
            Merecías vivir una vida que se sienta tuya y no una carrera contra los demás.
          </p>
          <div className="h-0.5 w-16 bg-emerald-500/60 mx-auto my-6" />
          <p className="text-2xl sm:text-3xl md:text-4xl text-emerald-300 font-extrabold leading-tight">
            Hoy es el día de dejar de sentirte atrás y empezar a caminar a tu propio ritmo.
          </p>
        </div>

        {/* Final Big Action CTA */}
        <div className="max-w-xl mx-auto">
          <a
            id="vuelve-a-ti-cta"
            href={HOTMART_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-w-[340px] inline-flex items-center justify-center gap-3 px-9 py-5 text-lg sm:text-xl font-extrabold text-stone-950 bg-white hover:bg-emerald-50 active:scale-[0.99] rounded-2xl shadow-2xl hover:shadow-emerald-500/20 transition-all cursor-pointer group"
          >
            <span>ACABAR CON EL BLOQUEO AHORA</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform text-emerald-700" />
          </a>

          <p className="text-xs sm:text-sm text-stone-400 font-medium mt-4">
            Acceso instantáneo por $17 • Garantía incondicional de 15 días • 4 Bonos incluidos
          </p>
        </div>
      </div>
    </section>
  );
};
