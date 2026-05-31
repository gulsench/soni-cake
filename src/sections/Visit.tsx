import Reveal from "../components/Reveal";
import {
  WHATSAPP_URL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  ADDRESS,
  HOURS,
  MAPS_EMBED_SRC,
} from "../lib/site";
import { WhatsAppIcon, InstagramIcon, PinIcon, ClockIcon } from "../components/icons";

export default function Visit() {
  return (
    <section id="visit" className="section-pad bg-cream">
      <div className="container-content">
        <div className="overflow-hidden rounded-[2rem] border border-cream-200 bg-cream-100 shadow-soft">
          <div className="grid md:grid-cols-2">
            {/* Details */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
              <Reveal>
                <span className="eyebrow mb-5">
                  <span className="h-px w-6 bg-rose-deep/50" />
                  Visit / Order
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-balance text-4xl font-bold leading-tight sm:text-5xl">
                  Come say hello
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-md text-lg font-light leading-relaxed text-cocoa-light">
                  Orders are taken on WhatsApp. It's the quickest way to reach us. Pop by our
                  kitchen in Indranagar for collection.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <ul className="mt-8 space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-rose-soft text-rose-deep">
                      <PinIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-cocoa-muted">
                        Address
                      </p>
                      <p className="text-base text-cocoa">{ADDRESS}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sage-soft text-sage">
                      <ClockIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-cocoa-muted">
                        Takeout hours
                      </p>
                      <p className="text-base text-cocoa">{HOURS}</p>
                    </div>
                  </li>
                </ul>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                    <WhatsAppIcon className="h-5 w-5" />
                    Order on WhatsApp
                  </a>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                    <InstagramIcon className="h-4 w-4" />
                    {INSTAGRAM_HANDLE}
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Map */}
            <div className="relative min-h-[280px] bg-sage-soft sm:min-h-[360px] md:min-h-[420px] lg:min-h-full">
              {/* Google Maps embed for the shop address */}
              <iframe
                title="Soni Cake location on Google Maps"
                src={MAPS_EMBED_SRC}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
