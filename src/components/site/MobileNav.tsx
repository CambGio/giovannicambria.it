"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/nav";
import {
  CITY,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  TAGLINE,
  TAGLINE_SUB,
} from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Chiude il pannello quando cambia rotta. Aggiustamento di stato
  // durante il render, come da doc React, al posto di un effect.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Chiudi menu" : "Apri menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((v) => !v)}
        className="-mr-2 flex h-11 w-11 items-center justify-center text-ink md:hidden"
      >
        <span className="sr-only">{open ? "Chiudi" : "Menu"}</span>
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="square"
          aria-hidden="true"
        >
          {open ? (
            <>
              <line x1="4" y1="4" x2="18" y2="18" />
              <line x1="18" y1="4" x2="4" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="6.5" x2="19" y2="6.5" />
              <line x1="3" y1="11" x2="19" y2="11" />
              <line x1="3" y1="15.5" x2="19" y2="15.5" />
            </>
          )}
        </svg>
      </button>

      {open ? (
        <div
          id="mobile-nav-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Menu di navigazione"
          className="fixed inset-0 z-50 flex flex-col bg-paper md:hidden"
        >
          <div className="flex items-center justify-end px-6 py-4">
            <button
              type="button"
              aria-label="Chiudi menu"
              onClick={() => setOpen(false)}
              className="-mr-2 flex h-11 w-11 items-center justify-center text-ink"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
                aria-hidden="true"
              >
                <line x1="4" y1="4" x2="18" y2="18" />
                <line x1="18" y1="4" x2="4" y2="18" />
              </svg>
            </button>
          </div>

          <nav
            aria-label="Principale"
            className="flex flex-1 flex-col justify-center px-8"
          >
            <ul className="flex flex-col gap-7">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-display text-[40px] leading-[1.05] tracking-[-0.02em] text-ink transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-rule px-8 py-6">
            <p className="font-serif text-[15px] leading-[1.4] text-ink-muted">
              {TAGLINE}
            </p>
            <p className="mt-1 font-serif text-[15px] leading-[1.4] text-ink-muted">
              {TAGLINE_SUB}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.06em] text-ink-muted">
              <a
                href={`mailto:${EMAIL}`}
                className="transition-colors hover:text-accent"
              >
                {EMAIL}
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={`tel:${PHONE_TEL}`}
                className="transition-colors hover:text-accent"
              >
                {PHONE_DISPLAY}
              </a>
              <span aria-hidden="true">·</span>
              <span>{CITY}</span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
