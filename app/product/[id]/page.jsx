"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronRight, Heart, Minus, Plus, ShoppingBag, Star, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import products from "@/data/products";

export default function ProductPage() {
  const params = useParams();
  const productId = parseInt(params.id, 10);
  
  const product = products.find((p) => p.id === productId) || products[0];

  const [selectedColor, setSelectedColor] = useState(product.colors[0].hex);
  const [quantity, setQuantity] = useState(1);

  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      <Navbar />
      
      <div className="px-6 py-8 md:px-14 lg:px-24">
        {/* Breadcrumbs */}
        <nav className="mb-8 flex items-center gap-2 text-xs font-semibold tracking-wide text-ink/50">
          <Link href="/" className="transition-colors hover:text-ink">HOME</Link>
          <ChevronRight size={14} />
          <Link href="/shop" className="transition-colors hover:text-ink">SHOP</Link>
          <ChevronRight size={14} />
          <span className="text-ink uppercase">{product.category}</span>
        </nav>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Product Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-white shadow-neu">
              {product.badge && (
                <span className={`absolute left-5 top-5 z-10 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider text-white ${
                  product.badge === "Sale" ? "bg-rose-600" : "bg-amber-800"
                }`}>
                  {product.badge}
                </span>
              )}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col pt-4 lg:col-span-6 lg:pt-10">
            <div className="flex items-center gap-1 mb-3">
              <Star size={16} className="fill-amber-400 text-amber-400" />
              <span className="text-sm font-semibold text-ink">{product.rating}</span>
              <span className="text-sm text-ink/40">({product.reviews} reviews)</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-ink md:text-5xl">{product.name}</h1>
            <p className="mt-2 text-sm font-semibold text-ink/50 tracking-wide uppercase">{product.fabric}</p>
            
            <div className="mt-6 flex items-end gap-4">
              <p className="text-3xl font-bold text-ink">
                ₹{product.price.toLocaleString("en-IN")}
              </p>
              {product.originalPrice && (
                <p className="mb-1 text-lg text-ink/40 line-through">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </p>
              )}
            </div>

            <p className="mt-8 text-base leading-relaxed text-ink/70">
              {product.description}
            </p>

            {/* Colors */}
            <div className="mt-10">
              <h3 className="text-xs font-semibold tracking-widest text-ink/50 mb-4">SELECT COLOR</h3>
              <div className="flex flex-wrap gap-4">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.hex)}
                    className={`group relative flex h-12 items-center gap-3 rounded-full border px-4 transition-all ${
                      selectedColor === color.hex
                        ? "border-amber-800 bg-amber-50 shadow-sm"
                        : "border-black/10 bg-white hover:border-black/30"
                    }`}
                  >
                    <span
                      className="h-5 w-5 rounded-full border border-black/10 shadow-sm"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className={`text-sm font-semibold ${selectedColor === color.hex ? "text-amber-900" : "text-ink/70"}`}>
                      {color.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-12 flex items-center gap-6">
              {/* Quantity */}
              <div className="flex h-14 items-center gap-6 rounded-full bg-white px-6 shadow-sm border border-black/5">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-ink/40 hover:text-ink transition-colors"
                >
                  <Minus size={18} />
                </button>
                <span className="w-4 text-center font-bold text-ink">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-ink/40 hover:text-ink transition-colors"
                >
                  <Plus size={18} />
                </button>
              </div>

              {/* Add to Cart */}
              <button className="flex h-14 flex-1 items-center justify-center gap-3 rounded-full bg-amber-800 px-8 text-base font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] hover:bg-amber-900">
                <ShoppingBag size={20} />
                Add to Cart
              </button>

              {/* Wishlist */}
              <button className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white border border-black/5 text-ink/40 shadow-sm transition-all hover:text-rose-500 hover:border-rose-200 hover:bg-rose-50">
                <Heart size={22} />
              </button>
            </div>
            
            {/* Guarantee */}
            <div className="mt-12 border-t border-black/5 pt-8">
              <ul className="space-y-3 text-sm font-medium text-ink/60">
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  In stock, ready to ship
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-800" />
                  100% Authentic Handwoven Saree
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  Easy 7-day returns
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
