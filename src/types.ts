export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  age: number;
  location?: string;
  tag: string;
}

export interface AccessComponentItem {
  name: string;
  originalPrice: number;
  description?: string;
  badge?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BonusItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  originalPrice: number;
  iconName: string;
  badgeText: string;
  interactiveType?: 'audio' | 'generator' | 'checklist' | 'crisis';
}

export interface SelfCheckItem {
  id: string;
  text: string;
  checked: boolean;
}
