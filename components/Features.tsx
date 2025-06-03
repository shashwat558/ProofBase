"use client";

import { motion } from "framer-motion";
import { Bolt, GitBranch, Handshake, Lock, Shield, Wallet } from "lucide-react";

const features = [
  {
    icon: <Lock size={20} className="text-white"/>,
    title: "Decentralized Identity",
    description: "Your on-chain resume lives with you — fully verifiable and tamper-proof.",
    size: "wide",
    height: "normal"
  },
  {
    icon: <Bolt size={20} className="text-white"/>,
    title: "Fast Transactions",
    description: "400ms block times with sub-second finality on Solana.",
    size: "normal",
    height: "wide"
  },
  {
    icon: <Wallet size={20} className="text-white"/>,
    title: "Instant Payouts",
    description: "Receive payments immediately upon verification.",
    size: "normal",
    height: "normal"
  },
  {
    icon: <GitBranch size={20} className="text-white"/>,
    title: "Open Source",
    description: "Seamless GitHub integration for public contributions.",
    size: "normal",
    height: "normal"
  },
  {
    icon: <Shield size={20} className="text-white"/>,
    title: "Trustless System",
    description: "Smart contracts hold funds until work is verified.",
    size: "wide",
     height: "normal"
  },
  {
    icon: <Handshake size={20} className="text-white"/>,
    title: "Proof of Work",
    description: "Every task is permanently recorded on-chain.",
    size: "normal",
    height: "normal"
  },
];

export const Features = () => {
  return (
    <section className="w-full bg-black border-t border-b border-gray-800 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white font-medium mb-4 tracking-tight">
            Why <span className="text-gray-300">ProofBase</span>?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            The credential network for serious builders
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <motion.div
  key={index}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ 
    duration: 0.5, 
    delay: index * 0.1,
    ease: "easeOut"
  }}
  className={`
    group relative rounded-2xl border border-gray-700 
    bg-gradient-to-br from-gray-900/60 to-gray-800/60 
    p-6 hover:from-gray-900/80 hover:to-gray-800/80
    shadow-md hover:shadow-lg transition-all duration-300 ease-in-out
    ${feature.size === "wide" ? "md:col-span-2" : ""} 
    ${feature.height === "wide" ? "row-span-2 lg:h-[22rem]" : "h-full"}
  `}
>
  <div className="flex items-start gap-4">
    <div className="p-3 rounded-lg bg-gray-800 border border-gray-700 shadow-inner">
      {feature.icon}
    </div>
    <div>
      <h3 className="text-lg text-white font-semibold mb-2 tracking-tight">
        {feature.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {feature.description}
      </p>
    </div>
  </div>

  {/* Optional: Glow on hover */}
  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition duration-300 bg-white pointer-events-none blur-2xl" />
</motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};