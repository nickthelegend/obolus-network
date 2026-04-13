"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

import Footer from "@/components/Footer";

export default function Whitepaper() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#ccff00] selection:text-black">
      {/* Navigation */}
      <header className="fixed top-0 z-[60] w-full border-b border-white/10 bg-black/40 backdrop-blur-xl px-6 lg:px-20 py-6">
        <div className="flex items-center justify-between max-w-[1400px] mx-auto">
          <Link href="/" className="flex items-center gap-1 font-black text-2xl tracking-tighter">
            Obolus
          </Link>
          <nav className="hidden md:flex items-center gap-8 font-bold text-[10px] tracking-widest uppercase">
            <Link href="/" className="hover:opacity-70 transition-opacity">Home</Link>
            <Link href="/docs" className="hover:opacity-70 transition-opacity">Docs</Link>
            <Link href="/blog" className="hover:opacity-70 transition-opacity">Blog</Link>
            <Link href="https://t.me/obolusnetwork" className="hover:opacity-70 transition-opacity whitespace-nowrap">Join Us</Link>
          </nav>
        </div>
      </header>

      <main className="pt-32 pb-24 px-6 lg:px-20 max-w-4xl mx-auto">
        <motion.div {...fadeInUp} className="mb-20">
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ccff00] mb-4">Version 1.0 — April 2026</div>
          <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] mb-8">
            The Obolus <br/><span className="text-[#ccff00]">Network</span>
          </h1>
          <p className="text-xl lg:text-2xl font-medium text-white/60 leading-relaxed italic border-l-4 border-[#ccff00] pl-8 py-2">
            "A privacy-first, regulator-auditable payment rail and BNPL system built on Solana using MagicBlock’s Private Ephemeral Rollups."
          </p>
        </motion.div>

        <section className="space-y-16 text-white/80 leading-relaxed text-lg text-justify">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-widest text-[#ccff00] mb-6">1. Executive Summary</h2>
            <p>
              The Obolus Network protocol addresses the critical tension between financial privacy and regulatory compliance in the digital assets market, specifically targeting the UAE and broader MENA region. By leveraging Solana's high-performance infrastructure combined with MagicBlock’s Private Ephemeral Rollups (PER), Obolus provides a shielded salary rail and instant undercollateralized credit marketplace that satisfies 2026 PTS and lending licensing requirements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black uppercase tracking-widest text-[#ccff00] mb-6">2. The Privacy Mandate</h2>
            <p className="mb-4">
              Current blockchain implementations suffer from "Privacy Paradox" where transparency hinders institutional adoption and personal security. Obolus utilizes Trusted Execution Environments (TEE) and Intel TDX-protected compute to ensure:
            </p>
            <ul className="list-disc pl-6 space-y-4 marker:text-[#ccff00]">
              <li><span className="text-white font-bold">Shielded Deposits:</span> No public link between employer and employee wallets.</li>
              <li><span className="text-white font-bold">Confidential Credit:</span> Credit scoring computed inside private enclaves; sensitive documents (Emirates ID, Salary Certificates) never hit the public ledger.</li>
              <li><span className="text-white font-bold">Encrypted Repayment:</span> Automated BNPL settlements executed via time-delayed private transfers.</li>
            </ul>
          </div>

          <div className="bg-[#111] p-10 lg:p-16 rounded-[2rem] border border-white/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 text-4xl opacity-20 text-[#ccff00] font-black italic select-none">ARCHITECTURE</div>
             <h2 className="text-2xl font-black uppercase tracking-widest text-white mb-6">3. Technical Architecture</h2>
             <p className="mb-8 opacity-70">
               Obolus acts as an orchestration layer between the Solana Mainnet and a localized MagicBlock PER. The execution flow is as follows:
             </p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm uppercase tracking-tight font-bold">
                <div className="p-6 border border-white/10 rounded-xl bg-black/40">
                   <div className="text-[#ccff00] mb-2">01 / Deposit</div>
                   <div className="opacity-60">MagicBlock Private Payments API (/deposit)</div>
                </div>
                <div className="p-6 border border-white/10 rounded-xl bg-black/40">
                   <div className="text-[#ccff00] mb-2">02 / Credit</div>
                   <div className="opacity-60">TEE Compute (Risk Score 0–100)</div>
                </div>
                <div className="p-6 border border-white/10 rounded-xl bg-black/40">
                   <div className="text-[#ccff00] mb-2">03 / Loan</div>
                   <div className="opacity-60">Shielded USDC Issuance (30-50% Liquidity)</div>
                </div>
                <div className="p-6 border border-white/10 rounded-xl bg-black/40">
                   <div className="text-[#ccff00] mb-2">04 / Repay</div>
                   <div className="opacity-60">On-chain Hook Settlement</div>
                </div>
             </div>
          </div>

          <div>
            <h2 className="text-2xl font-black uppercase tracking-widest text-[#ccff00] mb-6">4. Regulatory Convergence</h2>
            <p>
              In collaboration with NeosLegal, Obolus implements a "Proof of Compliance" mechanism. Every transaction generates a signed Intel TDX attestation emitted as a public Solana event (proof hash only). Licensed regulators (VARA/ADGM) can verify transaction integrity through a dedicated audit portal without gaining access to Personally Identifiable Information (PII) or specific transaction amounts.
            </p>
          </div>
          
          <div className="pt-12 border-t border-white/10 flex flex-col items-center">
             <p className="text-sm opacity-40 uppercase tracking-widest mb-8">End of Document</p>
             <div className="text-[120px] font-black leading-none text-transparent mb-8" style={{ WebkitTextStroke: '1px rgba(204,255,0,0.2)' }}>OBOLUS</div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
