"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const blogContent: any = {
  "our-vision-privacy-first-remittance": {
    title: "Our Vision: Privacy-First Remittance and Credit for the UAE",
    date: "April 13, 2026",
    category: "Vision",
    content: (
      <>
        <p className="text-xl text-white font-medium mb-8 leading-relaxed">
          At Obolus Network, we believe that financial privacy is not a luxury, but a fundamental requirement for the growth of a digital-first economy.
        </p>
        <h2 className="text-2xl font-black uppercase tracking-tight text-[#ccff00] mt-12 mb-6">The Problem: The Transparency Gap</h2>
        <p className="mb-6">
          The UAE is one of the world's most dynamic hubs for talent and trade. However, the current financial infrastructure often forces a choice between the speed of blockchain and the privacy of traditional banking. Employees shouldn't have to broadcast their salaries to the entire world just to receive them on-chain. Employers shouldn't have to reveal their entire payroll strategy to competitors.
        </p>
        <p className="mb-6">
          Furthermore, the "Credit Gap" in the MENA region remains a significant hurdle. Many residents lack access to instant, low-cost liquidity despite having stable future income. 
        </p>
        
        <h2 className="text-2xl font-black uppercase tracking-tight text-[#ccff00] mt-12 mb-6">Our Solution: The Obolus Shielded Rail</h2>
        <p className="mb-6">
          We are building the first private payment and credit rail on Solana. Using MagicBlock's Private Ephemeral Rollups (PER), we enable:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-4 marker:text-[#ccff00]">
          <li><strong>Confidential Salary Deposits:</strong> Shielded USDC transfers that remain invisible on public explorers while being fully regulator-auditable.</li>
          <li><strong>Undercollateralized Credit:</strong> Instant BNPL loans against future salary flows, enabled by private credit scoring computed inside TEEs.</li>
          <li><strong>Regulator Readiness:</strong> A compliance layer designed from day one to meet VARA and ADGM standards without compromising user privacy.</li>
        </ul>

        <blockquote className="border-l-4 border-[#ccff00] pl-8 py-4 my-12 italic text-white/70 text-lg">
          "Our vision is to normalize financial privacy while providing the credit tools that empower the next generation of UAE workers and enterprises."
        </blockquote>

        <h2 className="text-2xl font-black uppercase tracking-tight text-[#ccff00] mt-12 mb-6">Looking Ahead</h2>
        <p className="mb-6">
          As we progress through the Colosseum Frontier Hackathon, our focus is on refining the MagicBlock PER integration and building a world-class user experience. We invite you to join us on this journey as we redefine value transfer for the MENA region.
        </p>
      </>
    )
  },
  "understanding-per": {
    title: "Understanding Private Ephemeral Rollups (PER)",
    date: "April 10, 2026",
    category: "Technical",
    content: (
      <>
        <p className="text-xl text-white font-medium mb-8 leading-relaxed">
          Traditional L2s solve scalability, but they don't solve privacy. That's where Private Ephemeral Rollups (PER) come in.
        </p>
        <h2 className="text-2xl font-black uppercase tracking-tight text-[#ccff00] mt-12 mb-6">What makes PER different?</h2>
        <p className="mb-6">
          Unlike permanent rollups, PERs are specialized, short-lived execution environments that run inside Trusted Execution Environments (TEEs). 
          They allow for high-speed confidential compute (sub-50ms) without the overhead of zero-knowledge proofs for every single minor transaction.
        </p>
      </>
    )
  }
};

import Footer from "@/components/Footer";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogContent[slug as string] || blogContent["our-vision-privacy-first-remittance"];

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
          <div className="flex items-center gap-4 mb-8">
             <span className="text-[10px] font-black uppercase tracking-widest bg-[#ccff00] text-black px-3 py-1 rounded-full">
               {post.category}
             </span>
             <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
               {post.date}
             </span>
          </div>
          
          <h1 className="text-4xl lg:text-7xl font-black uppercase tracking-tight leading-[0.9] mb-12">
            {post.title}
          </h1>

          {/* Abstract Image Replacement */}
          <div className="w-full aspect-video rounded-3xl bg-[#111] border border-white/5 mb-20 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#ccff00]/10 via-transparent to-transparent"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-[#ccff00]/20 rounded-full animate-pulse"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[#ccff00]/10 rounded-full"></div>
          </div>

          <div className="text-white/60 leading-relaxed text-lg">
             {post.content}
          </div>
        </motion.div>
        
        <div className="mt-24 pt-12 border-t border-white/5">
           <Link href="/blog" className="text-[10px] font-black uppercase tracking-widest hover:text-[#ccff00] transition-colors flex items-center gap-2 group">
             <span className="group-hover:-translate-x-2 transition-transform">←</span> Back to Blog
           </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
