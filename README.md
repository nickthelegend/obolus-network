# Obolus Landing Page 🌌

Welcome to the **Obolus Landing Page** repository! This is the public-facing promotional website for **Obolus**, a decentralized Cross-Chain Buy Now Pay Later (BNPL) protocol. 

The landing page introduces the protocol to users and merchants, explaining how they can leverage assets across multiple chains as collateral for instant BNPL payments.

## 🚀 Tech Stack
This project is built with a modern frontend stack to ensure a fast, responsive, and beautiful user experience:
- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Typography**: [Geist Font](https://vercel.com/font)

## 🛠️ Getting Started

### Prerequisites
Make sure you have Node.js installed. We recommend using `npm` or `pnpm` for managing dependencies.

### Installation & Running Locally

1. Install the dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the landing page.

## 📁 Project Structure
- `app/`: Next.js App Router files, including the main `page.tsx`.
- `public/`: Static assets like images and icons.

## 🌍 About Obolus
Obolus enables decentralized credit by utilizing Chainlink CCIP to pass messages between Satellite Chains (where collateral is locked) and the Master Chain (where credit and debt are managed).

For the actual decentralized application and user dashboard, please see the [`obolus-network`](../obolus-network) project within this workspace.
