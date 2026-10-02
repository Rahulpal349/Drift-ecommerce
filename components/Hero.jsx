"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Sparkles,
  Truck,
  ShieldCheck,
  Heart,
  Instagram,
  Youtube,
} from "lucide-react";
import Navbar from "./Navbar";
import VideoCutout from "./VideoCutout";

gsap.registerPlugin(ScrollTrigger);

const infoCards = [
  {
    key: "handwoven",
    icon: Sparkles,
    title: "Handwoven Heritage",
  },
  {
    key: "authentic",
    icon: ShieldCheck,
    title: "100% Authentic",
  },
];

const stats = [
  { icon: Sparkles, value: "200+", label: "Saree Designs" },
  { icon: Truck, value: "Pan India", label: "Free Shipping" },
  { icon: Heart, value: "5K+", label: "Happy Customers" },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const navRef = useRef(null);
  const badgeRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const subtextRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRefs = useRef([]);
  const cardRefs = useRef([]);
  ctaRefs.current = [];
  cardRefs.current = [];

  const addCtaRef = (el) => {
    if (el && !ctaRefs.current.includes(el)) ctaRefs.current.push(el);
  };
  const addCardRef = (el) => {
    if (el && !cardRefs.current.includes(el)) cardRefs.current.push(el);
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(navRef.current, { y: -24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 })
        .fromTo(
          badgeRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.35"
        )
        .fromTo(
          line1Ref.current,
          { yPercent: 140 },
          { yPercent: 0, duration: 0.9, ease: "power4.out" },
          "-=0.25"
        )
        .fromTo(
          line2Ref.current,
          { yPercent: 140 },
          { yPercent: 0, duration: 0.9, ease: "power4.out" },
          "-=0.65"
        )
        .fromTo(
          subtextRef.current,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.45"
        )
        .fromTo(
          ctaRefs.current,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
          "-=0.35"
        )
        .fromTo(
          cardRefs.current,
          { x: 60, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.7, stagger: 0.15 },
          "-=0.5"
        )
        .fromTo(
          statsRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.3"
        );

      gsap.to(contentRef.current, {
        yPercent: -6,
        opacity: 0.4,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FFF8F0 0%, #FEF3E2 30%, #FDE8D0 60%, #F9E4D4 100%)",
      }}
    >
      {/* Decorative pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Full Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <VideoCutout
          src="/videos/hero.mp4"
          className="h-full w-full object-cover object-center"
        />
        {/* Subtle gradient to ensure left text readability without blurring */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFF8F0]/90 via-[#FEF3E2]/40 to-transparent" />
      </div>

      <div ref={contentRef} className="relative z-10 flex h-full flex-col">
        <div ref={navRef}>
          <Navbar />
        </div>

        <div className="grid flex-1 grid-cols-12 items-center gap-8 px-6 pt-8 pb-4 md:px-14">
            <div className="col-span-12 flex flex-col gap-7 lg:col-span-7">
              <div
                ref={badgeRef}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-xs font-semibold tracking-wider text-amber-800 shadow-neu backdrop-blur-sm"
              >
                FESTIVE COLLECTION <span aria-hidden="true">✦</span>
              </div>

              <h1 className="flex flex-col text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[0.92] tracking-tighter text-ink">
                <span className="overflow-hidden pb-[0.2em] -mb-[0.2em]">
                  <span ref={line1Ref} className="block">
                    Timeless
                  </span>
                </span>
                <span className="overflow-hidden pb-[0.2em] -mb-[0.2em]">
                  <span ref={line2Ref} className="block font-serif italic text-amber-800/70">
                    Elegance.
                  </span>
                </span>
              </h1>

              <p ref={subtextRef} className="max-w-sm text-base text-ink/55 md:text-lg leading-relaxed">
                Handcrafted sarees woven with tradition. From Banarasi silk to Kanjivaram heritage — discover the art of Indian draping.
              </p>

              <div className="flex flex-wrap items-center gap-5">
                <button
                  ref={addCtaRef}
                  type="button"
                  className="group flex items-center gap-6 rounded-full bg-amber-800 py-2.5 pl-7 pr-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] hover:bg-amber-900"
                >
                  Explore Collection
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-amber-800 transition-transform group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </span>
                </button>
                <a
                  ref={addCtaRef}
                  href="/shop"
                  className="flex items-center gap-3 text-sm font-semibold text-ink/70 transition-colors hover:text-ink underline underline-offset-4 decoration-amber-300"
                >
                  Shop All Sarees
                </a>
              </div>
            </div>

            <div className="col-span-12 hidden flex-col items-end gap-4 lg:col-span-5 lg:flex">
              {infoCards.map(({ key, icon: Icon, title }) => (
                <div
                  key={key}
                  ref={addCardRef}
                  className="flex w-full max-w-xs items-center gap-4 rounded-2xl border border-amber-100 bg-white/60 p-4 shadow-neu backdrop-blur-md"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-800 shadow-neu">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{title}</p>
                  </div>
                </div>
              ))}

              <div
                ref={addCardRef}
                className="w-full max-w-xs rounded-2xl border border-amber-100 bg-white/60 p-4 shadow-neu backdrop-blur-md"
              >
                <div className="mb-3 flex items-center">
                  <div className="flex -space-x-3">
                    {["#722F37", "#6B2FA0", "#008080", "#D2B48C"].map((hex, i) => (
                      <span
                        key={hex}
                        className="h-8 w-8 rounded-full border-2 border-white"
                        style={{ backgroundColor: hex, zIndex: 4 - i }}
                      />
                    ))}
                  </div>
                  <span className="ml-2 flex h-7 items-center rounded-full bg-amber-800 px-3 text-xs font-semibold text-white">
                    5K+
                  </span>
                </div>
                <p className="text-sm font-semibold text-ink">Loved by Women Across India</p>
              </div>

              <div
                ref={addCardRef}
                className="flex w-full max-w-xs items-center justify-between rounded-full border border-amber-100 bg-white/60 px-5 py-3 shadow-neu backdrop-blur-md"
              >
                <span className="text-xs font-semibold text-ink/70">Follow Us</span>
                <div className="flex items-center gap-3 text-ink/70">
                  <Instagram size={16} strokeWidth={1.75} />
                  <Youtube size={16} strokeWidth={1.75} />
                </div>
              </div>
            </div>
          </div>

          <div ref={statsRef} className="px-6 pb-6 md:px-14">
            <div className="flex w-fit divide-x divide-amber-200 rounded-3xl bg-white/85 shadow-neu-lg backdrop-blur-sm">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3 px-6 py-4">
                  <Icon size={18} className="text-amber-700" strokeWidth={1.75} />
                  <div className="leading-tight">
                    <p className="text-sm font-bold text-ink">{value}</p>
                    <p className="text-xs text-ink/50">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
}
