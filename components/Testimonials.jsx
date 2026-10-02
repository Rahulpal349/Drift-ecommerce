"use client";

import { Star } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".test-reveal",
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

  const testimonials = [
    {
      text: "The Banarasi silk saree I ordered was absolutely stunning. The zari work is intricate and the fabric quality is exceptional. It was the highlight of my sister's wedding!",
      name: "Priya Sharma",
      role: "Verified Buyer",
      location: "Mumbai",
      rating: 5,
    },
    {
      text: "I've been searching for authentic Kanjivaram sarees online and Drift exceeded my expectations. The colors are vibrant, the silk is genuine, and the delivery was prompt.",
      name: "Ananya Reddy",
      role: "Verified Buyer",
      location: "Hyderabad",
      rating: 5,
    },
    {
      text: "Beautiful cotton sarees perfect for daily wear. The Jamdani weaving is delicate and the fabric is so comfortable. Already ordered three more in different colors!",
      name: "Meera Iyer",
      role: "Verified Buyer",
      location: "Chennai",
      rating: 4,
    },
  ];

  return (
    <section ref={sectionRef} className="w-full bg-white py-24 px-6 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div>
            <p className="test-reveal text-xs font-semibold tracking-[0.25em] text-amber-700/60 mb-3">CUSTOMER LOVE</p>
            <h2 className="test-reveal text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.05] tracking-tight max-w-2xl">
              What Our <span className="font-serif italic text-amber-800/80">Customers</span> Say
            </h2>
          </div>

          <div className="test-reveal flex items-center gap-6 pb-2">
            <div className="flex -space-x-3">
              {["#722F37", "#6B2FA0", "#008080"].map((hex, i) => (
                <span
                  key={hex}
                  className="h-10 w-10 rounded-full border-[3px] border-white shadow-sm"
                  style={{ backgroundColor: hex, zIndex: 3 - i }}
                />
              ))}
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="fill-amber-400 text-amber-400" size={16} />
                ))}
                <span className="text-ink font-bold ml-1 text-sm">4.8/5</span>
              </div>
              <p className="text-sm font-semibold text-ink/50 tracking-wide">
                Trusted by 5000+ Customers
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className={`test-reveal rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between relative shadow-sm border h-full min-h-[380px] ${
                idx === 1
                  ? "bg-amber-800 text-white border-amber-700 md:translate-y-12"
                  : "bg-[#FAF7F2] border-amber-100"
              }`}
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className={`${idx === 1 ? "fill-amber-300 text-amber-300" : "fill-amber-400 text-amber-400"}`} size={16} />
                  ))}
                </div>

                {/* Large decorative quotes */}
                <span className={`text-[80px] leading-none absolute -top-2 right-8 select-none font-serif ${
                  idx === 1 ? "text-white/15" : "text-amber-200/40"
                }`}>
                  "
                </span>
                
                <div className="relative z-10 mb-10">
                  <p className={`text-[16px] leading-[1.8] font-medium ${
                    idx === 1 ? "text-white/90" : "text-ink/70"
                  }`}>
                    {item.text}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <div className={`h-12 w-12 rounded-full flex items-center justify-center text-lg font-bold ${
                  idx === 1 ? "bg-white/20 text-white" : "bg-amber-100 text-amber-800"
                }`}>
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className={`font-bold text-lg tracking-tight ${idx === 1 ? "text-white" : "text-ink"}`}>{item.name}</h4>
                  <p className={`text-sm font-medium ${idx === 1 ? "text-white/60" : "text-ink/40"}`}>
                    {item.role} • {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
