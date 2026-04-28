"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Shielded Inflow", href: "/docs" },
      { name: "Instant Advance", href: "/docs" },
      { name: "Bill Pay", href: "/docs" },
      { name: "MOHRE Proofs", href: "/docs" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Vision", href: "/blog/our-vision-privacy-first-remittance" },
      { name: "NeosLegal", href: "https://neoslegal.co" },
      { name: "Contact", href: "https://t.me/obolusnetwork" },
    ],
    resources: [
      { name: "Whitepaper", href: "/whitepaper" },
      { name: "Documentation", href: "/docs" },
      { name: "Blog", href: "/blog" },
      { name: "Solana PER", href: "https://magicblock.xyz" },
    ],
  };

  return (
    <footer className="bg-[#0a0a0a] text-[#ededed] pt-24 pb-12 font-sans selection:bg-[#ccff00] selection:text-black mt-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        
        {/* Top Section: Oversized Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full mb-24 overflow-hidden"
        >
          <h2 className="text-[clamp(4rem,18vw,14rem)] font-black uppercase tracking-tighter leading-[0.8] mb-0 pointer-events-none select-none opacity-[0.9]">
            OBOLUS
          </h2>
        </motion.div>

        {/* Middle Section: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40 mb-8 italic">Product</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-[#ccff00] transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40 mb-8 italic">Company</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-[#ccff00] transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40 mb-8 italic">Resources</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-[#ccff00] transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Updated */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40 mb-8 italic">Stay Updated</h4>
            <p className="text-xs text-white/50 mb-6 leading-relaxed">Join the Obolus waitlist for private UAE PUSD inflow alerts.</p>
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-transparent border-b border-white/20 py-3 text-xs focus:outline-none focus:border-[#ccff00] transition-colors font-bold tracking-widest uppercase placeholder:text-white/20"
              />
              <button 
                type="submit" 
                className="absolute right-0 bottom-3 text-[10px] font-black uppercase tracking-widest hover:text-[#ccff00] transition-colors"
              >
                JOIN
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section: Legal & Social */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-white/40">
            <span>© {currentYear} OBOLUS NETWORK</span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>

          {/* Social Icons Mock */}
          <div className="flex gap-6 items-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
             <Link href="https://x.com/obolusnetwork" target="_blank">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
             </Link>
             <Link href="https://github.com/obolus-network" target="_blank">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
             </Link>
             <Link href="https://linkedin.com/company/obolus-network" target="_blank">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
             </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
