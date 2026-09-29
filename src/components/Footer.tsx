import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="page-footer" className="bg-[#0c0f0d] text-stone-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-stone-800 text-xs">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="flex items-center justify-center gap-2">
          <span className="font-bold text-sm tracking-wider text-white uppercase">
            MAPA DE CLARIDAD
          </span>
        </div>

        <p className="text-stone-500 max-w-xl mx-auto leading-relaxed text-[11px] sm:text-xs">
          Este sitio no forma parte de Google ni de Meta Platforms, Inc. Además, este sitio NO está respaldado por Meta o Google de ninguna manera. Los resultados pueden variar según el compromiso individual.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] text-stone-400">
          <span>Términos y Condiciones</span>
          <span>Política de Privacidad</span>
          <span>Aviso Legal</span>
          <span>Garantía 15 Días</span>
          <span>Contacto & Soporte</span>
        </div>

        <div className="pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-2">
          <p>© {new Date().getFullYear()} Mapa de Claridad. Todos los derechos reservados.</p>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Lock className="w-3 h-3 text-emerald-500" />
              Cifrado 256-Bit Seguro
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
