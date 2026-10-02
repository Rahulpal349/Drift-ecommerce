"use client";

import { useState } from "react";
import { Heart, ShoppingBag, Star, SlidersHorizontal, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import products from "@/data/products";
import Link from "next/link";

const filters = [
  "All Sarees",
  "Silk Sarees",
  "Banarasi",
  "Kanjivaram",
  "Cotton",
  "Georgette",
  "Chiffon",
  "Organza",
  "Festive",
  "New Arrivals",
];

export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState("All Sarees");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = activeFilter === "All Sarees"
    ? products
    : products.filter(p =>
        p.category.toLowerCase().includes(activeFilter.toLowerCase()) ||
        p.fabric.toLowerCase().includes(activeFilter.toLowerCase())
      );

  return (
    <main className="bg-offwhite min-h-screen">
      <Navbar />

      <div className="px-6 pt-4 pb-8 md:px-14">
        {/* Header */}
        <div className="mb-8">
          <p className="text-xs font-semibold tracking-[0.25em] text-amber-700/60 mb-2">EXPLORE</p>
          <h1 className="text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Shop All <span className="font-serif italic text-amber-800/80">Sarees</span>
          </h1>
          <p className="mt-3 text-sm text-ink/50 max-w-lg">
            Discover our curated collection of handcrafted sarees from the finest weavers across India.
          </p>
        </div>

        {/* Filter pills */}
        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActiveFilter(f)}
              className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-colors ${
                activeFilter === f
                  ? "bg-amber-800 text-white"
                  : "bg-white text-ink/60 hover:text-ink shadow-neu"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Sort */}
        <div className="mb-8 flex items-center justify-between">
          <p className="text-sm text-ink/50">{filteredProducts.length} sarees found</p>
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={14} className="text-ink/40" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-sm font-medium text-ink/70 outline-none cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-white shadow-neu">
                {/* Badge */}
                {product.badge && (
                  <span className={`absolute left-3 top-3 z-10 rounded-full px-3 py-1 text-[10px] font-semibold tracking-wide text-white ${
                    product.badge === "Bestseller" ? "bg-amber-700" :
                    product.badge === "New" ? "bg-emerald-600" :
                    product.badge === "Sale" ? "bg-rose-600" : "bg-ink"
                  }`}>
                    {product.badge}
                  </span>
                )}
                {/* Wishlist */}
                <button
                  type="button"
                  aria-label="Add to wishlist"
                  className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-ink/50 shadow-sm transition-colors hover:text-rose-500"
                >
                  <Heart size={14} strokeWidth={2} />
                </button>
                {/* Quick add */}
                <button
                  type="button"
                  className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-center gap-2 rounded-xl bg-amber-800 py-2.5 text-xs font-semibold text-white opacity-0 transition-all duration-300 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                >
                  <ShoppingBag size={13} />
                  Quick Add to Cart
                </button>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  draggable={false}
                />
              </div>
              <div className="mt-3">
                <div className="flex items-center gap-1 mb-1">
                  <Star size={11} className="fill-amber-400 text-amber-400" />
                  <span className="text-xs font-semibold text-ink">{product.rating}</span>
                  <span className="text-xs text-ink/40">({product.reviews})</span>
                </div>
                <p className="text-sm font-semibold text-ink leading-snug">{product.name}</p>
                <p className="mt-0.5 text-xs text-ink/40">{product.fabric}</p>
                <div className="mt-1.5 flex items-baseline gap-2">
                  <span className="text-sm font-bold text-ink">₹{product.price.toLocaleString("en-IN")}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-xs text-ink/35 line-through">₹{product.originalPrice.toLocaleString("en-IN")}</span>
                      <span className="text-xs font-semibold text-emerald-600">
                        {Math.round((1 - product.price / product.originalPrice) * 100)}% off
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
