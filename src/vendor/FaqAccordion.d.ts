import type { ComponentType, CSSProperties } from "react";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FAQAccordionProps {
  faqItems?: FaqItem[];
  itemGap?: number;
  questionFont?: Record<string, unknown>;
  questionStyle?: { textColor?: string; weight?: number };
  answerFont?: Record<string, unknown>;
  answerStyle?: { textColor?: string; weight?: number };
  icon?: {
    type?: "plus" | "chevron";
    size?: number;
    color?: string;
    stroke?: number;
  };
  container?: Record<string, unknown>;
  section?: Record<string, unknown>;
  transition?: Record<string, unknown>;
  defaultOpenFirst?: boolean;
  openAllOnCanvas?: boolean;
  style?: CSSProperties;
}

declare const FAQAccordion: ComponentType<FAQAccordionProps>;
export default FAQAccordion;
