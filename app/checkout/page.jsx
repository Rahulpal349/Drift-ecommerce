"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <Navbar variant="hero" />
      <main className="px-8 py-16 md:px-14 lg:px-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left Form */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-ink">Checkout</h1>
            <p className="mt-2 text-sm text-ink/60">Complete your order details below.</p>
            
            <form className="mt-10 space-y-8">
              <section>
                <h2 className="text-lg font-semibold text-ink">Contact Information</h2>
                <div className="mt-4 space-y-4">
                  <input type="email" placeholder="Email Address" className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition-all focus:border-ink/40" />
                  <input type="tel" placeholder="Phone Number" className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition-all focus:border-ink/40" />
                </div>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-ink">Shipping Address</h2>
                <div className="mt-4 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition-all focus:border-ink/40" />
                    <input type="text" placeholder="Last Name" className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition-all focus:border-ink/40" />
                  </div>
                  <input type="text" placeholder="Street Address" className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition-all focus:border-ink/40" />
                  <div className="grid grid-cols-3 gap-4">
                    <input type="text" placeholder="City" className="col-span-1 rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition-all focus:border-ink/40" />
                    <input type="text" placeholder="State" className="col-span-1 rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition-all focus:border-ink/40" />
                    <input type="text" placeholder="ZIP" className="col-span-1 rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition-all focus:border-ink/40" />
                  </div>
                </div>
              </section>

              <Link href="/payment" className="inline-block w-full">
                <button type="button" className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-ink py-4 text-sm font-semibold text-white transition-transform hover:scale-[1.01]">
                  CONTINUE TO PAYMENT <ArrowRight size={16} />
                </button>
              </Link>
            </form>
          </div>

          {/* Right Summary */}
          <div className="hidden lg:block">
            <div className="sticky top-8 rounded-3xl bg-black/[0.02] p-8 shadow-inner">
              <h2 className="text-xl font-bold text-ink">In your bag</h2>
              <div className="mt-8 space-y-6">
                {[1, 2].map((i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="h-16 w-12 overflow-hidden rounded-md bg-black/10">
                      <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=200&auto=format&fit=crop" alt="Item" className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-ink">Oversized Heavyweight Tee</p>
                      <p className="text-xs text-ink/50">Qty: 1</p>
                    </div>
                    <p className="text-sm font-semibold text-ink">₹3,700.00</p>
                  </div>
                ))}
                <div className="my-6 border-t border-ink/10"></div>
                <div className="flex justify-between text-lg font-bold text-ink">
                  <span>Total</span>
                  <span>₹11,664.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
