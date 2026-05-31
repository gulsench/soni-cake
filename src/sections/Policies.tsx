import type { ComponentType, SVGProps } from "react";
import { motion } from "motion/react";
import Reveal from "../components/Reveal";
import { fadeUpItem, viewportOnce } from "../lib/motion";
import {
  ShieldIcon,
  RefreshIcon,
  ClockIcon,
  BagIcon,
  SparkleIcon,
  HandshakeIcon,
} from "../components/icons";

type Policy = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  body: string;
};

const POLICIES: Policy[] = [
  {
    icon: ShieldIcon,
    title: "Deposit",
    body: "A 50% non-refundable deposit is required for all cake orders. If no deposit is sent, your order will not be placed.",
  },
  {
    icon: RefreshIcon,
    title: "Refunds & cancellations",
    body: "For cakes paid in full, a 50% refund is given only if the order is cancelled in a timely manner, at least 3 days prior.",
  },
  {
    icon: ClockIcon,
    title: "Last-minute orders",
    body: "Considered only upon availability, cake size & decoration. Orders with less than 3 days' notice require full payment, and a rush fee may apply.",
  },
  {
    icon: BagIcon,
    title: "Pick-up",
    body: "Please be on time for pick-up at the agreed time. If you're running late, a quick message is greatly appreciated! After handover, we're no longer responsible for any damage to the cake.",
  },
  {
    icon: SparkleIcon,
    title: "Inspiration pictures",
    body: "Photos you send are used as inspiration and cannot be replicated 100%. Please share as many details as possible so we can create a cake to your liking.",
  },
  {
    icon: HandshakeIcon,
    title: "Agreement",
    body: "By placing an order, you agree to the policies set above. Thank you for understanding. It helps us make your day extra sweet.",
  },
];

export default function Policies() {
  return (
    <section id="policies" className="section-pad bg-cream-100">
      <div className="container-content">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow mb-5">
              <span className="h-px w-6 bg-rose-deep/50" />
              Ordering Policies
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-balance text-4xl font-bold leading-tight sm:text-5xl">
              Good to know before you order
            </h2>
          </Reveal>
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POLICIES.map(({ icon: Icon, title, body }, i) => (
            <motion.li
              key={title}
              variants={fadeUpItem}
              custom={(i % 3) * 0.08}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="flex flex-col rounded-3xl border border-cream-200 bg-white p-8 shadow-soft"
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-soft/60 text-rose-deep">
                <Icon className="h-5 w-5" />
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
