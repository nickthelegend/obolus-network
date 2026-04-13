"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const Logo = () => (
  <div className="flex items-center gap-1 font-black text-2xl tracking-tighter">
    Obolus
  </div>
);

import Footer from "@/components/Footer";

export default function Docs() {
    const categories = [
        { title: "Introduction", items: ["What is Obolus?", "MagicBlock PER", "Solana & TEE", "UAE Regulatory Context"] },
        { title: "Functional Requirements", items: ["Shielded Salary Rail (FR-01)", "Private Credit Scoring (FR-02)", "Instant BNPL (FR-03)", "Auto-Repayment (FR-04)"] },
        { title: "Technical Stack", items: ["MagicBlock Private Payments", "Intel TDX Enclaves", "Rust PER Delegation", "Reclaim SDK"] },
        { title: "Compliance Layer", items: ["TEE Attestations", "Audit Portal", "VARA/ADGM Readiness"] },
    ];

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-[#ccff00] selection:text-black">
            <header className="fixed top-0 z-[60] w-full border-b border-white/10 bg-black/40 backdrop-blur-xl px-6 lg:px-20 py-6">
                <div className="flex items-center justify-between max-w-[1400px] mx-auto">
                    <Link href="/" className="flex items-center gap-2">
                        <Logo />
                        <span className="bg-[#ccff00] text-black text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">Docs</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-8 font-bold text-[10px] tracking-widest uppercase">
                        <Link href="/whitepaper" className="hover:opacity-70 transition-opacity">Whitepaper</Link>
                        <Link href="/blog" className="hover:opacity-70 transition-opacity">Blog</Link>
                        <Link href="https://t.me/obolusnetwork" className="hover:opacity-70 transition-opacity">Join Us</Link>
                        <Link href="/" className="hover:opacity-70 transition-opacity">Home</Link>
                    </nav>
                </div>
            </header>

            <div className="pt-24 flex min-h-screen max-w-[1400px] mx-auto">
                {/* Sidebar */}
                <aside className="hidden lg:block w-72 border-r border-white/5 p-10 h-[calc(100vh-6rem)] sticky top-24 overflow-y-auto hide-scrollbar">
                    <div className="space-y-10">
                        {categories.map((cat, i) => (
                            <div key={i}>
                                <h4 className="text-[10px] uppercase tracking-widest text-[#ccff00] font-bold mb-4">{cat.title}</h4>
                                <ul className="space-y-3">
                                    {cat.items.map((item, j) => (
                                        <li key={j}>
                                            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </aside>

                {/* Content */}
                <main className="flex-1 p-10 lg:p-20 overflow-y-auto">
                    <motion.div {...fadeInUp} className="max-w-3xl">
                        <h1 className="text-4xl lg:text-7xl font-black uppercase tracking-tight leading-[0.9] mb-8">
                            Technical <span className="text-[#ccff00]">Documentation</span>
                        </h1>
                        <p className="text-slate-400 text-lg leading-relaxed mb-12">
                            Obolus Network is a privacy-first, regulator-auditable payment rail and BNPL system built on Solana using MagicBlock’s Private Ephemeral Rollups (PER).
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
                            {[
                                { title: "Private Payments API", desc: "Shielded SPL/USDC transfer endpoint.", icon: "🔐" },
                                { title: "Intel TDX Attestation", desc: "Mandatory on every PER call.", icon: "🛡️" },
                                { title: "Sub-50ms Execution", desc: "High-performance PER validators.", icon: "⚡" },
                                { title: "UAE Compliance", desc: "VARA/ADGM/CBUAE ready hooks.", icon: "🇦🇪" }
                            ].map((card, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-[#111] border border-white/5 hover:border-[#ccff00]/20 transition-all cursor-pointer group">
                                    <div className="text-2xl mb-3">{card.icon}</div>
                                    <h3 className="text-lg font-bold mb-1">{card.title}</h3>
                                    <p className="text-xs text-slate-500">{card.desc}</p>
                                </div>
                            ))}
                        </div>

                        <article className="prose prose-invert max-w-none text-slate-300">
                            <h2 className="text-white text-3xl font-black uppercase tracking-tight mb-6">Shielded Salary Rail (FR-01)</h2>
                            <p className="mb-6">
                                The sender connects their wallet and calls the MagicBlock Private Payments API. 
                                Funds land in a PER-controlled vault, ensuring no public link between the sender and receiver is recorded on the public ledger.
                            </p>

                            <div className="bg-[#111] rounded-xl p-8 border border-white/5 mb-8 font-mono text-sm overflow-x-auto">
                                <span className="text-[#ccff00]">// Execute continuous private settlement</span><br />
                                const response = await magicBlock.privateTransfer(&#123;<br />
                                &nbsp;&nbsp;recipient: employee_pubkey,<br />
                                &nbsp;&nbsp;amount: 8500,<br />
                                &nbsp;&nbsp;token: 'USDC',<br />
                                &nbsp;&nbsp;shielded: true<br />
                                &#125;);
                            </div>

                            <h2 className="text-white text-3xl font-black uppercase tracking-tight mt-16 mb-6">Private Credit Scoring (FR-02)</h2>
                            <p className="mb-6">
                                Recipients upload salary certificates or Emirates ID proof via an off-chain oracle or Reclaim SDK. 
                                The PER executes the credit model inside TEE (Intel TDX). Risk scores (0-100) and max loan amounts 
                                (30-50% of next inflow) are calculated privately.
                            </p>
                            
                            <div className="bg-[#ccff00] text-black p-6 rounded-2xl font-bold text-sm mb-12">
                                💡 Resulting credit scores are stored privately; no sensitive data ever hits public Solana.
                            </div>
                        </article>
                    </motion.div>
                </main>
            </div>
            
            <Footer />
        </div>
    );
}

