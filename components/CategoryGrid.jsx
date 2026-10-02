"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { key: "banarasi", label: "Banarasi Silk", image: "/images/sarees/banarasi.jpg", count: "45+ Designs" },
  { key: "kanjivaram", label: "Kanjivaram Silk", image: "/images/sarees/kanjivaram.jpg", count: "38+ Designs" },
  { key: "tussar", label: "Tussar Silk", image: "/images/sarees/tussar.jpg", count: "22+ Designs" },
  { key: "cotton", label: "Cotton Sarees", image: "/images/sarees/cotton.jpg", count: "50+ Designs" },
  { key: "georgette", label: "Georgette", image: "/images/sarees/georgette.jpg", count: "30+ Designs" },
  { key: "chiffon", label: "Chiffon", image: "/images/sarees/chiffon.jpg", count: "25+ Designs" },
  { key: "organza", label: "Organza", image: "/images/sarees/organza.jpg", count: "18+ Designs" },
  { key: "bandhani", label: "Bandhani", image: "/images/sarees/bandhani.jpg", count: "20+ Designs" },
];

export default function CategoryGrid() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".cat-reveal").forEach((el, i) => {
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
    <section ref={sectionRef} className="w-full bg-white px-6 pt-16 pb-24 md:px-14 md:pt-20 md:pb-32">
      <div className="cat-reveal mb-10 flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] text-amber-700/60">CURATED COLLECTION</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Shop by Category
          </h2>
        </div>
        <Link
          href="/collections"
          className="hidden text-xs font-semibold tracking-wide text-amber-800 underline underline-offset-4 decoration-amber-300 transition-colors hover:text-ink sm:block"
        >
          View All Categories
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {categories.map((cat) => (
          <Link
            key={cat.key}
            href={`/collections?category=${cat.key}`}
            className="cat-reveal group relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#FAF7F2]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cat.image}
              alt={cat.label}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-base font-semibold text-white md:text-lg">{cat.label}</p>
              <p className="mt-0.5 text-xs text-white/65">{cat.count}</p>
              <span className="mt-3 inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1.5 text-[10px] font-semibold text-white tracking-wide transition-colors group-hover:bg-amber-800">
                SHOP NOW
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
