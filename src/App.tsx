/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HeaderBanner } from './components/HeaderBanner';
import { HeroSection } from './components/HeroSection';
import { SelfAssessmentSection } from './components/SelfAssessmentSection';
import { PainAgitationSection } from './components/PainAgitationSection';
import { ScannerSection } from './components/ScannerSection';
import { MethodSection } from './components/MethodSection';
import { UrgencySection } from './components/UrgencySection';
import { BonusesSection } from './components/BonusesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSummarySection } from './components/PricingSummarySection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { VuelveATiSection } from './components/VuelveATiSection';
import { StickyBottomBar } from './components/StickyBottomBar';
import { CheckoutModal } from './components/CheckoutModal';
import { Footer } from './components/Footer';
import { HOTMART_CHECKOUT_URL } from './data/copyData';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenCheckout = () => {
    window.location.href = HOTMART_CHECKOUT_URL;
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-stone-900 font-sans selection:bg-emerald-600 selection:text-white pb-16 sm:pb-0">
      {/* 1. Header Urgency Banner */}
      <HeaderBanner onCtaClick={handleOpenCheckout} />

      {/* 2. Hero Section: MAPA DE CLARIDAD, Headline, Mockup, 4 Bullets, Price anchor, CTA */}
      <HeroSection onCtaClick={handleOpenCheckout} />

      {/* 3. Self-Assessment: ¿ESTO ES PARA MÍ? + 4 symptoms */}
      <SelfAssessmentSection />

      {/* 4. Pain & Agitation: EL PESO DE SENTIR QUE TE QUEDASTE ATRÁS (High-contrast dark) */}
      <PainAgitationSection />

      {/* 5. Mechanism: Cómo Funciona: Escáner de Prioridades */}
      <ScannerSection />

      {/* 6. Method: CÓMO FUNCIONA EL MÉTODO (3 pasos) */}
      <MethodSection />

      {/* 7. Reality check / Urgency: EL TIEMPO NO TE VA A ESPERAR (High-contrast dark) */}
      <UrgencySection onCtaClick={handleOpenCheckout} />

      {/* 8. BONOS: 4 bonus tools + visual images & interactive previews */}
      <BonusesSection onCtaClick={handleOpenCheckout} />

      {/* 9. Social Proof: LO QUE ESTÁN DICIENDO (Andrea, Carlos, Lucía) */}
      <TestimonialsSection />

      {/* 10. Stack & Pricing: RESUMEN DE TU ACCESO (De $97 por $17) */}
      <PricingSummarySection onCtaClick={handleOpenCheckout} />

      {/* 11. Guarantee: GARANTÍA INCONDICIONAL DE 15 DÍAS + CTA */}
      <GuaranteeSection onCtaClick={handleOpenCheckout} />

      {/* 12. FAQs: PREGUNTAS FRECUENTES (8 questions) + CTA */}
      <FaqSection onCtaClick={handleOpenCheckout} />

      {/* 13. Final Emotional Close: VUELVE A TI (imagen) + CTA */}
      <VuelveATiSection onCtaClick={handleOpenCheckout} />

      {/* 14. Footer with legal and security notes */}
      <Footer />

      {/* 15. Sticky bottom bar for mobile & desktop conversions */}
      <StickyBottomBar onCtaClick={handleOpenCheckout} />

      {/* 16. Fast Conversion Direct Checkout Modal */}
      <CheckoutModal isOpen={isCheckoutOpen} onClose={handleCloseCheckout} />
    </main>
  );
}
