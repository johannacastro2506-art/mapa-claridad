import { TestimonialItem, AccessComponentItem, FaqItem, BonusItem } from '../types';

export const HOTMART_CHECKOUT_URL = "https://pay.hotmart.com/R107673646L";

export const HERO_BULLETS = [
  "Por qué compararte con los demás está destruyendo tu capacidad de avanzar hoy.",
  "El Atajo de los 5 Minutos para dejar de dar vueltas en círculos mentales.",
  "El Punto Ciego de la Insuficiencia que te hace sentir que nunca haces lo suficiente.",
  "El Plan de Alivio Inmediato para que despiertes mañana con un paso claro."
];

export const SELF_ASSESSMENT_ITEMS = [
  { id: '1', text: "Sientes que todos avanzan menos tú." },
  { id: '2', text: "Te despiertas con un nudo en el estómago por todo lo que \"deberías\" estar haciendo." },
  { id: '3', text: "Empiezas cosas con ganas pero las dejas a la mitad por falta de claridad." },
  { id: '4', text: "Miras redes sociales y terminas sintiéndote peor con tu propia realidad." }
];

export const SCANNER_STEPS = [
  {
    step: "01",
    title: "12 Preguntas Clave",
    description: "Respondes 12 preguntas clave sobre tu situación actual.",
    detail: "Sin teoría académica ni divagaciones. Diagnóstico preciso en menos de 3 minutos."
  },
  {
    step: "02",
    title: "Filtro Inteligente",
    description: "El sistema procesa tus bloqueos y filtra el ruido innecesario.",
    detail: "Detecta tus puntos ciegos y elimina automáticamente las falsas urgencias impuestas."
  },
  {
    step: "03",
    title: "Acción Inmediata",
    description: "Recibes tu Mapa de Acción listo. Sin dudas. Sin parálisis.",
    detail: "Una sola hoja de ruta clara, paso a paso, para ejecutar hoy mismo sin agobio."
  }
];

export const METHOD_STEPS = [
  {
    step: "PASO 01",
    name: "DIAGNÓSTICO",
    summary: "respondes preguntas sobre tus bloqueos actuales.",
    tagline: "Identificación de bloqueos invisibles"
  },
  {
    step: "PASO 02",
    name: "FILTRADO",
    summary: "el sistema elimina las falsas urgencias y prioriza tu paz.",
    tagline: "Depuración de sobrecarga mental"
  },
  {
    step: "PASO 03",
    name: "MAPA",
    summary: "recibes tu hoja de ruta personalizada lista para ejecutar.",
    tagline: "Dirección clara y paso inmediato"
  }
];

export const BONUSES: BonusItem[] = [
  {
    id: 'bono-1',
    title: "Protocolo del Alivio",
    subtitle: "Audio interactivo para calmar la ansiedad.",
    description: "Guía de 3 minutos para bajar las revoluciones cuando el ruido mental te supere.",
    originalPrice: 15,
    iconName: "Headphones",
    badgeText: "Audio Inmersivo 3 Min",
    interactiveType: 'audio'
  },
  {
    id: 'bono-2',
    title: "Generador de Próximo Paso",
    subtitle: "Herramienta de decisión rápida.",
    description: "Escribe tu duda y recibe la acción lógica inmediata para dejar de procrastinar.",
    originalPrice: 15,
    iconName: "Sparkles",
    badgeText: "Herramienta Interactiva",
    interactiveType: 'generator'
  },
  {
    id: 'bono-3',
    title: "Checklist de Enfoque",
    subtitle: "Filtro de distracciones diarias.",
    description: "Lista inteligente para limpiar tu día de tareas que solo te quitan energía.",
    originalPrice: 10,
    iconName: "CheckSquare",
    badgeText: "Filtro Diario Inteligente",
    interactiveType: 'checklist'
  },
  {
    id: 'bono-4',
    title: "Rescatador de Crisis",
    subtitle: "Botón de auxilio para días difíciles.",
    description: "Sistema de pasos rápidos para recuperar el centro cuando sientas que vas a colapsar.",
    originalPrice: 10,
    iconName: "ShieldAlert",
    badgeText: "Auxilio Inmediato SOS",
    interactiveType: 'crisis'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    quote: "Sentía que mi vida no iba a ningún lado. En 10 minutos tuve más claridad que en meses de terapia.",
    author: "Andrea",
    age: 32,
    location: "Medellín, Colombia",
    tag: "Claridad profesional y personal"
  },
  {
    id: 't-2',
    quote: "Dejé de compararme con mis amigos de la universidad. Ahora sé exactamente qué me toca hacer a mí.",
    author: "Carlos",
    age: 29,
    location: "Ciudad de México",
    tag: "Fin del ciclo de comparación"
  },
  {
    id: 't-3',
    quote: "Ese nudo en el pecho desapareció cuando vi mi mapa. Por fin tengo un plan que puedo cumplir.",
    author: "Lucía",
    age: 35,
    location: "Santiago, Chile",
    tag: "Paz mental y plan ejecutable"
  }
];

export const ACCESS_COMPONENTS: AccessComponentItem[] = [
  { name: "Mapa de Claridad", originalPrice: 47, description: "Mini-app interactiva con algoritmo de diagnóstico de prioridades" },
  { name: "Protocolo del Alivio", originalPrice: 15, description: "Audio interactivo guiado para calmar la saturación mental" },
  { name: "Generador de Próximo Paso", originalPrice: 15, description: "Herramienta de decisión lógica instantánea anti-parálisis" },
  { name: "Checklist de Enfoque", originalPrice: 10, description: "Filtro depurador de distracciones y ladrones de energía" },
  { name: "Rescatador de Crisis", originalPrice: 10, description: "Protocolo de emergencia para desbloqueo emocional" }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: "¿Cómo accedo?",
    answer: "Recibes un correo con tu acceso inmediato a la plataforma digital tras el pago."
  },
  {
    id: 'faq-2',
    question: "¿Es un curso en video?",
    answer: "No, es una herramienta interactiva que genera resultados personalizados para tu situación específica."
  },
  {
    id: 'faq-3',
    question: "¿Cuánto tiempo toma ver resultados?",
    answer: "Tendrás tu mapa listo en menos de 10 minutos tras completar el diagnóstico inicial."
  },
  {
    id: 'faq-4',
    question: "¿Necesito experiencia previa?",
    answer: "Ninguna, el sistema te guía paso a paso con un lenguaje simple y directo."
  },
  {
    id: 'faq-5',
    question: "¿Funciona en el celular?",
    answer: "Sí, está optimizado para que lo uses desde cualquier dispositivo con internet."
  },
  {
    id: 'faq-6',
    question: "¿Y si mi situación es muy compleja?",
    answer: "El sistema está diseñado para filtrar la complejidad y encontrar el hilo conductor más simple."
  },
  {
    id: 'faq-7',
    question: "¿Qué pasa si me vuelvo a bloquear?",
    answer: "Para eso tienes el bono Rescatador de Crisis, diseñado para sacarte del bache rápidamente."
  },
  {
    id: 'faq-8',
    question: "¿El pago es seguro?",
    answer: "Usamos plataformas líderes con cifrado de seguridad para proteger todos tus datos."
  }
];
