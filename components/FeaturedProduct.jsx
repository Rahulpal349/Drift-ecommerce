"use client";

import Image from "next/image";
import { Star, Heart, ShoppingBag, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { useState, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const collections = [
  { key: "bestsellers", label: "Best Sellers", count: "25 Sarees", image: "/images/sarees/kanjivaram.jpg" },
  { key: "new-arrivals", label: "New Arrivals", count: "18 Sarees", image: "/images/sarees/organza.jpg" },
  { key: "festive", label: "Festive Collection", count: "30 Sarees", image: "/images/sarees/bandhani.jpg" },
  { key: "wedding", label: "Wedding Collection", count: "22 Sarees", image: "/images/sarees/banarasi.jpg" },
  { key: "everyday", label: "Everyday Elegance", count: "40 Sarees", image: "/images/sarees/cotton.jpg" },
  { key: "under-1999", label: "Under ₹1,999", count: "15 Sarees", image: "/images/sarees/chiffon.jpg" },
];

export default function FeaturedCollections() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".feat-reveal",
        { opacity: 0, y: 50, rotateX: -40, transformPerspective: 1000 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#FAF7F2] py-20 px-6 md:px-14">
      <div className="max-w-[1400px] mx-auto">
        <div className="feat-reveal mb-12 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-amber-700/60 mb-3">HANDPICKED FOR YOU</p>
          <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Featured Collections
          </h2>
          <p className="mt-3 mx-auto max-w-md text-sm text-ink/50">
            Curated selections for every occasion — from festive celebrations to everyday elegance.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {collections.map((col) => (
            <Link
              key={col.key}
              href={`/collections?type=${col.key}`}
              className="feat-reveal group relative h-[250px] sm:h-[320px] overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-neu"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={col.image}
                alt={col.label}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <p className="text-sm sm:text-xl font-bold text-white leading-tight">{col.label}</p>
                <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-sm text-white/70">{col.count}</p>
                <div className="mt-2 sm:mt-4 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 sm:gap-2 rounded-full bg-white px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-semibold text-ink transition-transform group-hover:scale-105">
                    Shop Now
                    <ShoppingBag size={12} className="sm:h-[13px] sm:w-[13px]" strokeWidth={2} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Trust badges */}
        <div className="feat-reveal mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: Truck, title: "Free Shipping", desc: "On orders above ₹999 across India" },
            { icon: RotateCcw, title: "Easy Returns", desc: "7-day hassle-free return policy" },
            { icon: ShieldCheck, title: "Authenticity Guaranteed", desc: "100% genuine handcrafted sarees" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-neu">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-800">
                <Icon size={22} strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">{title}</p>
                <p className="mt-0.5 text-xs text-ink/50">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
