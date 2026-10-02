"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <Navbar variant="hero" />
      <main className="flex min-h-[70vh] flex-col items-center justify-center px-8 text-center md:px-14">
        <h1 className="text-[10rem] font-bold leading-none tracking-tighter text-ink/5">404</h1>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink md:text-5xl">Off the grid.</h2>
        <p className="mt-4 max-w-sm text-ink/60">
          The page you're looking for doesn't exist or has been moved to a new drop.
        </p>
        <Link href="/">
          <button className="mt-10 flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105">
            <ArrowLeft size={16} /> BACK TO HOME
          </button>
        </Link>
      </main>
    </div>
  );
}
