"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#ccff00] selection:text-black">
      {/* Navigation */}
      <header className="fixed top-0 z-[60] w-full border-b border-white/10 bg-black/40 backdrop-blur-xl px-6 lg:px-20 py-6">
        <div className="flex items-center justify-between max-w-[1400px] mx-auto">
          <Link href="/" className="flex items-center gap-1 font-black text-2xl tracking-tighter">
            Obolus
          </Link>
          <nav className="hidden md:flex items-center gap-8 font-bold text-[10px] tracking-widest uppercase text-white/50">
             <Link href="/whitepaper" className="hover:text-white transition-opacity">Whitepaper</Link>
             <Link href="/docs" className="hover:text-white transition-opacity">Docs</Link>
             <Link href="/blog" className="hover:text-white transition-opacity">Blog</Link>
             <Link href="/" className="hover:text-white transition-opacity">Home</Link>
          </nav>
        </div>
      </header>

      <main className="pt-40 pb-24 px-6 lg:px-20 max-w-4xl mx-auto">
        <motion.div {...fadeInUp}>
          <h1 className="text-4xl lg:text-7xl font-black uppercase tracking-tight leading-[0.9] mb-12">
            Privacy <span className="text-[#ccff00]">Notice</span>
          </h1>

          <div className="space-y-16 text-white/60 leading-relaxed text-lg pb-20">
            <section>
              <h2 className="text-xl font-black uppercase tracking-widest text-[#ccff00] mb-6 italic">1. Introduction</h2>
              <p>
                Obolus Network is committed to protecting the financial privacy of our users. In accordance with the SRSD and UAE regulatory frameworks (including CBUAE PTS and ADGM/VARA standards), this policy outlines how we handle sensitive data using Private Ephemeral Rollups (PER) and Trusted Execution Environments (TEE).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black uppercase tracking-widest text-[#ccff00] mb-6 italic">2. Shielded Data Handling</h2>
              <p className="mb-6">
                Unlike traditional transparent blockchains, Obolus ensures that sensitive transaction data—including salary amounts, counterparty identities, and credit scores—never hits the public ledger in an unencrypted state.
              </p>
              <ul className="list-disc pl-6 space-y-4 marker:text-[#ccff00]">
                <li><strong>MagicBlock PER:</strong> All execution occurs within short-lived, private rollups that clear transaction state after settlement.</li>
                <li><strong>On-Chain Attestations:</strong> The public Solana ledger only records a cryptographic proof (Intel TDX Attestation) that a valid, compliant transaction occurred.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-black uppercase tracking-widest text-[#ccff00] mb-6 italic">3. TEE-Protected Compute</h2>
              <p>
                All sensitive document processing (e.g., identity verification and salary certificate analysis) is performed inside <strong>Intel TDX enclaves</strong>. These hardware-secured isolated environments prevent even Obolus node operators from accessing your data. Your data is decrypted only within the enclave for the purposes of computing risk scores and loan eligibility.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black uppercase tracking-widest text-[#ccff00] mb-6 italic">4. Regulatory Disclosure</h2>
              <p>
                While Obolus is privacy-first, it is not "privacy-exclusive." We implement an <strong>Audit Portal</strong> that allows authorized UAE regulators (VARA/ADGM/CBUAE) to verify compliance with AML/KYC checks using TEE-signed attestations. This process ensures institutional compliance without exposing your PII to the broader public or unauthorized third parties.
              </p>
            </section>

            <section className="pt-12 border-t border-white/5 text-sm uppercase tracking-widest font-black opacity-40">
              <p>Last Modified: April 14, 2026</p>
              <p>Contact: legal@obolus.network</p>
            </section>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
