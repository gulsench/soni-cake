import type { ComponentType, SVGProps } from "react";
import { motion } from "motion/react";
import Reveal from "../components/Reveal";
import { fadeUpItem, viewportOnce } from "../lib/motion";
import { WHATSAPP_URL, ORDER_CHECKLIST, DEPOSIT_NOTE } from "../lib/site";
import {
  ChatIcon,
  CheckBadgeIcon,
  BagIcon,
  WhatsAppIcon,
  ListIcon,
  CheckIcon,
} from "../components/icons";

type Step = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  body: string;
};

const STEPS: Step[] = [
  {
    icon: ChatIcon,
    title: "Message us on WhatsApp",
    body: "Send your design, flavour, size and the date you need it. Photos & inspiration welcome!",
  },
  {
    icon: CheckBadgeIcon,
    title: "We confirm the details",
    body: "We'll talk through the design, finalise everything and share the price to confirm your order.",
  },
  {
    icon: BagIcon,
    title: "Collect or get it delivered",
    body: "Pick up fresh from Indranagar, Agartala, or we'll arrange delivery to your door.",
  },
];

export default function HowToOrder() {
  return (
    <section id="order" className="section-pad bg-cream-100">
      <div className="container-content">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow mb-5">
              <span className="h-px w-6 bg-rose-deep/50" />
              How to Order
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-balance text-4xl font-bold leading-tight sm:text-5xl">
              Three simple steps
            </h2>
          </Reveal>
        </div>

        <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, body }, i) => (
            <motion.li
              key={title}
              variants={fadeUpItem}
              custom={i * 0.1}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="relative flex flex-col rounded-3xl border border-cream-200 bg-white p-8 shadow-soft"
            >
              <span className="absolute right-6 top-6 font-serif text-5xl leading-none text-rose-soft">
                {i + 1}
              </span>
              <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-soft/60 text-rose-deep">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="text-xl font-bold text-cocoa">{title}</h3>
              <p className="mt-3 text-base font-light leading-relaxed text-cocoa-muted">{body}</p>
            </motion.li>
          ))}
        </ol>

        {/* Order details checklist */}
        <Reveal as="div" className="mt-12">
          <div className="mx-auto max-w-3xl rounded-3xl border border-cream-200 bg-white p-8 shadow-soft sm:p-10">
            <div className="mb-7 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-soft/60 text-rose-deep">
                <ListIcon className="h-5 w-5" />
              </span>
              <h3 className="text-2xl font-light text-cocoa">Please include in your message</h3>
            </div>
            <ul className="space-y-4">
              {ORDER_CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sage-soft text-sage">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-base font-light leading-relaxed text-cocoa-light">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 rounded-2xl bg-rose-soft/40 px-5 py-4 text-sm font-light leading-relaxed text-cocoa">
              {DEPOSIT_NOTE}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 text-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <WhatsAppIcon className="h-5 w-5" />
              Start your order
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
