import type { ComponentType, SVGProps } from "react";
import { motion } from "motion/react";
import Reveal from "../components/Reveal";
import { fadeUpItem, viewportOnce } from "../lib/motion";
import { HeartIcon, LeafIcon, SparkleIcon } from "../components/icons";

type Point = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  body: string;
};

const POINTS: Point[] = [
  {
    icon: HeartIcon,
    title: "Handcrafted fresh to order",
    body: "Nothing is pre-made. Every cake is baked the day it's collected, so each bite tastes just-baked.",
  },
  {
    icon: LeafIcon,
    title: "Premium ingredients",
    body: "Real cream, real fruit, quality chocolate. Flavours that are balanced and refined, never over-sweet.",
  },
  {
    icon: SparkleIcon,
    title: "Loved by 5,000+ on Instagram",
    body: "A growing community in Agartala keeps coming back for celebrations big and small.",
  },
];

export default function WhyUs() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-content">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow mb-5">
              <span className="h-px w-6 bg-rose-deep/50" />
              Why Soni Cake
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-balance text-4xl font-bold leading-tight sm:text-5xl">
              Little details, lovingly made
            </h2>
          </Reveal>
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {POINTS.map(({ icon: Icon, title, body }, i) => (
            <motion.li
              key={title}
              variants={fadeUpItem}
              custom={i * 0.1}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="flex flex-col items-center rounded-3xl border border-cream-200 bg-cream-100/60 px-7 py-10 text-center transition-shadow duration-500 hover:shadow-soft"
            >
              <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-rose-soft text-rose-deep">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="text-xl font-bold text-cocoa">{title}</h3>
              <p className="mt-3 text-base font-light leading-relaxed text-cocoa-muted">{body}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
