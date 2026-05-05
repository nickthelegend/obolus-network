"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

const fluidEntrance = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const Logo = () => (
  <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">
    <Image
      src="/logo.png"
      alt="Obolus Logo"
      width={120}
      height={30}
      className="h-8 w-auto object-contain mix-blend-screen"
    />
  </div>
);

const GlassCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className={`bg-void/90 backdrop-blur-2xl border border-white/10 rounded-glass shadow-2xl animate-float ${className}`}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-void text-white font-sans selection:bg-primary selection:text-black overflow-x-hidden">

      {/* HERO SECTION - The Shout Color Area */}
      <section className="bg-primary text-black w-full rounded-br-[120px] rounded-bl-[40px] px-6 lg:px-20 pb-32 relative overflow-hidden">
        {/* Subtle background texture or organic shape */}
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[80%] bg-black/5 rounded-full blur-3xl -z-0" />

        <header className="flex items-center justify-between py-8 max-w-[1400px] mx-auto z-20 relative">
          <Logo />
          <nav className="hidden md:flex items-center gap-10 font-bold text-[10px] tracking-widest uppercase">
            <Link href="/whitepaper" className="hover:opacity-60 transition-opacity">Whitepaper</Link>
            <Link href="/docs" className="hover:opacity-60 transition-opacity">Docs</Link>
            <Link href="/blog" className="hover:opacity-60 transition-opacity">Blog</Link>
            <div className="flex items-center gap-2 border border-black/10 rounded-full px-4 py-1.5">
              <span className="font-black">EN</span>
              <span className="opacity-20">|</span>
              <span className="opacity-40">AR</span>
            </div>
          </nav>
          <a
            href="https://app.obolus.network"
            className="bg-black text-white font-black text-[10px] uppercase tracking-[0.2em] px-8 py-4 rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            Launch App
          </a>
        </header>

        <div className="max-w-[1400px] mx-auto mt-24 lg:mt-40 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center z-10 relative">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col gap-10"
          >
            <h1 className="text-6xl md:text-7xl lg:text-9xl font-black leading-[0.85] tracking-tighter uppercase">
              Private<br />
              <span className="opacity-90">Digital</span><br />
              <span className="bg-black text-primary px-4 py-1 inline-block mt-2">Finance</span>
            </h1>
            <p className="text-sm md:text-base font-medium max-w-lg leading-relaxed opacity-80">
              Shielded salary, stipends, and freelance inflows on Solana. Powered by MagicBlock's Private Ephemeral Rollups for ultimate privacy and instant PUSD advances.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link
                href="https://app.obolus.network"
                className="inline-block bg-black text-white font-black text-xs uppercase tracking-widest px-10 py-5 rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl"
              >
                Get Advance
              </Link>
              <Link
                href="https://app.obolus.network"
                className="inline-block bg-transparent text-black border-2 border-black/20 font-black text-xs uppercase tracking-widest px-10 py-5 rounded-full hover:bg-black/5 hover:scale-105 active:scale-95 transition-all"
              >
                Pay Bills
              </Link>
            </div>
          </motion.div>

          <div className="lg:col-span-5 relative h-full flex items-center justify-center lg:justify-end">
            <GlassCard className="w-full max-w-md p-8 relative z-10">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center pt-1 text-black font-black text-2xl">
                    $
                  </div>
                  <span className="text-white font-black text-xs uppercase tracking-widest">PUSD Balance</span>
                </div>
                <div className="bg-primary text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                  Verified
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
                  <span className="text-primary text-[8px] font-black uppercase tracking-[0.2em] mb-2 block">Utilization</span>
                  <div className="text-2xl font-black text-primary">24.8%</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
                  <span className="text-primary text-[8px] font-black uppercase tracking-[0.2em] mb-2 block">Interest</span>
                  <div className="text-2xl font-black text-primary">0%*</div>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-5 border border-white/5 mb-8">
                <span className="text-primary text-[8px] font-black uppercase tracking-[0.2em] mb-4 block">Repayment Schedule</span>
                <div className="flex items-end gap-1.5 h-16">
                  {[3, 5, 8, 4, 12, 15, 10, 18, 22, 14, 19, 25].map((h, i) => (
                    <div key={i} className="bg-primary/60 w-full rounded-sm hover:bg-primary transition-colors" style={{ height: `${h * 4}%` }} />
                  ))}
                </div>
              </div>

              <button className="w-full bg-primary text-black font-black text-[10px] uppercase tracking-widest py-4 rounded-full hover:bg-white transition-colors">
                Instant Liquidity
              </button>
            </GlassCard>

            {/* Background Decorative Element */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-black rounded-full blur-[100px] opacity-40 -z-0" />
          </div>
        </div>
      </section>

      {/* THE VOID - Transition Section */}
      <main className="bg-void relative pt-32 pb-40 px-6 lg:px-20">

        {/* Partner Ticker in the Void */}
        <div className="max-w-[1400px] mx-auto mb-40">
          <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] text-center mb-16">Powered by the Industry Leaders</p>
          <div className="flex flex-row flex-wrap justify-center gap-12 lg:gap-24 items-center grayscale opacity-30 hover:opacity-80 transition-opacity">
            <Image src="/magicblock.svg" alt="MagicBlock" width={140} height={40} className="h-8 w-auto object-contain" />
            <Image src="/palm.svg" alt="Palm USD" width={140} height={40} className="h-8 w-auto object-contain" />
            <Image src="/solanaLogoMark.svg" alt="Solana" width={140} height={40} className="h-8 w-auto object-contain" />
            <Image src="/superteam-uae.avif" alt="Superteam UAE" width={140} height={40} className="h-8 w-auto object-contain" />
            <Image src="/colosseum.svg" alt="Colosseum" width={140} height={40} className="h-8 w-auto object-contain" />
          </div>
        </div>

        {/* Feature Grid with Liquid Geometry */}
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">

          {/* Large Shielded Inflow Card */}
          <motion.div
            {...fluidEntrance}
            className="md:col-span-8 bg-charcoal rounded-[48px] p-10 lg:p-16 relative overflow-hidden group border border-white/5"
          >
            <div className="relative z-10 max-w-lg">
              <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em] mb-6 block">Confidential Rails</span>
              <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                Shielded<br />PUSD Inflows
              </h2>
              <p className="text-sm font-medium opacity-60 leading-relaxed max-w-md">
                Receive salary, stipends, or freelance payments privately via MagicBlock's Private Payments API. Funds land securely in your PUSD account with zero public trace on-chain.
              </p>
            </div>

            {/* Organic Shape Mockup */}
            <div className="absolute right-[-10%] bottom-[-10%] w-[60%] h-[70%] bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-all duration-700" />
            <div className="absolute right-10 bottom-10 w-32 h-32 border-2 border-primary/20 rounded-full flex items-center justify-center animate-pulse">
              <div className="w-16 h-16 bg-primary/10 rounded-full" />
            </div>
          </motion.div>

          {/* Small Feature Card */}
          <motion.div
            {...fluidEntrance}
            className="md:col-span-4 bg-primary text-black rounded-[48px] p-10 flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="z-10">
              <span className="font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Speed</span>
              <h3 className="text-4xl font-black uppercase tracking-tighter leading-none mb-6">Instant<br />Advances</h3>
            </div>
            <p className="text-xs font-bold opacity-70 relative z-10">
              Access up to 50% of your expected inflow instantly. Zero friction, zero waiting.
            </p>
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-black/10 rounded-full scale-150 group-hover:scale-175 transition-transform duration-700" />
          </motion.div>

          {/* Bill Pay Card */}
          <motion.div
            {...fluidEntrance}
            className="md:col-span-5 bg-charcoal rounded-[48px] p-10 lg:p-12 border border-white/5 relative overflow-hidden"
          >
            <h3 className="text-4xl font-black uppercase tracking-tighter mb-6">One-Click<br />UAE Bill Pay</h3>
            <p className="text-xs font-medium opacity-50 mb-10">Pay Etisalat, du, and DEWA instantly. Private transfers ensure your utility spending remains your business.</p>
            <div className="flex gap-3">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
              </div>
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-primary rounded-full opacity-50" />
              </div>
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-primary rounded-full opacity-20" />
              </div>
            </div>
          </motion.div>

          {/* MOHRE Card */}
          <motion.div
            {...fluidEntrance}
            className="md:col-span-7 bg-[#212320] rounded-[48px] p-10 lg:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8">
              <div className="bg-primary/20 text-primary text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest border border-primary/20">
                Compliant
              </div>
            </div>
            <h3 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-6 text-primary">MOHRE-Ready &<br />Audit-Compliant</h3>
            <p className="text-sm font-medium opacity-70 max-w-md">Generate verifiable TEE attestations for UAE Wage Protection System (WPS) compliance without exposing PII. Ready for VARA and CBUAE frameworks.</p>
          </motion.div>

        </div>

        {/* Big CTA Section with Organic Geometry */}
        <div className="max-w-[1400px] mx-auto mt-40">
          <motion.div
            {...fluidEntrance}
            className="bg-primary text-black rounded-[80px] p-12 lg:p-24 flex flex-col items-center text-center relative overflow-hidden"
          >
            {/* Liquid Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.05)_100%)]" />

            <h2 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-12 relative z-10">
              Join the<br />Obolus Network
            </h2>
            <Link
              href="https://t.me/obolus_network"
              className="bg-black text-white font-black text-sm uppercase tracking-[0.3em] px-16 py-7 rounded-full hover:scale-105 active:scale-95 transition-all shadow-2xl relative z-10"
            >
              Join Telegram
            </Link>
          </motion.div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
