import React, { useState } from 'react';
import { X, Lock, ShieldCheck, CheckCircle2, Zap, ArrowRight, CreditCard, Sparkles } from 'lucide-react';
import { HOTMART_CHECKOUT_URL } from '../data/copyData';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    window.location.href = HOTMART_CHECKOUT_URL;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/80 p-3 sm:p-4 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative my-8 animate-in fade-in zoom-in-95 duration-200 text-stone-900">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
          aria-label="Cerrar modal de pago"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="mb-6 pb-4 border-b border-stone-150">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3 text-emerald-600" />
                <span>Acceso Inmediato Garantizado</span>
              </div>
              <h3 className="text-2xl font-extrabold text-stone-950 tracking-tight">
                Desbloquea tu Mapa de Claridad
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Completa tus datos para recibir tu acceso y los 4 bonos inmediatamente en tu correo.
              </p>
            </div>

            {/* Price stack preview */}
            <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200 mb-6">
              <div className="flex items-center justify-between text-xs text-stone-600 mb-1">
                <span>Mapa de Claridad + 4 Bonos Exclusivos</span>
                <span className="line-through text-red-600 font-bold decoration-red-600 decoration-2">$ 97.00 USD</span>
              </div>
              <div className="flex items-center justify-between text-xs font-semibold text-emerald-700 mb-2">
                <span>Descuento Especial Tráfico Directo</span>
                <span>- $ 80.00 USD</span>
              </div>
              <div className="pt-2 border-t border-stone-200 flex items-center justify-between">
                <span className="text-sm font-bold text-stone-900">Total a pagar hoy:</span>
                <span className="text-2xl font-black text-stone-950">$ 17.00 USD</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1" htmlFor="buyer-name">
                  Nombre completo
                </label>
                <input
                  id="buyer-name"
                  type="text"
                  required
                  placeholder="Tu nombre y apellido"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1" htmlFor="buyer-email">
                  Correo electrónico (aquí recibirás tu acceso)
                </label>
                <input
                  id="buyer-email"
                  type="email"
                  required
                  placeholder="tu@correo.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900"
                />
              </div>

              {/* Payment selection */}
              <div>
                <span className="block text-xs font-bold text-stone-700 mb-2">
                  Método de pago seguro
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'border-stone-900 bg-stone-900 text-white'
                        : 'border-stone-300 bg-white text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Tarjeta</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('paypal')}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 cursor-pointer ${
                      paymentMethod === 'paypal'
                        ? 'border-stone-900 bg-stone-900 text-white'
                        : 'border-stone-300 bg-white text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <span>PayPal</span>
                  </button>
                </div>
              </div>

              {paymentMethod === 'card' ? (
                <div className="space-y-2 p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <input
                    type="text"
                    required
                    placeholder="Número de tarjeta"
                    value={cardNumber}
                    onChange={e => setCardNumber(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-1 focus:ring-stone-900"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      required
                      placeholder="MM / AA"
                      value={cardExpiry}
                      onChange={e => setCardExpiry(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-1 focus:ring-stone-900"
                    />
                    <input
                      type="text"
                      required
                      placeholder="CVC"
                      value={cardCvc}
                      onChange={e => setCardCvc(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-1 focus:ring-stone-900"
                    />
                  </div>
                </div>
              ) : (
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600 text-center">
                  Serás redirigido a PayPal de forma segura para completar tu pago de $17 USD.
                </div>
              )}

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 px-6 bg-emerald-700 hover:bg-emerald-800 active:scale-[0.99] text-white font-extrabold text-base rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Procesando pago seguro...</span>
                  </span>
                ) : (
                  <>
                    <span>COMPLETAR MI ACCESO POR $17</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-4 pt-3 border-t border-stone-150 flex items-center justify-between text-[11px] text-stone-500">
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-emerald-700" />
                Cifrado SSL de 256 bits
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                15 días de garantía
              </span>
            </div>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-extrabold text-stone-950 mb-2">
              ¡Bienvenido a tu Mapa de Claridad!
            </h3>
            <p className="text-sm text-stone-600 mb-6 max-w-md mx-auto">
              Hemos enviado tus credenciales de acceso y los 4 bonos a: <strong className="text-stone-900">{email || 'tu correo'}</strong>.
            </p>

            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl mb-6 text-left text-xs sm:text-sm text-emerald-950 space-y-2">
              <div className="flex items-center gap-2 font-bold text-emerald-900">
                <Zap className="w-4 h-4 text-emerald-600" />
                <span>Primer paso recomendado:</span>
              </div>
              <p>
                Inicia con el diagnóstico de 12 preguntas (toma solo 3 minutos) para generar de inmediato tu primer paso ejecutable sin parálisis.
              </p>
            </div>

            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="w-full py-3.5 px-6 bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm rounded-xl transition-colors cursor-pointer"
            >
              Comenzar Diagnóstico Ahora
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
