import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { NAV_LINKS, WHATSAPP_URL, PHONE_DISPLAY } from "../lib/site";
import { WhatsAppIcon } from "./icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top,0px)] transition-all duration-500 ${
        scrolled
          ? "bg-cream/85 shadow-soft backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-content flex items-center justify-between px-5 py-3.5 sm:px-8">
        {/* Wordmark */}
        <a href="#top" className="group flex min-w-0 items-center gap-2.5" aria-label="Soni Cake, back to top">
          <img
            src="/logo.jpg"
            alt="Soni Cake logo"
            className="h-9 w-9 shrink-0 rounded-full object-cover shadow-soft ring-1 ring-cream-200 transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10"
          />
          <span className="truncate font-display text-lg font-bold tracking-tight text-cocoa sm:text-xl">
            Soni&nbsp;Cake
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-normal text-cocoa-light transition-colors hover:text-rose-deep
                         after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-rose-deep
                         after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp Soni Cake at ${PHONE_DISPLAY}`}
            className="btn-whatsapp hidden !px-5 !py-2.5 text-xs sm:text-sm lg:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0" />
            <span className="hidden xl:inline">{PHONE_DISPLAY}</span>
            <span className="xl:hidden">WhatsApp</span>
          </a>

          {/* Compact WhatsApp on tablet (nav is in mobile menu below lg) */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp Soni Cake at ${PHONE_DISPLAY}`}
            className="btn-whatsapp hidden !px-3 !py-2.5 md:inline-flex lg:hidden"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0" />
          </a>

          {/* Mobile / tablet menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full text-cocoa transition-colors hover:bg-rose-soft lg:hidden"
          >
            <div className="relative h-4 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
            className="mx-4 mb-3 max-h-[min(32rem,calc(100dvh-5rem-env(safe-area-inset-top,0px)))] overflow-y-auto overscroll-contain rounded-3xl border border-cream-200 bg-cream/95 p-3 shadow-card backdrop-blur-md lg:hidden"
          >
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-base text-cocoa-light transition-colors hover:bg-rose-soft hover:text-rose-deep"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-2 border-t border-cream-200 pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="btn-whatsapp w-full"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Order on WhatsApp
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
