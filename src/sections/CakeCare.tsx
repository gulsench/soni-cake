import type { ComponentType, SVGProps } from "react";
import { motion } from "motion/react";
import Reveal from "../components/Reveal";
import { fadeUpItem, viewportOnce } from "../lib/motion";
import { BoxIcon, CakeIcon, SunIcon, CarIcon } from "../components/icons";

type Tip = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  body: string;
};

const TIPS: Tip[] = [
  {
    icon: BoxIcon,
    title: "Carry from the bottom",
    body: "Always hold the cake box from the base. Avoid squeezing the sides, which can damage the cake.",
  },
  {
    icon: CakeIcon,
    title: "Keep it level",
    body: "Hold the cake flat at all times. Tilting it at an angle can cause the cake to shift or collapse.",
  },
  {
    icon: SunIcon,
    title: "Out of direct sun",
    body: "Store in a refrigerator or a cool place, away from heat and moisture. Never leave it in direct sunlight.",
  },
  {
    icon: CarIcon,
    title: "Steady in transit",
    body: "While travelling, place the cake on a flat surface such as the car floorboard or the trunk.",
  },
];

export default function CakeCare() {
  return (
    <section id="care" className="section-pad bg-cream">
      <div className="container-content">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow mb-5">
              <span className="h-px w-6 bg-rose-deep/50" />
              Cake Care
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-balance text-4xl font-bold leading-tight sm:text-5xl">
              Getting your cake home safely
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg font-light leading-relaxed text-cocoa-light">
              A few gentle tips to keep your cake looking just as beautiful as the moment you collect it.
            </p>
          </Reveal>
        </div>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TIPS.map(({ icon: Icon, title, body }, i) => (
            <motion.li
              key={title}
              variants={fadeUpItem}
              custom={i * 0.08}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="flex flex-col items-center rounded-3xl border border-cream-200 bg-cream-100/60 px-7 py-10 text-center transition-shadow duration-500 hover:shadow-soft"
            >
              <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-rose-soft text-rose-deep">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="text-lg font-bold text-cocoa">{title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-cocoa-muted">{body}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
