"use client";

import Navbar from "@/components/Navbar";
import { Lock } from "lucide-react";

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <Navbar variant="hero" />
      <main className="mx-auto max-w-lg px-8 py-20 md:px-14">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-black/5 text-ink">
            <Lock size={24} />
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-ink">Secure Payment</h1>
          <p className="mt-2 text-sm text-ink/60">All transactions are secure and encrypted.</p>
        </div>

        <div className="mt-12 rounded-3xl bg-white p-8 shadow-neu-lg">
          <form className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-semibold text-ink">Card Number</label>
              <input type="text" placeholder="0000 0000 0000 0000" className="w-full rounded-xl border border-ink/10 bg-black/[0.02] px-4 py-3 font-mono text-sm tracking-widest text-ink outline-none transition-colors focus:border-ink/40" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-2 block text-sm font-semibold text-ink">Expiry Date</label>
                <input type="text" placeholder="MM/YY" className="w-full rounded-xl border border-ink/10 bg-black/[0.02] px-4 py-3 font-mono text-sm tracking-widest text-ink outline-none transition-colors focus:border-ink/40" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-ink">CVC</label>
                <input type="text" placeholder="123" className="w-full rounded-xl border border-ink/10 bg-black/[0.02] px-4 py-3 font-mono text-sm tracking-widest text-ink outline-none transition-colors focus:border-ink/40" />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-ink">Cardholder Name</label>
              <input type="text" placeholder="Name on card" className="w-full rounded-xl border border-ink/10 bg-black/[0.02] px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-ink/40" />
            </div>

            <button type="button" className="mt-4 w-full rounded-xl bg-ink py-4 text-sm font-semibold tracking-wide text-white transition-transform hover:scale-[1.02]">
              PAY $140.40
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
