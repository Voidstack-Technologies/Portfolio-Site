import React, { useMemo, useCallback } from "react";

function useParticles(count = 18) {
  // generate particle positions once per render lifecycle (stable)
  return useMemo(() => {
    const arr = new Array(count).fill(0).map(() => ({
      left: Math.round(Math.random() * 10000) / 100, // percent with 2 decimals
      top: Math.round(Math.random() * 10000) / 100,
      size: 6 + Math.round(Math.random() * 18), // px
      color: Math.random() > 0.5 ? "#40BEEE" : "#3D53A3",
      delay: Math.round(Math.random() * 4000), // ms
      dur: 3500 + Math.round(Math.random() * 4500), // ms
      opacity: 0.18 + Math.random() * 0.4
    }));
    return arr;
  }, [count]);
}

export default function Hero({ scrollToSection }) {
  const particles = useParticles(20);

  const handleViewWork = useCallback(() => {
    if (typeof scrollToSection === "function") {
      scrollToSection("projects");
    } else {
      const el = document.getElementById("projects");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollToSection]);

  const handleViewContact = useCallback(() => {
    if (typeof scrollToSection === "function") {
      scrollToSection("contact");
    } else {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollToSection]);

  return (
    <section
      id="hero"
      className="relative pt-16 min-h-screen flex items-center overflow-hidden"
      style={{ fontFamily: "Poppins, system-ui, -apple-system" }}
      aria-label="Hero — Voidstack Technologies"
    >
      {/* Layered background gradients (decorative) */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 18% 30%, rgba(61,83,163,0.12) 0%, transparent 45%)," +
            "radial-gradient(circle at 82% 72%, rgba(64,190,238,0.12) 0%, transparent 45%)," +
            "linear-gradient(135deg,#071226 0%, #0f172a 45%, #081122 100%)"
        }}
      />

      {/* Particles (generated once) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-5" aria-hidden="true">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              boxShadow: `0 0 ${Math.max(8, p.size)}px ${p.color}`,
              opacity: p.opacity,
              transform: "translate(-50%, -50%)",
              animation: `float-${i % 3} ${p.dur}ms ${p.delay}ms ease-in-out infinite alternate`
            }}
          />
        ))}
      </div>

      {/* Geometric shapes as subtle SVGs (decorative) */}
      <svg
        className="absolute -left-10 top-12 w-48 h-48 opacity-10 -z-10"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <circle cx="60" cy="60" r="60" stroke="#3D53A3" strokeWidth="2" fill="transparent" />
      </svg>

      <svg
        className="absolute right-8 bottom-8 w-36 h-36 opacity-12 -z-10"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <rect x="20" y="20" width="160" height="160" rx="8" stroke="#40BEEE" strokeWidth="1.5" fill="transparent" />
      </svg>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="text-center">
          {/* Headline */}
          <div className="relative mb-6">
            {/* Subtle oversized background text for drama (visually decorative, not read by screen readers) */}
            <h1
              className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight"
              aria-hidden="true"
              style={{
                WebkitTextStroke: "1px rgba(255,255,255,0.02)",
                letterSpacing: "-0.02em"
              }}
            >
              <span className="bg-gradient-to-r from-blue-500 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Voidstack Technologies
              </span>
            </h1>

            {/* Accessible actual heading for screen readers */}
            <h2 className="sr-only">Voidstack Technologies — Enhance your Void into Vision</h2>

            {/* Animated underline */}
            <div className="flex justify-center mt-4">
              <div className="w-44 h-1 rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80 animate-underline" />
            </div>
          </div>

          {/* Tagline */}
          <p
            className="text-lg md:text-2xl font-medium mb-6 text-blue-100/95 max-w-3xl mx-auto"
            style={{ fontWeight: 600 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-200">
              Enhance Your Void Into Vision.
            </span>
          </p>

          {/* Description */}
          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-base md:text-lg leading-relaxed text-blue-100/85 mb-3">
              We specialize in creating{" "}
              <strong className="text-cyan-300 font-semibold">stunning visual identities</strong>, logos, and digital
              experiences that help businesses attract clients from around the world.
            </p>
            <p className="text-sm md:text-base text-blue-200/80">
              From concept to completion, we bring your brand vision to life with cutting-edge design and engineering.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={handleViewWork}
              className="relative inline-flex items-center px-8 py-3 rounded-2xl text-white font-semibold text-base transform transition hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              aria-label="View our work — scroll to projects"
            >
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 opacity-100 transform transition-all duration-400" />
              <span className="relative z-10 flex items-center gap-3">
                View Our Work
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>

            <a
              onClick={handleViewContact}
              className="inline-flex items-center px-8 py-3 rounded-2xl border border-blue-500/30 text-blue-200 backdrop-blur-sm bg-white/3 hover:bg-white/6 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              aria-label="Get in touch by email"
            >
              Get In Touch
              <span className="ml-3 w-2 h-2 rounded-full bg-cyan-400 animate-pulse" aria-hidden="true" />
            </a>
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            {[
              { number: "10+", label: "Projects Completed" },
              { number: "10+", label: "Happy Clients" },
              { number: "1+", label: "Years Experience" },
              { number: "24/7", label: "Support" }
            ].map((s, idx) => (
              <div key={idx} className="group">
                <div
                  className="text-2xl md:text-3xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 transition-transform duration-300 group-hover:scale-105"
                  style={{ fontWeight: 700 }}
                >
                  {s.number}
                </div>
                <div className="text-xs md:text-sm text-blue-300/80" style={{ fontWeight: 500 }}>
                  {s.label}
                </div>
                <div className="mx-auto mt-2 w-8 h-[2px] rounded-full bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none -z-10" aria-hidden="true" />
    </section>
  );
}
