"use client";

import { Search, ShoppingBag, Heart, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({ cartCount = 2 }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between gap-4 px-6 py-5 md:px-10">
        <Link href="/" className="flex shrink-0 items-center gap-2.5 text-ink hover:opacity-80 transition-opacity">
          <span className="font-serif text-2xl font-semibold tracking-tight lowercase italic">drift.</span>
        </Link>

        <ul className="hidden items-center gap-7 text-[13px] font-medium tracking-wide text-ink/65 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (pathname !== '/' && link.href !== '/' && pathname.startsWith(link.href));
            return (
              <li key={link.label} className="relative flex flex-col items-center gap-1.5">
                <Link
                  href={link.href}
                  className={isActive ? "text-ink font-semibold" : "transition-colors hover:text-ink"}
                >
                  {link.label}
                </Link>
                {isActive && <span className="h-1 w-1 rounded-full bg-amber-700" />}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1.5 rounded-full bg-white/70 p-1.5 shadow-neu backdrop-blur-md">
          <button
            aria-label="Search"
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink/80 transition-colors hover:bg-black/[0.04]"
          >
            <Search size={17} strokeWidth={1.75} />
          </button>
          <Link
            href="/cart"
            aria-label="Wishlist"
            className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full text-ink/80 transition-colors hover:bg-black/[0.04]"
          >
            <Heart size={17} strokeWidth={1.75} />
          </Link>
          <Link
            href="/cart"
            aria-label="Cart"
            className="relative flex h-9 w-9 items-center justify-center rounded-full text-ink/80 transition-colors hover:bg-black/[0.04]"
          >
            <ShoppingBag size={17} strokeWidth={1.75} />
            <span className="absolute right-0.5 top-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-amber-700 text-[9px] font-semibold text-white">
              {cartCount}
            </span>
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink/80 transition-colors hover:bg-black/[0.04] lg:hidden"
          >
            {mobileOpen ? <X size={17} strokeWidth={1.75} /> : <Menu size={17} strokeWidth={1.75} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[72px] z-50 bg-white/95 backdrop-blur-lg px-6 py-8 lg:hidden">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-lg font-medium ${isActive ? "text-amber-700" : "text-ink/70"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
