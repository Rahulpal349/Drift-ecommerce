"use client";

import { Star } from "lucide-react";
import { useLayoutEffect, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

function TestimonialCard({ item, isAmber, className = "" }) {
  return (
    <div
      className={`test-reveal rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between relative shadow-sm border h-full min-h-[380px] ${
        isAmber
          ? "bg-amber-800 text-white border-amber-700"
          : "bg-[#FAF7F2] border-amber-100"
      } ${className}`}
    >
      <div>
        <div className="flex items-center gap-1 mb-6">
          {[...Array(item.rating)].map((_, i) => (
            <Star key={i} className={`${isAmber ? "fill-amber-300 text-amber-300" : "fill-amber-400 text-amber-400"}`} size={16} />
          ))}
        </div>
        <span className={`text-[80px] leading-none absolute -top-2 right-8 select-none font-serif ${
          isAmber ? "text-white/15" : "text-amber-200/40"
        }`}>
          "
        </span>
        <div className="relative z-10 mb-10">
          <p className={`text-[16px] leading-[1.8] font-medium ${
            isAmber ? "text-white/90" : "text-ink/70"
          }`}>
            {item.text}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-auto">
        <div className={`h-12 w-12 rounded-full flex items-center justify-center text-lg font-bold ${
          isAmber ? "bg-white/20 text-white" : "bg-amber-100 text-amber-800"
        }`}>
          {item.name.charAt(0)}
        </div>
        <div>
          <h4 className={`font-bold text-lg tracking-tight ${isAmber ? "text-white" : "text-ink"}`}>{item.name}</h4>
          <p className={`text-sm font-medium ${isAmber ? "text-white/60" : "text-ink/40"}`}>
            {item.role} • {item.location}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef(null);
  const scrollerRef = useRef(null);
  const isHoveringRef = useRef(false);
  const rafRef = useRef(null);

  const displayTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

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

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let speed = 0.3;

    const scroll = () => {
      if (!isHoveringRef.current && window.innerWidth < 768 && scroller.children.length > 0) {
        scroller.scrollLeft += speed;
        const resetPoint = scroller.children[testimonials.length].offsetLeft - scroller.children[0].offsetLeft;
        
        if (scroller.scrollLeft >= resetPoint) {
          scroller.scrollLeft = 0;
        }
      }
      rafRef.current = requestAnimationFrame(scroll);
    };

    rafRef.current = requestAnimationFrame(scroll);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-24 px-6 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
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

        {/* Desktop Testimonials Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8 items-start">
          {testimonials.map((item, idx) => (
            <TestimonialCard 
              key={idx} 
              item={item} 
              isAmber={idx === 1} 
              className={idx === 1 ? "md:translate-y-12" : ""}
            />
          ))}
        </div>

        {/* Mobile Testimonials Scroller */}
        <div 
          ref={scrollerRef}
          className="flex md:hidden gap-4 overflow-x-auto pb-4 pt-4 -mx-6 px-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          onMouseEnter={() => (isHoveringRef.current = true)}
          onMouseLeave={() => (isHoveringRef.current = false)}
          onTouchStart={() => (isHoveringRef.current = true)}
          onTouchEnd={() => (isHoveringRef.current = false)}
        >
          {displayTestimonials.map((item, idx) => (
            <div key={`mobile-${idx}`} className="w-[310px] shrink-0">
              <TestimonialCard 
                item={item} 
                isAmber={idx % testimonials.length === 1} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
