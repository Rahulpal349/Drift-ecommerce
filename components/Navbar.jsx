"use client";

import { Search, ShoppingBag, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const heroLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
];



function LogoMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2 L13.8 9.2 21 11 13.8 12.8 12 20 10.2 12.8 3 11 10.2 9.2 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Navbar({ cartCount = 2 }) {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between gap-4 px-8 py-6 md:px-10">
      <Link href="/" className="flex shrink-0 items-center gap-2 text-ink hover:opacity-80 transition-opacity">
        <LogoMark />
        <span className="text-sm font-semibold tracking-[0.25em]">DRIFT</span>
      </Link>

      <ul className="hidden items-center gap-5 text-sm font-medium text-ink/80 lg:flex lg:gap-8">
        {heroLinks.map((link) => {
          const isActive = pathname === link.href || (pathname !== '/' && link.href !== '/' && pathname.startsWith(link.href));
          return (
            <li key={link.label} className="relative flex flex-col items-center gap-1.5">
              <Link
                href={link.href}
                className={isActive ? "text-ink" : "transition-colors hover:text-ink"}
              >
                {link.label}
              </Link>
              {isActive && <span className="h-1 w-1 rounded-full bg-ink" />}
            </li>
          );
        })}
      </ul>

      <div className="flex items-center gap-1 rounded-full bg-white/70 p-1.5 shadow-neu backdrop-blur-md">
        <button
          aria-label="Search"
          className="flex h-9 w-9 items-center justify-center rounded-full text-ink/80 transition-colors hover:bg-black/[0.04]"
        >
          <Search size={17} strokeWidth={1.75} />
        </button>
        <Link
          href="/cart"
          aria-label="Cart"
          className="relative flex h-9 w-9 items-center justify-center rounded-full text-ink/80 transition-colors hover:bg-black/[0.04]"
        >
          <ShoppingBag size={17} strokeWidth={1.75} />
          <span className="absolute right-0.5 top-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-ink text-[9px] font-semibold text-white">
            {cartCount}
          </span>
        </Link>
        <button
          aria-label="Menu"
          className="flex h-9 w-9 items-center justify-center rounded-full text-ink/80 transition-colors hover:bg-black/[0.04]"
        >
          <Menu size={17} strokeWidth={1.75} />
        </button>
      </div>
    </nav>
  );
}
