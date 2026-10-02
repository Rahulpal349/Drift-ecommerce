"use client";

import { useLayoutEffect, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight, Heart, ShoppingBag, Star } from "lucide-react";
import products from "@/data/products";
import TiltCard from "./TiltCard";

gsap.registerPlugin(ScrollTrigger);

export default function TrendingSarees() {
  const sectionRef = useRef(null);
  const scrollerRef = useRef(null);
  const isHoveringRef = useRef(false);
  const rafRef = useRef(null);

  const displayProducts = [...products, ...products];

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const step = () => {
      if (!isHoveringRef.current) {
        scroller.scrollLeft += 2;
        if (scroller.scrollLeft >= scroller.scrollWidth / 2) {
          scroller.scrollLeft = 0;
        }
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const scrollByCard = (dir) => {
    scrollerRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal-up").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50, rotateX: -40, transformPerspective: 1000 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-offwhite px-6 pb-10 pt-16 md:px-14 md:pb-12 md:pt-20">
      <div className="reveal-up mb-10 flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] text-amber-700/60">TRENDING NOW</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Popular Sarees
          </h2>
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Scroll left"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-neu transition-transform hover:scale-105"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Scroll right"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-800 text-white transition-transform hover:scale-105"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        onMouseEnter={() => (isHoveringRef.current = true)}
        onMouseLeave={() => (isHoveringRef.current = false)}
        className="reveal-up flex gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {displayProducts.map((product, i) => (
          <TiltCard
            key={`${product.id}-${i}`}
            className="flex w-[300px] shrink-0 flex-col rounded-3xl bg-white p-4 shadow-neu"
            tiltAmount={6}
          >
            <div className="relative h-72 overflow-hidden rounded-2xl bg-[#FAF7F2]">
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
                className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-ink/50 shadow-sm transition-colors hover:text-rose-500 hover:bg-white"
              >
                <Heart size={14} strokeWidth={2} />
              </button>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                draggable={false}
              />
            </div>
            <div className="mt-4 flex-1">
              <div className="flex items-center gap-1 mb-1.5">
                <Star size={12} className="fill-amber-400 text-amber-400" />
                <span className="text-xs font-semibold text-ink">{product.rating}</span>
                <span className="text-xs text-ink/40">({product.reviews})</span>
              </div>
              <p className="text-sm font-semibold text-ink leading-snug">{product.name}</p>
              <p className="mt-0.5 text-xs text-ink/40">{product.fabric}</p>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-bold text-ink">₹{product.price.toLocaleString("en-IN")}</span>
                  {product.originalPrice && (
                    <span className="text-xs text-ink/35 line-through">₹{product.originalPrice.toLocaleString("en-IN")}</span>
                  )}
                </div>
                <button
                  type="button"
                  aria-label={`Add ${product.name} to cart`}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-800 transition-colors hover:bg-amber-800 hover:text-white"
                >
                  <ShoppingBag size={14} strokeWidth={1.75} />
                </button>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
