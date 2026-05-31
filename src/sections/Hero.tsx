import { motion } from "motion/react";
import { fadeUp, fadeIn, stagger } from "../lib/motion";
import { WHATSAPP_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "../lib/site";
import { WhatsAppIcon, InstagramIcon } from "../components/icons";
import SmartImage from "../components/SmartImage";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-x-clip bg-cream pt-[calc(5.5rem+env(safe-area-inset-top,0px))] sm:pt-28 max-lg:landscape:min-h-0 max-lg:landscape:py-6"
    >
      {/* Soft pastel atmosphere behind everything */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-rose-soft/50 blur-3xl" />
        <div className="absolute -right-20 top-40 h-80 w-80 rounded-full bg-sage-soft/60 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-rose-soft/30 blur-3xl" />
      </div>

      <div className="container-content flex flex-1 flex-col items-center px-5 pb-12 sm:px-8 sm:pb-16 max-lg:landscape:flex-row max-lg:landscape:items-center max-lg:landscape:gap-6 max-lg:landscape:pb-8 lg:flex-row lg:gap-12 lg:pb-24">
        {/* Copy */}
        <motion.div
          className="flex w-full flex-col items-center justify-center py-5 text-center max-lg:landscape:w-1/2 max-lg:landscape:shrink-0 max-lg:landscape:py-2 lg:w-[46%] lg:items-start lg:text-left"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={fadeUp}
            className="text-balance text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-cocoa max-lg:landscape:text-3xl sm:text-6xl lg:text-7xl"
          >
            Soni&nbsp;Cake
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-md text-balance text-base font-light leading-relaxed text-cocoa-light max-lg:landscape:mt-2 max-lg:landscape:text-sm sm:mt-5 sm:text-lg sm:text-xl"
          >
            Freshly baked cakes, tarts &amp; treats, handcrafted with love in Agartala.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-6 flex w-full max-w-sm flex-col items-center gap-3 max-lg:landscape:mt-4 max-lg:landscape:max-w-none sm:mt-9 sm:flex-row sm:justify-center lg:items-start lg:justify-start"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full sm:w-auto">
              <WhatsAppIcon className="h-5 w-5" />
              Order on WhatsApp
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost w-full sm:w-auto">
              <InstagramIcon className="h-4 w-4" />
              {INSTAGRAM_HANDLE}
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex items-center gap-4 text-sm text-cocoa-muted max-lg:landscape:mt-4 sm:mt-10 sm:gap-6"
          >
            <div className="flex flex-col items-center lg:items-start">
              <span className="font-serif text-xl text-cocoa max-lg:landscape:text-lg sm:text-2xl">5,000+</span>
              <span className="text-[0.65rem] uppercase tracking-wider sm:text-xs">Loved on Instagram</span>
            </div>
            <span className="h-8 w-px bg-cocoa/15" />
            <div className="flex flex-col items-center lg:items-start">
              <span className="font-serif text-xl text-cocoa max-lg:landscape:text-lg sm:text-2xl">Fresh</span>
              <span className="text-[0.65rem] uppercase tracking-wider sm:text-xs">Baked to order</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero image */}
        <motion.div
          className="relative mt-8 w-full max-lg:landscape:mt-0 max-lg:landscape:w-1/2 sm:mt-12 lg:mt-0 lg:w-[54%]"
          variants={fadeIn}
          initial="hidden"
          animate="show"
        >
          <div className="relative pb-8 sm:pb-0">
            {/* HERO IMAGE — signature evil-eye buttercream showpiece cake (hero.jpg) */}
            <SmartImage
              src="/images/hero.jpg"
              alt="Soni Cake's signature cream-and-gold evil-eye buttercream cake in a branded gift box"
              loading="eager"
              fallbackClassName="bg-rose-soft"
              fallbackLabel="Hero cake photo"
              className="aspect-[4/5] w-full rounded-3xl shadow-card max-lg:landscape:aspect-[4/3] sm:aspect-square lg:aspect-[4/5]"
            />
            {/* Soft light overlay to keep it elegant and airy */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-white/25 via-transparent to-white/15" />
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/40" />

            {/* Floating glass caption chip */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="absolute bottom-4 inset-x-4 z-10 mx-auto flex w-fit max-w-full items-center justify-center gap-2 rounded-full border border-white/60 bg-white/80 px-4 py-2.5 text-center shadow-soft backdrop-blur-md sm:inset-x-auto sm:bottom-auto sm:-bottom-5 sm:left-6 sm:mx-0 sm:max-w-none sm:px-5 sm:py-3"
            >
              <span className="text-base sm:text-lg">🍰</span>
              <span className="text-xs font-medium text-cocoa sm:text-sm">Made fresh, just for you</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
