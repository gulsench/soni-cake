import Reveal from "../components/Reveal";
import SmartImage from "../components/SmartImage";

export default function About() {
  return (
    <section id="about" className="section-pad bg-cream-100">
      <div className="container-content grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
        {/* Image pair */}
        <Reveal className="order-2 md:order-1 lg:order-1">
          <div className="relative">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5 sm:gap-4">
              {/* ABOUT IMAGE 1 — pink rose drip celebration cake (about-1.jpg) */}
              <SmartImage
                src="/images/about-1.jpg"
                alt="A blush-pink drip cake topped with fresh roses and macarons by Soni Cake"
                fallbackClassName="bg-rose-soft"
                fallbackLabel="Celebration cake"
                className="col-span-3 aspect-[4/5] rounded-2xl shadow-soft sm:rounded-3xl"
              />
              {/* ABOUT IMAGE 2 — blueberry baked cheesecake (about-2.jpg) */}
              <SmartImage
                src="/images/about-2.jpg"
                alt="A baked blueberry cheesecake in a Soni Cake box"
                fallbackClassName="bg-sage-soft"
                fallbackLabel="Cheesecake"
                className="col-span-2 mt-6 aspect-[3/4] rounded-2xl shadow-soft sm:mt-10 sm:rounded-3xl"
              />
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 md:order-2 lg:order-2">
          <Reveal>
            <span className="eyebrow mb-5">
              <span className="h-px w-6 bg-rose-deep/50" />
              Our Story
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-balance text-4xl font-bold leading-tight sm:text-5xl">
              Small-batch baking,
              <br className="hidden sm:block" /> made with love.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-5 text-lg font-light leading-relaxed text-cocoa-light">
              <p>
                Soni Cake is an independent home of handmade, fresh-to-order cakes in the
                heart of Agartala. Every cake is baked the day it's collected, never sitting
                in a fridge, using premium ingredients and real, balanced flavour.
              </p>
              <p>
                We're best known for our delicate{" "}
                <span className="font-medium text-cocoa">bento cakes</span>, silky{" "}
                <span className="font-medium text-cocoa">cheesecakes</span>, soft{" "}
                <span className="font-medium text-cocoa">tres leches</span> and show-stopping{" "}
                <span className="font-medium text-cocoa">celebration cakes</span>, each one
                designed around your moment.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 text-xl font-medium tracking-tight text-rose-deep">
              Baked fresh, just the way you imagined.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
