"use client";

import Navbar from "@/components/Navbar";
import { Minus, Plus, X } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const items = [];

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Navbar />
      <main className="px-8 py-16 md:px-14 lg:px-24">
        <h1 className="text-4xl font-bold tracking-tight text-ink md:text-5xl">Your Cart</h1>
        
        {items.length === 0 ? (
          <div className="mt-12 flex flex-col items-center justify-center rounded-3xl bg-white py-24 shadow-neu">
            <p className="mb-6 text-lg font-medium text-ink/60">Your cart is currently empty.</p>
            <Link href="/shop">
              <button className="rounded-full bg-amber-800 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] hover:bg-amber-900">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="divide-y divide-ink/5 border-t border-ink/5">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-6 py-8">
                    <div className="h-32 w-24 shrink-0 overflow-hidden rounded-xl bg-black/5">
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-ink">{item.name}</h3>
                          <p className="mt-1 text-sm text-ink/50">{item.color} / {item.size}</p>
                        </div>
                        <button className="text-ink/40 transition-colors hover:text-red-500">
                          <X size={20} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 rounded-full border border-ink/10 px-3 py-1">
                          <button className="text-ink/50 hover:text-ink"><Minus size={14} /></button>
                          <span className="text-sm font-semibold text-ink">1</span>
                          <button className="text-ink/50 hover:text-ink"><Plus size={14} /></button>
                        </div>
                        <p className="font-semibold text-ink">₹{item.price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-4">
              <div className="rounded-3xl bg-white p-8 shadow-neu">
                <h2 className="text-xl font-bold text-ink">Order Summary</h2>
                <div className="mt-6 space-y-4 text-sm text-ink/70">
                  <div className="flex justify-between"><span>Subtotal</span><span className="font-semibold text-ink">₹0.00</span></div>
                  <div className="flex justify-between"><span>Shipping</span><span className="font-semibold text-ink">Free</span></div>
                  <div className="flex justify-between"><span>Tax</span><span className="font-semibold text-ink">₹0.00</span></div>
                  <div className="my-4 border-t border-ink/10"></div>
                  <div className="flex justify-between text-base">
                    <span className="font-bold text-ink">Total</span>
                    <span className="font-bold text-ink">₹0.00</span>
                  </div>
                </div>
                <Link href="/checkout">
                  <button className="mt-8 w-full rounded-xl bg-amber-800 py-4 text-sm font-semibold tracking-wide text-white transition-transform hover:scale-[1.02] hover:bg-amber-900">
                    PROCEED TO CHECKOUT
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
