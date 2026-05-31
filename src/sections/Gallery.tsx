import { motion } from "motion/react";
import Reveal from "../components/Reveal";
import SmartImage from "../components/SmartImage";
import { fadeUpItem, viewportOnce } from "../lib/motion";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from "../lib/site";
import { InstagramIcon } from "../components/icons";

// 8 of Soni Cake's best photos. Drop gallery-1.jpg … gallery-8.jpg into /public/images/.
// `span` controls the masonry row-span so the grid feels organic, not boxy.
const PHOTOS = [
  { src: "/images/gallery-1.jpg", alt: "Blush-pink drip cake with fresh roses and macarons", span: "row-span-2", fallback: "bg-rose-soft" },
  { src: "/images/gallery-2.jpg", alt: "Baked blueberry cheesecake in a Soni Cake box", span: "row-span-1", fallback: "bg-sage-soft" },
  { src: "/images/gallery-3.jpg", alt: "A freshly baked chocolate-chip cookie", span: "row-span-1", fallback: "bg-cream-200" },
  { src: "/images/gallery-4.jpg", alt: "Lilac vintage two-tier buttercream cake with lace bows", span: "row-span-2", fallback: "bg-sage-soft" },
  { src: "/images/gallery-5.jpg", alt: "Mango cream cake topped with mango and pistachio", span: "row-span-2", fallback: "bg-cream-200" },
  { src: "/images/gallery-6.jpg", alt: "Trio of Japanese cotton cheesecakes in Soni Cake boxes", span: "row-span-1", fallback: "bg-rose-soft" },
  { src: "/images/gallery-7.jpg", alt: "Blueberry baked cheesecake in a pink Soni Cake box", span: "row-span-1", fallback: "bg-sage-soft" },
  { src: "/images/gallery-8.jpg", alt: "Pink ladyfinger charlotte cake tied with a ribbon", span: "row-span-2", fallback: "bg-rose-soft" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-pad bg-cream-100">
      <div className="container-content">
        <div className="mb-12 max-w-2xl text-left">
          <Reveal>
            <span className="eyebrow mb-5">
              <span className="h-px w-6 bg-rose-deep/50" />
              The Gallery
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-balance text-4xl font-bold leading-tight sm:text-5xl">
              A little look book
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost mt-6"
            >
              <InstagramIcon className="h-4 w-4" />
              See more on {INSTAGRAM_HANDLE}
            </a>
          </Reveal>
        </div>

        <div className="grid auto-rows-[minmax(140px,auto)] grid-cols-2 gap-3 sm:auto-rows-[minmax(180px,auto)] sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {PHOTOS.map((photo, i) => (
            <motion.figure
              key={photo.src}
              variants={fadeUpItem}
              custom={(i % 4) * 0.07}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className={`group relative overflow-hidden rounded-2xl shadow-soft sm:rounded-3xl ${photo.span}`}
            >
              <SmartImage
                src={photo.src}
                alt={photo.alt}
                fallbackClassName={photo.fallback}
                fallbackLabel={`Gallery ${i + 1}`}
                className="h-full w-full"
                imgClassName="transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cocoa/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
