import type { ReactNode } from "react";
import { motion } from "motion/react";
import { fadeUpItem, viewportOnce } from "../lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Optional stagger delay (seconds) for sequencing sibling reveals. */
  delay?: number;
  as?: "div" | "section" | "li" | "article";
};

/**
 * Wraps content in a soft fade + slide-up that triggers once on scroll.
 * Honours prefers-reduced-motion automatically via Motion's reducedMotion handling
 * plus the global CSS reset in index.css.
 */
export default function Reveal({ children, className = "", delay = 0, as = "div" }: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={fadeUpItem}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {children}
    </MotionTag>
  );
}
