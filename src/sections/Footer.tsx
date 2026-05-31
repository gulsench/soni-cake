import {
  WHATSAPP_URL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  ADDRESS_SHORT,
} from "../lib/site";
import { WhatsAppIcon, InstagramIcon } from "../components/icons";

export default function Footer() {
  return (
    <footer className="bg-black text-cream-100">
      <div className="container-content px-5 py-14 pb-[calc(3.5rem+env(safe-area-inset-bottom,0px))] sm:px-8">
        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:text-left">
            <img
              src="/logo.jpg"
              alt="Soni Cake logo"
              className="h-16 w-16 rounded-full object-cover shadow-card"
            />
            <div>
              <a href="#top" className="font-display text-3xl font-bold tracking-tight text-cream">
                Soni Cake
              </a>
              <p className="mt-2 text-sm font-light text-cream-100/70">
                Handcrafted cakes &amp; treats · {ADDRESS_SHORT}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order on WhatsApp"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-cream-100/10 text-cream transition-colors hover:bg-rose hover:text-white"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow Soni Cake on Instagram, ${INSTAGRAM_HANDLE}`}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-cream-100/10 text-cream transition-colors hover:bg-rose hover:text-white"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-cream-100/15 pt-6 text-center text-xs text-cream-100/55 sm:text-left">
          <p>© {new Date().getFullYear()} Soni Cake. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
