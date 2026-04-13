"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const posts = [
  {
    title: "Our Vision: Privacy-First Remittance and Credit for the UAE",
    slug: "our-vision-privacy-first-remittance",
    excerpt: "Solving the privacy and credit gaps in the MENA region with MagicBlock's Private Ephemeral Rollups.",
    date: "April 13, 2026",
    category: "Vision",
    color: "bg-[#ccff00]"
  },
  {
    title: "Understanding Private Ephemeral Rollups (PER)",
    slug: "understanding-per",
    excerpt: "How sub-50ms confidential compute is changing the game for decentralized finance on Solana.",
    date: "April 10, 2026",
    category: "Technical",
    color: "bg-[#7FF6FF]"
  },
  {
    title: "Obolus x MagicBlock: A New Era of Shielded Payments",
    slug: "obolus-magicblock-partnership",
    excerpt: "Exploring the technical integration of the Obolus Shielded Rail and the MagicBlock Private Payments API.",
    date: "April 08, 2026",
    category: "Partnership",
    color: "bg-[#BB8EF6]"
  }
];

import Footer from "@/components/Footer";

export default function Blog() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#ccff00] selection:text-black">
      {/* Navigation */}
      <header className="fixed top-0 z-[60] w-full border-b border-white/10 bg-black/40 backdrop-blur-xl px-6 lg:px-20 py-6">
        <div className="flex items-center justify-between max-w-[1400px] mx-auto">
          <Link href="/" className="flex items-center gap-1 font-black text-2xl tracking-tighter">
            Obolus
          </Link>
          <nav className="hidden md:flex items-center gap-8 font-bold text-[10px] tracking-widest uppercase">
             <Link href="/whitepaper" className="hover:opacity-70 transition-opacity">Whitepaper</Link>
             <Link href="/docs" className="hover:opacity-70 transition-opacity">Docs</Link>
             <Link href="https://t.me/obolusnetwork" className="hover:opacity-70 transition-opacity whitespace-nowrap">Join Us</Link>
             <Link href="/" className="hover:opacity-70 transition-opacity">Home</Link>
          </nav>
        </div>
      </header>

      <main className="pt-32 pb-24 px-6 lg:px-20 max-w-[1400px] mx-auto">
        <motion.div {...fadeInUp} className="mb-20 text-center">
          <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] mb-6">
            Obolus <span className="text-[#ccff00]">Blog</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Insights, updates, and deep dives into the future of private financial rails on Solana.
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <Link href={`/blog/${posts[0].slug}`} className="group relative block aspect-[21/9] w-full overflow-hidden rounded-[2.5rem] bg-[#111] border border-white/5">
             <div className="absolute inset-0 bg-gradient-to-br from-[#ccff00]/20 via-transparent to-black opacity-40 group-hover:opacity-60 transition-opacity"></div>
             {/* Abstract CSS Graphic */}
             <div className="absolute right-[-10%] top-[-20%] w-[60%] h-[140%] bg-[#ccff00] blur-[120px] opacity-10 group-hover:opacity-20 transition-all duration-700"></div>
             
             <div className="absolute inset-x-0 bottom-0 p-8 lg:p-16 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#ccff00] mb-4">Featured Story — {posts[0].date}</span>
                <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight leading-[0.9] mb-4 group-hover:translate-x-2 transition-transform duration-500 max-w-3xl">
                  {posts[0].title}
                </h2>
                <p className="text-white/60 text-sm lg:text-base max-w-xl group-hover:text-white/80 transition-colors">
                  {posts[0].excerpt}
                </p>
             </div>
          </Link>
        </motion.div>

        {/* post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.slice(1).map((post, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block bg-[#111] border border-white/5 rounded-[2rem] p-10 h-full hover:border-white/10 transition-all">
                <div className="flex justify-between items-start mb-8">
                  <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full text-black ${post.color}`}>
                    {post.category}
                  </span>
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tight leading-[0.9] mb-4 group-hover:text-[#ccff00] transition-colors">
                  {post.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-8">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                  Read Article 
                  <span className="text-[#ccff00]">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
