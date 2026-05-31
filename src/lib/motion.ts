import type { Variants } from "motion/react";

// Soft, slow, never-bouncy easing — feels delicate and premium.
const softEase = [0.22, 0.61, 0.36, 1] as const;

// Fade + gentle slide-up. Used for most entrance reveals.
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: softEase },
  },
};

// Same as fadeUp but accepts a per-item delay via Motion's `custom` prop.
// Used so each grid/list item can animate itself on scroll (robust, no
// reliance on parent→child variant propagation) while still feeling staggered.
export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: softEase, delay },
  }),
};

// Subtle fade for hero / large images.
export const fadeIn: Variants = {
  hidden: { opacity: 0, scale: 1.02 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease: softEase },
  },
};

// Container that staggers its children into view.
export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

// Shared viewport config: animate once, trigger a little before fully in view.
export const viewportOnce = { once: true, amount: 0.25, margin: "0px 0px -10% 0px" };
