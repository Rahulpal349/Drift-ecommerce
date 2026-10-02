"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, Star } from "lucide-react";
import TiltCard from "./TiltCard";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const arrivals = [
  {
    key: "organza-bridal",
    image: "/images/sarees/organza.jpg",
    name: "Ivory Gold Organza",
    blurb: "Sheer organza with intricate gold thread embroidery and scalloped borders.",
    price: 9499,
    originalPrice: 13999,
    badge: "New",
  },
  {
    key: "tussar-art",
    image: "/images/sarees/tussar.jpg",
    name: "Madhubani Tussar Silk",
    blurb: "Handpainted Madhubani art on natural Tussar silk with peacock motifs.",
    price: 6999,
    originalPrice: null,
    badge: "New",
  },
  {
    key: "georgette-sequin",
    image: "/images/sarees/georgette.jpg",
    name: "Rose Pink Sequin Georgette",
    blurb: "Heavy sequin embroidery on flowing georgette with paisley work.",
    price: 7999,
    originalPrice: 10999,
    badge: "Sale",
  },
  {
    key: "cotton-jamdani",
    image: "/images/sarees/cotton.jpg",
    name: "Sky Blue Jamdani Cotton",
    blurb: "Lightweight handwoven Jamdani with delicate white floral motifs.",
    price: 3499,
    originalPrice: null,
    badge: "New",
  },
];

export default function NewArrivals() {
  const sectionRef = useRef(null);

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
            scrollTrigger: { trigger: el, start: "top 88%" },
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

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {arrivals.map((item) => (
          <div key={item.key} className="arrival-reveal group flex flex-col">
            <TiltCard tiltAmount={8} className="relative flex aspect-[3/4] items-end overflow-hidden rounded-3xl bg-white shadow-neu">
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
                className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-ink/50 shadow-sm transition-colors hover:text-rose-500"
              >
                <Heart size={14} strokeWidth={2} />
              </button>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                draggable={false}
              />
            </TiltCard>
            <p className="mt-4 text-sm font-semibold text-ink">{item.name}</p>
            <p className="mt-1 text-xs leading-snug text-ink/50">{item.blurb}</p>
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
