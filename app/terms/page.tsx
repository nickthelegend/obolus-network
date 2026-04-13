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

export default function Terms() {
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
            Terms of <span className="text-[#ccff00]">Service</span>
          </h1>

          <div className="space-y-16 text-white/60 leading-relaxed text-lg pb-20 text-justify">
            <section>
              <h2 className="text-xl font-black uppercase tracking-widest text-[#ccff00] mb-6 italic">1. Agreement to Terms</h2>
              <p>
                By accessing Obolus Network, you agree to comply with these Terms of Service. Obolus operates as a private financial rail infrastructure. Our services are provided in accordance with the regulatory frameworks of the United Arab Emirates, specifically the Central Bank (CBUAE) Stored Value Facilities (SVF) and Payment Token Services (PTS) frameworks.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black uppercase tracking-widest text-[#ccff00] mb-6 italic">2. Financial Rail Usage</h2>
              <p className="mb-6">
                Obolus provides the infrastructure for shielded salary payments and instant credit liquidity.
              </p>
              <ul className="list-disc pl-6 space-y-4 marker:text-[#ccff00]">
                <li><strong>No Custody:</strong> Obolus is a non-custodial protocol. We do not hold user private keys. Users are solely responsible for the management of their wallet credentials.</li>
                <li><strong>Credit Issuance:</strong> Instant BNPL loans are subject to algorithmically determined risk scores calculated within TEEs. Eligibility is not guaranteed.</li>
                <li><strong>Compliance Hooks:</strong> Users agree to allow the protocol to emit signed attestations for regulatory auditability as required by UAE law (VARA/ADGM).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-black uppercase tracking-widest text-[#ccff00] mb-6 italic">3. Governing Law</h2>
              <p>
                These terms are governed by the laws of the United Arab Emirates, with specific reference to the Virtual Assets Regulatory Authority (VARA) Rulebooks and ADGM Market Rules. Any disputes arising from the use of the Obolus Network shall be settled via the Dubai International Financial Centre (DIFC) Courts or appropriate UAE jurisdiction as defined by the user's free-zone residency.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black uppercase tracking-widest text-[#ccff00] mb-6 italic">4. Risk Disclosure</h2>
              <p>
                Financial privacy technologies and decentralized credit marketplaces carry inherent risks. Users should only utilize the Obolus Shielded Rail for salary disbursements and credit liquidity if they understand the mechanics of Solana and MagicBlock PER execution. Past performance of credit algorithms is not indicative of future results.
              </p>
            </section>

            <section className="pt-12 border-t border-white/5 text-sm uppercase tracking-widest font-black opacity-40">
              <p>Last Modified: April 14, 2026</p>
              <p>Contact: compliance@obolus.network</p>
            </section>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
