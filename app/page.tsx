import React from "react";

export default function Home() {
  return (
    <div className="layout-container flex h-full grow flex-col">
      <header className="fixed top-0 z-[60] w-full border-b border-solid border-slate-200/10 dark:border-border-dark/50 bg-background-light/40 dark:bg-background-dark/40 backdrop-blur-xl px-6 lg:px-40 py-4">
        <div className="flex items-center justify-between max-w-[1400px] mx-auto">
          <div className="flex items-center gap-2">
            <div className="text-primary">
              <svg fill="none" height="32" viewBox="0 0 48 48" width="32" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold tracking-tight">Obolus</h2>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#about">About Us</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Dashboard</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Docs</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Privacy</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Terms</a>
          </nav>
          <button className="bg-primary hover:opacity-90 text-background-dark px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-primary/20">
            Launch App
          </button>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background-dark/20 via-background-dark/60 to-background-dark z-10"></div>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDEzROu7L1O6JNyyD0qrWw0T6__KhL1LHm9CPAGJDDAb4VT40SvxzNmweLQmq-PZ5nF7aecsA2eSpWeLgnfrptd2j4keY6bOvc16Coc0TmTB0gmXLd9aE5KrBWhvryQiSB9WuXbzFxHNo74G2xvZSpwy9JLGkS6gUy_PRnaaAxVhvt-9WVkx0LO2ODNNtSNpjUaRtEe-yjEJY3Gs7TI_Bo0cLXh2V0zZs9jcDaGIqm2baTXZUdc9MSHuOAV-TW008rrgdfn1MayYSs')",
                filter: "contrast(1.1) brightness(0.6)"
              }}
            ></div>
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/10 blur-[100px] rounded-full"></div>
          </div>
          <div className="relative z-20 px-6 lg:px-40 w-full max-w-[1400px] mx-auto text-center">
            <div className="flex flex-col items-center gap-10">
              <div className="flex flex-col gap-6 max-w-4xl">
                <span className="text-primary font-bold tracking-[0.3em] text-sm uppercase">Institutional Grade Rails</span>
                <h1 className="text-5xl lg:text-8xl font-black leading-[1.1] tracking-tight">
                  Non-custodial payment and credit infrastructure on Cardano
                </h1>
                <p className="text-slate-300 text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto">
                  Obolus bridges the gap between DeFi and commerce with high-performance infrastructure designed for the next generation of financial apps.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 mt-4">
                <button className="bg-primary hover:scale-105 text-background-dark px-10 py-5 rounded-full text-lg font-bold transition-all shadow-xl shadow-primary/30">
                  Get Started
                </button>
                <button className="backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 px-10 py-5 rounded-full text-lg font-bold transition-all">
                  View Documentation
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50">
            <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to Explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
          </div>
        </section>

        <section className="py-32 relative bg-background-dark">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-40 mb-24">
            <h2 className="text-5xl lg:text-6xl font-black tracking-tight mb-6">Our Ecosystem</h2>
            <div className="h-1.5 w-32 bg-primary rounded-full"></div>
          </div>

          <div className="flex flex-col gap-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-24 px-6 lg:px-40">
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-card-dark">
                  <img
                    alt="Metaphorical Gateway Artwork"
                    className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhiHkIHY_kK8X0pQciCiFZiJrkcfU4RiBb1Xvnf3K0aVTeiXXcuy501uOlWVK5jqmUCrkqgIRSG-55gccozj76aoxPmtcc2OorasRnT9aV6O5qo-k1j4jdhLKNaOKZot3h1YPbAa2aqdZds5YlwNTsj9Z_XcHhtkh708abzN7GmMiduy5UsgaPktwn_WJGL3h8JbudazXH4EPvSFfZUDX6g3snCnRX9vzMjAhQP-T661IaNHxvjJxX14ZJ3nn8dpcDrEXv0ydF0o4"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card-dark via-transparent to-transparent"></div>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-4xl">shopping_cart</span>
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold">Payment Gateway</h3>
                <p className="text-slate-400 text-xl leading-relaxed">
                  Native Shopify integration allowing merchants to accept ADA and stablecoins with instant settlement. A seamless bridge between traditional commerce and the decentralized future.
                </p>
                <a className="text-primary font-bold flex items-center gap-2 hover:translate-x-2 transition-transform" href="#">
                  Learn more <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-24 px-6 lg:px-40">
              <div className="order-2 lg:order-1 flex flex-col gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-4xl">credit_card</span>
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold">BNPL Rails</h3>
                <p className="text-slate-400 text-xl leading-relaxed">
                  Decentralized "Buy Now, Pay Later" infrastructure for cross-border commerce on Cardano. Empowering global consumers with flexible, permissionless credit lines.
                </p>
                <a className="text-primary font-bold flex items-center gap-2 hover:translate-x-2 transition-transform" href="#">
                  Learn more <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
              <div className="order-1 lg:order-2 relative group">
                <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-card-dark">
                  <img
                    alt="Metaphorical Credit Rails Artwork"
                    className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB5F2Rw4W8AkQUOAq6YwcuUNWvRI080Fqo7DgkIo_y0yM1pZIh60_NZcc0rA_ywKErzp3KGlcjGWR_fc8PiJPEllQ0glN47KW32DvgDOrCHX55nJ8W6WHCKRwoyiRzixR2dYZh0AJJye6EgdPlb6dHh5cq4kFetUqu9YrxEEKp3loqCBsYaH2TSRAJBRSNhkjechpL1ZE67KrzufgUMY7l-1yD3Kdr7cV_c2zpSS_B2aP1ITE508BJKceHn45qKhsv2a866plD500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card-dark via-transparent to-transparent"></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-24 px-6 lg:px-40">
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-card-dark">
                  <img
                    alt="Metaphorical Liquidity Pools Artwork"
                    className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDGPpqUYVdbJNirEtGZHWcsR9wjtLXFhsaAwG0E8mvWJk624vxOOrN-VlrIqKBotXrXEUfc-7yu05XhzYf2nLkFkDiVJ8wYeIJBTMO0Vx2QXObRc91Q42mZtN77Hmwe_zG78p4iymeOtdxzZiJKkrkR0Ma-CAbi6C1ihcA5KxcUTdbps6T5clOzD2yRDW1tQxW84bmdH3NKqEkYKTNyejIu2Orj2C-A3FxsNiaMSD5ddgm0tZZHDg6PizmY7-B9pIDkszQYraCkfc"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card-dark via-transparent to-transparent"></div>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-4xl">account_balance</span>
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold">Lending Pools</h3>
                <p className="text-slate-400 text-xl leading-relaxed">
                  Permissioned and public liquidity pools providing capital for scalable credit markets. Engineered for deep liquidity and institutional-grade risk management.
                </p>
                <a className="text-primary font-bold flex items-center gap-2 hover:translate-x-2 transition-transform" href="#">
                  Learn more <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-24 px-6 lg:px-40">
              <div className="order-2 lg:order-1 flex flex-col gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-4xl">bolt</span>
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold">IoT Pay (Hydra)</h3>
                <p className="text-slate-400 text-xl leading-relaxed">
                  Harnessing Hydra Pay for ultra-high throughput micro-payments and machine economies. Driving the next wave of automation and real-time settle-as-you-go services.
                </p>
                <a className="text-primary font-bold flex items-center gap-2 hover:translate-x-2 transition-transform" href="#">
                  Learn more <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
              <div className="order-1 lg:order-2 relative group">
                <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-card-dark">
                  <img
                    alt="Metaphorical Micro-payments Artwork"
                    className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaGo52OdVr8ml-hOhe8rqyshAJTigATHqrA6S_IgoZ3WYo2RGrNK2STLGWsZDQ65w7mKKLyXvXszFc5vCFdJaDB6AyjVNJcnsZUOm0NkqY4DkPxLV3FZGzBlealbPLrol-vyO4kDmbZtMVKS1v_F-5RWLdskZVftS7Jle42WnITfEt7h-5PISVvhnEuXuq62tgtjQoP8z7NJem5IQENrvAjgUHNYAmraECsIY_BCtKzdpNA6p_Mv696dhHQyf01qc8G0z2JKbaLeE"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card-dark via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-40 py-32 max-w-[1400px] mx-auto border-t border-white/5" id="about">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div className="lg:col-span-1">
              <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-8">Engineered for absolute trust</h2>
              <p className="text-slate-400 text-xl leading-relaxed mb-10">
                We are a mission-driven team of Haskell and Plutus pioneers dedicated to building the most robust financial rails in the Cardano ecosystem.
              </p>
              <div className="flex gap-4 items-center p-6 rounded-2xl bg-primary/5 border border-primary/20 shadow-xl shadow-primary/5">
                <span className="material-symbols-outlined text-primary text-4xl">workspace_premium</span>
                <div>
                  <p className="font-bold text-lg">Winner: Cardano Emurgo Build 2023</p>
                  <p className="text-sm text-slate-500">Recognized for technical excellence in DeFi</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-10 rounded-3xl border border-white/5 bg-card-dark hover:border-primary/30 transition-all duration-500">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">terminal</span>
                <h4 className="text-2xl font-bold mb-4">Engineering Excellence</h4>
                <p className="text-slate-400 leading-relaxed">Deep expertise in Plutus V2, Aiken, and functional programming paradigms for secure contracts.</p>
              </div>
              <div className="p-10 rounded-3xl border border-white/5 bg-card-dark hover:border-primary/30 transition-all duration-500">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">security</span>
                <h4 className="text-2xl font-bold mb-4">Formal Verification</h4>
                <p className="text-slate-400 leading-relaxed">Rigorous testing and verification processes to ensure institutional-grade security for every asset.</p>
              </div>
              <div className="p-10 rounded-3xl border border-white/5 bg-card-dark hover:border-primary/30 transition-all duration-500">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">public</span>
                <h4 className="text-2xl font-bold mb-4">Mission Driven</h4>
                <p className="text-slate-400 leading-relaxed">Committed to decentralization and providing financial tools to the unbanked globally.</p>
              </div>
              <div className="p-10 rounded-3xl border border-white/5 bg-card-dark hover:border-primary/30 transition-all duration-500">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">hub</span>
                <h4 className="text-2xl font-bold mb-4">Open Standards</h4>
                <p className="text-slate-400 leading-relaxed">Building open-source primitives that the entire Cardano developer community can leverage.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 px-6 lg:px-40 py-20 bg-background-dark">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="text-primary">
                <svg fill="none" height="32" viewBox="0 0 48 48" width="32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">Obolus</h2>
            </div>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-xs">
              The definitive fintech layer for the Cardano blockchain.
            </p>
            <div className="flex gap-6">
              <a className="text-slate-500 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-3xl">alternate_email</span></a>
              <a className="text-slate-500 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-3xl">share</span></a>
              <a className="text-slate-500 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-3xl">code</span></a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-sm tracking-widest uppercase text-slate-300">Product</h4>
            <div className="flex flex-col gap-4">
              <a className="text-slate-500 hover:text-primary transition-colors" href="#">Gateway</a>
              <a className="text-slate-500 hover:text-primary transition-colors" href="#">Lending</a>
              <a className="text-slate-500 hover:text-primary transition-colors" href="#">Hydra Pay</a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-sm tracking-widest uppercase text-slate-300">Company</h4>
            <div className="flex flex-col gap-4">
              <a className="text-slate-500 hover:text-primary transition-colors" href="#">About</a>
              <a className="text-slate-500 hover:text-primary transition-colors" href="#">Careers</a>
              <a className="text-slate-500 hover:text-primary transition-colors" href="#">Press</a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-sm tracking-widest uppercase text-slate-300">Resources</h4>
            <div className="flex flex-col gap-4">
              <a className="text-slate-500 hover:text-primary transition-colors" href="#">Docs</a>
              <a className="text-slate-500 hover:text-primary transition-colors" href="#">GitHub</a>
              <a className="text-slate-500 hover:text-primary transition-colors" href="#">Contact</a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-sm tracking-widest uppercase text-slate-300">Legal</h4>
            <div className="flex flex-col gap-4">
              <a className="text-slate-500 hover:text-primary transition-colors" href="#">Privacy</a>
              <a className="text-slate-500 hover:text-primary transition-colors" href="#">Terms</a>
              <a className="text-slate-500 hover:text-primary transition-colors" href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2024 Obolus Finance. Built on Cardano.</p>
          <p>Designed for global inclusion.</p>
        </div>
      </footer>
    </div>
  );
}

