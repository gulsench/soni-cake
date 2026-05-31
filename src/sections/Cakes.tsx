import { motion } from "motion/react";
import Reveal from "../components/Reveal";
import SmartImage from "../components/SmartImage";
import { fadeUpItem, viewportOnce } from "../lib/motion";
import { WHATSAPP_URL } from "../lib/site";

type Cake = {
  name: string;
  description: string;
  /** Image path under /public/images/ — see comment for what each shows. */
  image: string;
  alt: string;
  fallback: string;
  priceFrom: string; // PLACEHOLDER price — replace with the owner's actual pricing
};

const CAKES: Cake[] = [
  {
    name: "Celebration & Custom Cakes",
    description: "Show-stopping cakes designed around your theme, colours & occasion.",
    image: "/images/celebration-cake.jpg", // lilac vintage two-tier buttercream celebration cake
    alt: "A lilac vintage two-tier buttercream celebration cake with lace bows",
    fallback: "bg-rose-soft",
    priceFrom: "₹...", // PLACEHOLDER
  },
  {
    name: "Bento Cakes",
    description: "Cute mini cakes for two, hand-piped messages, ready in a box.",
    image: "/images/bento-cake.jpg", // a small hand-lettered bento cake
    alt: "A petite bento cake with a hand-piped message in its box",
    fallback: "bg-sage-soft",
    priceFrom: "₹...", // PLACEHOLDER
  },
  {
    name: "Cheesecakes",
    description: "Silky, baked-to-order cheesecakes, rich yet beautifully light.",
    image: "/images/cheesecake.jpg", // baked blueberry cheesecake in a Soni Cake box
    alt: "A baked blueberry-topped cheesecake in a Soni Cake box",
    fallback: "bg-cream-200",
    priceFrom: "₹...", // PLACEHOLDER
  },
  {
    name: "Tarts",
    description: "Crisp, buttery shells filled with fresh fruit & smooth custard.",
    image: "/images/tart.jpg", // a fresh fruit tart (no tart photo in the original set — drop one in, or reuse mango-range.jpg)
    alt: "A buttery fruit tart with fresh fruit on top",
    fallback: "bg-rose-soft",
    priceFrom: "₹...", // PLACEHOLDER
  },
  {
    name: "Tres Leches",
    description: "Soft sponge soaked in three milks, our melt-in-the-mouth favourite.",
    image: "/images/tres-leches.jpg", // a slice/cup of milky tres leches
    alt: "A soft, milk-soaked tres leches cake",
    fallback: "bg-sage-soft",
    priceFrom: "₹...", // PLACEHOLDER
  },
  {
    name: "Cookies",
    description: "Thick, chewy cookies baked fresh in small batches.",
    image: "/images/cookies.jpg", // a stack of gooey, molten chocolate-chip cookies
    alt: "A stack of thick, gooey chocolate-chip cookies with molten centres",
    fallback: "bg-cream-200",
    priceFrom: "₹...", // PLACEHOLDER
  },
  {
    name: "Cupcakes",
    description: "Pretty swirled cupcakes, perfect for parties & gifting.",
    image: "/images/cupcakes.jpg", // a set of swirled, decorated cupcakes
    alt: "A set of prettily swirled and decorated cupcakes",
    fallback: "bg-rose-soft",
    priceFrom: "₹...", // PLACEHOLDER
  },
  {
    name: "Brownies",
    description: "Fudgy, deeply chocolatey brownies with a delicate crackle top.",
    image: "/images/brownie.jpg", // a fudgy chocolate brownie (no brownie photo in the original set — drop one in)
    alt: "A fudgy chocolate brownie with a crackly top",
    fallback: "bg-cream-200",
    priceFrom: "₹...", // PLACEHOLDER
  },
];

// Extra specialities Soni Cake is loved for — shown as soft text chips below the grid.
const ALSO_BAKING = ["Tiramisu", "Red Velvet", "Mango desserts", "Dessert boxes", "Hampers"];

export default function Cakes() {
  return (
    <section id="cakes" className="section-pad bg-cream">
      <div className="container-content">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow mb-5">
              <span className="h-px w-6 bg-rose-deep/50" />
              The Menu
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-balance text-4xl font-bold leading-tight sm:text-5xl">
              Our Cakes &amp; Treats
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-lg font-light leading-relaxed text-cocoa-light">
              Every order is custom-baked. Tell us the flavour, size and date, and we'll
              make it just for you.
            </p>
          </Reveal>
        </div>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {CAKES.map((cake, i) => (
            <motion.li
              key={cake.name}
              variants={fadeUpItem}
              custom={(i % 4) * 0.08}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-cream-200 bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="overflow-hidden">
                  <SmartImage
                    src={cake.image}
                    alt={cake.alt}
                    fallbackClassName={cake.fallback}
                    fallbackLabel={cake.name}
                    className="aspect-square w-full"
                    imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl font-bold leading-snug text-cocoa">{cake.name}</h3>
                  <p className="mt-2 flex-1 text-sm font-light leading-relaxed text-cocoa-muted">
                    {cake.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-cream-200 pt-3">
                    <span className="text-sm font-medium text-rose-deep">{cake.priceFrom}</span>
                    <span className="text-xs font-medium uppercase tracking-wider text-cocoa-muted transition-colors group-hover:text-rose-deep">
                      Order →
                    </span>
                  </div>
                </div>
              </a>
            </motion.li>
          ))}
        </ul>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center gap-4">
            <p className="text-sm uppercase tracking-[0.2em] text-cocoa-muted">Also baking</p>
            <ul className="flex flex-wrap justify-center gap-2.5">
              {ALSO_BAKING.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-rose/30 bg-rose-soft/40 px-4 py-2 text-sm text-cocoa-light"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
