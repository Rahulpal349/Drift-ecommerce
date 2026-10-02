"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CollectionsPage() {
  const categories = [
    { key: "banarasi", label: "Banarasi Silk", image: "/images/sarees/banarasi.jpg", items: "45+ Designs" },
    { key: "kanjivaram", label: "Kanjivaram Silk", image: "/images/sarees/kanjivaram.jpg", items: "38+ Designs" },
    { key: "tussar", label: "Tussar Silk", image: "/images/sarees/tussar.jpg", items: "22+ Designs" },
    { key: "cotton", label: "Cotton Sarees", image: "/images/sarees/cotton.jpg", items: "50+ Designs" },
    { key: "georgette", label: "Georgette", image: "/images/sarees/georgette.jpg", items: "30+ Designs" },
    { key: "chiffon", label: "Chiffon", image: "/images/sarees/chiffon.jpg", items: "25+ Designs" },
    { key: "organza", label: "Organza", image: "/images/sarees/organza.jpg", items: "18+ Designs" },
    { key: "bandhani", label: "Bandhani", image: "/images/sarees/bandhani.jpg", items: "20+ Designs" },
  ];

  const featuredCollections = [
    { key: "wedding", label: "Wedding Collection", image: "/images/sarees/banarasi.jpg", items: "Bridal Exclusives" },
    { key: "festive", label: "Festive Collection", image: "/images/sarees/bandhani.jpg", items: "Celebration Wear" },
    { key: "everyday", label: "Everyday Elegance", image: "/images/sarees/cotton.jpg", items: "Casual Comfort" },
  ];

  return (
    <div className="min-h-screen bg-offwhite">
      <Navbar />
      <main className="px-6 py-12 md:px-14">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-[0.25em] text-amber-700/60 mb-2">CURATED</p>
          <h1 className="text-4xl font-bold tracking-tight text-ink md:text-6xl">
            Saree <span className="font-serif italic text-amber-800/80">Collections</span>
          </h1>
          <p className="mt-4 text-ink/60 max-w-lg">Explore our diverse range of handcrafted sarees, organized by weave, occasion, and style.</p>
        </div>
        
        {/* Featured Collections Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-ink mb-8">Featured Edits</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredCollections.map((col) => (
              <Link href={`/shop?collection=${col.key}`} key={col.key} className="group relative aspect-[16/9] overflow-hidden rounded-3xl bg-black/5 shadow-neu">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={col.image} alt={col.label} className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 flex w-full items-end justify-between p-6">
                  <div>
                    <p className="text-xs font-semibold tracking-wider text-amber-200 mb-1">{col.items}</p>
                    <h3 className="text-2xl font-bold text-white">{col.label}</h3>
                  </div>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white transition-transform hover:scale-110 hover:bg-amber-800">
                    <ArrowRight size={18} />
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Shop by Weave Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-ink mb-8">Shop by Weave</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
            {categories.map((cat) => (
              <Link href={`/shop?category=${cat.key}`} key={cat.key} className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#FAF7F2] shadow-neu">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={cat.image} alt={cat.label} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 flex w-full flex-col justify-end p-5">
                  <h3 className="text-lg font-bold text-white md:text-xl">{cat.label}</h3>
                  <p className="mt-1 text-xs text-white/70">{cat.items}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
