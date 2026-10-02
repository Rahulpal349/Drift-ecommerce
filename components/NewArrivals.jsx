"use client";

import { useLayoutEffect, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, Star } from "lucide-react";
import TiltCard from "./TiltCard";
import Link from "next/link";
import products from "@/data/products";

gsap.registerPlugin(ScrollTrigger);

// Get the specific products we want to feature as new arrivals
const arrivalIds = [6, 7, 4, 3];
const arrivals = arrivalIds.map(id => products.find(p => p.id === id));

export default function NewArrivals() {
  const sectionRef = useRef(null);
  const scrollerRef = useRef(null);
  const isHoveringRef = useRef(false);
  const rafRef = useRef(null);

  const displayArrivals = [...arrivals, ...arrivals, ...arrivals, ...arrivals];

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Start in the middle so we have room to scroll left
    // We do this after a tiny delay to ensure layout is computed
    setTimeout(() => {
      if (scroller) {
        scroller.scrollLeft = scroller.scrollWidth / 2;
      }
    }, 100);

    const step = () => {
      if (!isHoveringRef.current) {
        scroller.scrollLeft -= 2;
        
        if (scroller.scrollLeft <= 0) {
          scroller.scrollLeft = scroller.scrollWidth / 2;
        }
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".arrival-reveal").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50, rotateX: -40, transformPerspective: 1000 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            delay: i * 0.06,
            ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 88%" },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-offwhite px-6 pt-16 pb-24 md:px-14 md:pt-20 md:pb-32">
      <div className="arrival-reveal mb-10 flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] text-amber-700/60">JUST ARRIVED</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            New Arrivals
          </h2>
        </div>
        <Link
          href="/shop"
          className="hidden text-xs font-semibold tracking-wide text-amber-800 underline underline-offset-4 decoration-amber-300 transition-colors hover:text-ink sm:block"
        >
          View All Sarees
        </Link>
      </div>

      <div 
        ref={scrollerRef}
        onMouseEnter={() => (isHoveringRef.current = true)}
        onMouseLeave={() => (isHoveringRef.current = false)}
        className="arrival-reveal flex gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {displayArrivals.map((item, i) => (
          <div key={`${item.id}-${i}`} className="group flex w-[280px] shrink-0 flex-col">
            <TiltCard tiltAmount={8} className="relative flex aspect-[3/4] items-end overflow-hidden rounded-3xl bg-white shadow-neu">
              <Link href={`/product/${item.id}`} className="absolute inset-0 z-0" />
              {/* Badge */}
              <span className={`absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-[10px] font-semibold tracking-wide text-white ${
                item.badge === "Sale" ? "bg-rose-600" : "bg-amber-800"
              }`}>
                {item.badge}
              </span>
              {/* Wishlist */}
              <button
                type="button"
                aria-label="Add to wishlist"
                className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-ink/50 shadow-sm transition-colors hover:text-rose-500 hover:bg-white"
              >
                <Heart size={14} strokeWidth={2} />
              </button>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Link href={`/product/${item.id}`} className="block h-full w-full pointer-events-none">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  draggable={false}
                />
              </Link>
            </TiltCard>
            <Link href={`/product/${item.id}`}>
              <p className="mt-4 text-sm font-semibold text-ink hover:underline">{item.name}</p>
            </Link>
            <p className="mt-1 text-xs leading-snug text-ink/50 line-clamp-2">{item.description}</p>
            <p className="mt-2 text-sm font-semibold text-ink">
              ₹{item.price.toLocaleString("en-IN")}
              {item.originalPrice && (
                <span className="ml-2 text-ink/35 line-through">
                  ₹{item.originalPrice.toLocaleString("en-IN")}
                </span>
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
