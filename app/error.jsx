"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function ErrorPage({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <Navbar variant="hero" />
      <main className="flex min-h-[70vh] flex-col items-center justify-center px-8 text-center md:px-14">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10 text-red-500">
          <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-ink md:text-4xl">Something went wrong</h2>
        <p className="mt-4 max-w-sm text-ink/60">
          An unexpected error occurred. We've logged the issue and are looking into it.
        </p>
        <button
          onClick={() => reset()}
          className="mt-10 rounded-full bg-ink px-8 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
        >
          TRY AGAIN
        </button>
      </main>
    </div>
  );
}
