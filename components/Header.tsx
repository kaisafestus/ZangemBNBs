"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/properties", label: "Apartments" },
  { href: "/investments", label: "Invest" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const linkClassName = (href: string) =>
    `relative text-sm font-medium tracking-[0.08em] uppercase transition ${
      pathname === href
        ? "text-[#ffd3a8]"
        : "text-white/90 hover:text-[#f4aa57]"
    }`;

  return (
    <header className="relative z-50 border-b border-[#f08a24]/22 bg-[linear-gradient(180deg,rgba(12,8,6,0.95),rgba(20,12,8,0.90))] shadow-lg shadow-black/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <img
            src="/images/logo.png"
            alt="Zangem BnBs logo"
            className="h-14 w-14 rounded-full border border-[#f08a24]/18 bg-white/90 object-contain p-1 shadow-sm"
          />

          <div className="min-w-0">
            <div className="truncate font-poppins text-lg font-bold tracking-[0.04em] text-white sm:text-xl">
              Zangem BnBs
            </div>
            <div className="truncate text-[10px] uppercase tracking-[0.22em] text-[#ffc48c] sm:text-[11px] sm:tracking-[0.28em]">
              Your Home Away From Home
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkClassName(item.href)}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/#booking"
            className="inline-flex items-center rounded-full bg-[#d97706] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:translate-y-[-1px] hover:bg-[#c96a04]"
          >
            Book Your Stay
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="rounded-full border border-[#f08a24]/20 bg-white/8 p-2 text-[#ffbf7a] shadow-sm transition hover:bg-white/12 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {open && (
        <div
          id="mobile-navigation"
          className="absolute left-0 right-0 top-full border-t border-[#f08a24]/14 bg-[rgba(20,11,8,0.98)] shadow-xl shadow-black/30 md:hidden"
        >
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="space-y-2 rounded-2xl border border-[#f08a24]/18 bg-[rgba(34,18,13,0.96)] p-3 shadow-md shadow-black/20">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${
                    pathname === item.href
                      ? "bg-[#d97706] text-white"
                      : "text-white/92 hover:bg-white/8 hover:text-[#ffd3a8]"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/#booking"
                className="mt-2 block rounded-xl bg-[#f08a24] px-4 py-3 text-center text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Book Your Stay
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
