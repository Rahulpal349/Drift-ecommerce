"use client";

import Navbar from "@/components/Navbar";
import { ArrowRight } from "lucide-react";

export default function CollectionsPage() {
  const collections = [
    { id: 1, name: "Urban Core", items: "12 Items", image: "https://images.unsplash.com/photo-1523398002811-999aa8e9f5b9?q=80&w=1000&auto=format&fit=crop" },
    { id: 2, name: "Midnight Drop", items: "8 Items", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1000&auto=format&fit=crop" },
    { id: 3, name: "Essentials", items: "24 Items", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <Navbar variant="hero" />
      <main className="px-8 py-20 md:px-14">
        <h1 className="text-5xl font-bold tracking-tighter text-ink md:text-7xl">Collections</h1>
        <p className="mt-4 text-ink/60">Curated drops. Exclusive pieces.</p>
        
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {collections.map((col) => (
            <div key={col.id} className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-black/5">
              <img src={col.image} alt={col.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 flex w-full items-end justify-between p-8">
                <div>
                  <p className="text-sm font-semibold tracking-wider text-white/70">{col.items}</p>
                  <h2 className="mt-2 text-3xl font-bold text-white">{col.name}</h2>
                </div>
                <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink transition-transform hover:scale-110">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
