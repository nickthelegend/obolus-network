"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`relative w-8 h-8 ${className}`}>
    <Image
      src="/obolus.png"
      alt="Obolus Logo"
      fill
      className="object-contain"
      priority
    />
  </div>
);

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  const sections = ["hero", "gateway", "bnpl", "lending", "iot", "about", "footer"];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sections.indexOf(entry.target.id);
          if (index !== -1) setActiveSection(index);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index: number) => {
    const el = document.getElementById(sections[index]);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="layout-container h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth hide-scrollbar bg-background-dark">
      {/* Pagination Indicator */}
      <div className="fixed right-6 lg:right-10 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-5">
        {sections.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToSection(i)}
            className="group relative flex items-center justify-center w-2 h-2"
            aria-label={`Go to section ${i + 1}`}
          >
            <motion.div
              animate={{
                scale: activeSection === i ? 2 : 1,
                backgroundColor: activeSection === i ? "#9fd843" : "rgba(255, 255, 255, 0.2)",
              }}
              className="w-full h-full rounded-full"
            />
            {activeSection === i && (
              <motion.div
                layoutId="activeDot"
                className="absolute inset-[-6px] border border-primary/40 rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      <header className="fixed top-0 z-[60] w-full border-b border-solid border-slate-200/10 dark:border-border-dark/50 bg-background-light/40 dark:bg-background-dark/40 backdrop-blur-xl px-6 lg:px-40 py-4">
        <div className="flex items-center justify-between max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <Logo />
            <h2 className="text-lg font-bold tracking-tight">Obolus</h2>
          </motion.div>
          <nav className="hidden md:flex items-center gap-8">
            {["About", "Dashboard", "Docs", "Privacy"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <Link
                  className="text-xs font-medium hover:text-primary transition-colors text-slate-400"
                  href={`/${item.toLowerCase().replace(" ", "")}`}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-primary hover:opacity-90 text-background-dark px-5 py-2 rounded-full text-xs font-bold transition-all"
          >
            Launch App
          </motion.button>
        </div>
      </header>

      <main className="flex-1">
        {/* HERO */}
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden snap-start">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background-dark/40 via-background-dark/80 to-background-dark z-10"></div>
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDEzROu7L1O6JNyyD0qrWw0T6__KhL1LHm9CPAGJDDAb4VT40SvxzNmweLQmq-PZ5nF7aecsA2eSpWeLgnfrptd2j4keY6bOvc16Coc0TmTB0gmXLd9aE5KrBWhvryQiSB9WuXbzFxHNo74G2xvZSpwy9JLGkS6gUy_PRnaaAxVhvt-9WVkx0LO2ODNNtSNpjUaRtEe-yjEJY3Gs7TI_Bo0cLXh2V0zZs9jcDaGIqm2baTXZUdc9MSHuOAV-TW008rrgdfn1MayYSs')",
                filter: "contrast(1.1) brightness(0.5)"
              }}
            />
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/5 blur-[100px] rounded-full"></div>
          </div>
          <div className="relative z-20 px-6 lg:px-40 w-full max-w-[1400px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center gap-8"
            >
              <div className="flex flex-col gap-4 max-w-4xl">
                <motion.span
                  initial={{ opacity: 0, letterSpacing: "0.1em" }}
                  animate={{ opacity: 1, letterSpacing: "0.3em" }}
                  className="text-primary font-bold text-xs uppercase"
                >
                  Institutional Grade Rails
                </motion.span>
                <h1 className="text-3xl lg:text-6xl font-black leading-tight tracking-tight">
                  Non-custodial payment and <br className="hidden lg:block" /> credit infrastructure on Cardano
                </h1>
                <p className="text-slate-400 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
                  Obolus bridges the gap between DeFi and commerce with high-performance infrastructure designed for the next generation of financial apps.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <button className="bg-primary hover:scale-105 text-background-dark px-8 py-4 rounded-full text-sm font-bold transition-all shadow-xl shadow-primary/20">
                  Get Started
                </button>
                <button className="backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 px-8 py-4 rounded-full text-sm font-bold transition-all text-white">
                  Documentation
                </button>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Scroll</span>
            <motion.div
              animate={{ height: [20, 40, 20] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-px bg-gradient-to-b from-primary to-transparent"
            />
          </motion.div>
        </section>

        {/* ECOSYSTEM - GATEWAY */}
        <section id="gateway" className="h-screen flex items-center justify-center bg-background-dark snap-start px-6 lg:px-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 max-w-[1400px] mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative group">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 bg-card-dark shadow-2xl">
                <img
                  alt="Payment Gateway"
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity grayscale"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhiHkIHY_kK8X0pQciCiFZiJrkcfU4RiBb1Xvnf3K0aVTeiXXcuy501uOlWVK5jqmUCrkqgIRSG-55gccozj76aoxPmtcc2OorasRnT9aV6O5qo-k1j4jdhLKNaOKZot3h1YPbAa2aqdZds5YlwNTsj9Z_XcHhtkh708abzN7GmMiduy5UsgaPktwn_WJGL3h8JbudazXH4EPvSFfZUDX6g3snCnRX9vzMjAhQP-T661IaNHxvjJxX14ZJ3nn8dpcDrEXv0ydF0o4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card-dark via-transparent to-transparent"></div>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="flex flex-col gap-5">
              <span className="text-primary font-bold text-xs uppercase tracking-widest">Ecosystem 01</span>
              <h3 className="text-2xl lg:text-4xl font-bold">Payment Gateway</h3>
              <p className="text-slate-400 text-sm lg:text-base leading-relaxed">
                Native Shopify integration allowing merchants to accept ADA and stablecoins with instant settlement. A seamless bridge for traditional commerce.
              </p>
              <a className="text-primary text-sm font-bold flex items-center gap-2 hover:translate-x-2 transition-transform" href="#">
                Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </motion.div>
          </div>
        </section>

        {/* ECOSYSTEM - BNPL */}
        <section id="bnpl" className="h-screen flex items-center justify-center bg-background-dark snap-start px-6 lg:px-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 max-w-[1400px] mx-auto">
            <motion.div {...fadeInUp} className="order-2 lg:order-1 flex flex-col gap-5">
              <span className="text-primary font-bold text-xs uppercase tracking-widest">Ecosystem 02</span>
              <h3 className="text-2xl lg:text-4xl font-bold">BNPL Rails</h3>
              <p className="text-slate-400 text-sm lg:text-base leading-relaxed">
                Decentralized "Buy Now, Pay Later" infrastructure for cross-border commerce on Cardano. Providing flexible, permissionless credit lines.
              </p>
              <a className="text-primary text-sm font-bold flex items-center gap-2 hover:translate-x-2 transition-transform" href="#">
                Explore Rails <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2 relative group">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 bg-card-dark shadow-2xl">
                <img
                  alt="BNPL Rails"
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity grayscale"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB5F2Rw4W8AkQUOAq6YwcuUNWvRI080Fqo7DgkIo_y0yM1pZIh60_NZcc0rA_ywKErzp3KGlcjGWR_fc8PiJPEllQ0glN47KW32DvgDOrCHX55nJ8W6WHCKRwoyiRzixR2dYZh0AJJye6EgdPlb6dHh5cq4kFetUqu9YrxEEKp3loqCBsYaH2TSRAJBRSNhkjechpL1ZE67KrzufgUMY7l-1yD3Kdr7cV_c2zpSS_B2aP1ITE508BJKceHn45qKhsv2a866plD500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card-dark via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ECOSYSTEM - LENDING */}
        <section id="lending" className="h-screen flex items-center justify-center bg-background-dark snap-start px-6 lg:px-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 max-w-[1400px] mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative group">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 bg-card-dark shadow-2xl">
                <img
                  alt="Lending Pools"
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity grayscale"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDGPpqUYVdbJNirEtGZHWcsR9wjtLXFhsaAwG0E8mvWJk624vxOOrN-VlrIqKBotXrXEUfc-7yu05XhzYf2nLkFkDiVJ8wYeIJBTMO0Vx2QXObRc91Q42mZtN77Hmwe_zG78p4iymeOtdxzZiJKkrkR0Ma-CAbi6C1ihcA5KxcUTdbps6T5clOzD2yRDW1tQxW84bmdH3NKqEkYKTNyejIu2Orj2C-A3FxsNiaMSD5ddgm0tZZHDg6PizmY7-B9pIDkszQYraCkfc"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card-dark via-transparent to-transparent"></div>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="flex flex-col gap-5">
              <span className="text-primary font-bold text-xs uppercase tracking-widest">Ecosystem 03</span>
              <h3 className="text-2xl lg:text-4xl font-bold">Lending Pools</h3>
              <p className="text-slate-400 text-sm lg:text-base leading-relaxed">
                Permissioned liquidity pools for scalable credit markets. Engineered for deep liquidity and institutional risk management.
              </p>
              <a className="text-primary text-sm font-bold flex items-center gap-2 hover:translate-x-2 transition-transform" href="#">
                View Pools <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </motion.div>
          </div>
        </section>

        {/* ECOSYSTEM - IOT */}
        <section id="iot" className="h-screen flex items-center justify-center bg-background-dark snap-start px-6 lg:px-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 max-w-[1400px] mx-auto">
            <motion.div {...fadeInUp} className="order-2 lg:order-1 flex flex-col gap-5">
              <span className="text-primary font-bold text-xs uppercase tracking-widest">Ecosystem 04</span>
              <h3 className="text-2xl lg:text-4xl font-bold">IoT Pay (Hydra)</h3>
              <p className="text-slate-400 text-sm lg:text-base leading-relaxed">
                Harnessing Hydra Pay for ultra-high throughput micro-payments and machine economies. Driving real-time automation.
              </p>
              <a className="text-primary text-sm font-bold flex items-center gap-2 hover:translate-x-2 transition-transform" href="#">
                Read Specs <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2 relative group">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 bg-card-dark shadow-2xl">
                <img
                  alt="IoT Payments"
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity grayscale"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaGo52OdVr8ml-hOhe8rqyshAJTigATHqrA6S_IgoZ3WYo2RGrNK2STLGWsZDQ65w7mKKLyXvXszFc5vCFdJaDB6AyjVNJcnsZUOm0NkqY4DkPxLV3FZGzBlealbPLrol-vyO4kDmbZtMVKS1v_F-5RWLdskZVftS7Jle42WnITfEt7h-5PISVvhnEuXuq62tgtjQoP8z7NJem5IQENrvAjgUHNYAmraECsIY_BCtKzdpNA6p_Mv696dhHQyf01qc8G0z2JKbaLeE"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card-dark via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="h-screen flex items-center justify-center bg-background-dark snap-start px-6 lg:px-40 border-t border-white/5">
          <div className="max-w-[1400px] mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
              <motion.div {...fadeInUp} className="lg:col-span-1 flex flex-col justify-center">
                <h2 className="text-2xl lg:text-4xl font-black leading-tight mb-6">Engineered for absolute trust</h2>
                <p className="text-slate-400 text-sm lg:text-base leading-relaxed mb-8">
                  We are a mission-driven team of Haskell and Plutus pioneers building robust financial rails in the Cardano ecosystem.
                </p>
                <div className="flex gap-4 items-center p-5 rounded-xl bg-primary/5 border border-primary/20 shadow-xl">
                  <span className="material-symbols-outlined text-primary text-3xl">workspace_premium</span>
                  <div>
                    <p className="font-bold text-sm">Winner: Cardano Emurgo Build 2023</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Technical Excellence in DeFi</p>
                  </div>
                </div>
              </motion.div>
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: "terminal", title: "Engineering", desc: "Expertise in Plutus and Aiken." },
                  { icon: "security", title: "Verification", desc: "Rigorous institutional-grade testing." },
                  { icon: "public", title: "Mission", desc: "Tools for the unbanked globally." },
                  { icon: "hub", title: "Standards", desc: "Open-source primitives for the community." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    {...fadeInUp}
                    whileHover={{ scale: 1.02, borderColor: "rgba(159, 216, 67, 0.3)" }}
                    className="p-8 rounded-2xl border border-white/5 bg-card-dark transition-all"
                  >
                    <span className="material-symbols-outlined text-primary text-3xl mb-4">{item.icon}</span>
                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="snap-start min-h-screen flex flex-col justify-between bg-card-dark px-6 lg:px-40 py-20 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Logo />
              <h2 className="text-xl font-bold">Obolus</h2>
            </div>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed max-w-xs">
              The definitive fintech layer for the Cardano blockchain. Built on Haskell and Plutus.
            </p>
            <div className="flex gap-5">
              <a className="text-slate-500 hover:text-primary transition-colors" href="https://x.com/ObolusNetwork" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined text-2xl">share</span>
              </a>
              <a className="text-slate-500 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-2xl">alternate_email</span></a>
              <a className="text-slate-500 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-2xl">code</span></a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-[10px] tracking-[0.2em] uppercase text-slate-300">Product</h4>
            <div className="flex flex-col gap-2">
              {["Gateway", "Lending", "Hydra"].map(it => <a key={it} className="text-slate-500 hover:text-primary text-xs" href="#">{it}</a>)}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-[10px] tracking-[0.2em] uppercase text-slate-300">Company</h4>
            <div className="flex flex-col gap-2">
              {["About", "Careers", "Press"].map(it => <a key={it} className="text-slate-500 hover:text-primary text-xs" href="#">{it}</a>)}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-[10px] tracking-[0.2em] uppercase text-slate-300">Resources</h4>
            <div className="flex flex-col gap-2">
              <a className="text-slate-500 hover:text-primary text-xs" href="/docs">Docs</a>
              <a className="text-slate-500 hover:text-primary text-xs" href="https://github.com/obolus-network" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="text-slate-500 hover:text-primary text-xs" href="/privacy">Legal</a>
            </div>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto w-full mt-20 pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-slate-500">
          <p>© 2024 Obolus Finance. Built on Cardano. Engineered for the future.</p>
          <p className="uppercase tracking-widest">Designed for global inclusion.</p>
        </div>
      </footer>
    </div>
  );
}



