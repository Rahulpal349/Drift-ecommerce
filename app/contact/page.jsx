"use client";

import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <Navbar variant="hero" />
      <main className="mx-auto max-w-4xl px-8 py-24 md:px-14">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tighter text-ink md:text-7xl">Get in touch</h1>
          <p className="mt-4 text-ink/60">Have a question about a drop? We're here.</p>
        </div>

        <form className="mt-16 space-y-8 rounded-3xl bg-white p-8 shadow-neu md:p-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-ink">First Name</label>
              <input type="text" className="w-full rounded-xl border border-ink/10 bg-black/[0.02] px-4 py-3 text-ink outline-none transition-colors focus:border-ink/30 focus:bg-white" placeholder="John" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-ink">Last Name</label>
              <input type="text" className="w-full rounded-xl border border-ink/10 bg-black/[0.02] px-4 py-3 text-ink outline-none transition-colors focus:border-ink/30 focus:bg-white" placeholder="Doe" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-ink">Email</label>
            <input type="email" className="w-full rounded-xl border border-ink/10 bg-black/[0.02] px-4 py-3 text-ink outline-none transition-colors focus:border-ink/30 focus:bg-white" placeholder="john@example.com" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-ink">Message</label>
            <textarea rows={4} className="w-full resize-none rounded-xl border border-ink/10 bg-black/[0.02] px-4 py-3 text-ink outline-none transition-colors focus:border-ink/30 focus:bg-white" placeholder="How can we help?" />
          </div>
          <button type="button" className="w-full rounded-xl bg-ink py-4 text-sm font-semibold tracking-wide text-white transition-transform hover:scale-[1.02]">
            SEND MESSAGE
          </button>
        </form>
      </main>
    </div>
  );
}
