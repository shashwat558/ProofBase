"use client";

import { motion } from "framer-motion";
import { Sparkles, Users, ShieldCheck } from "lucide-react";

export default function page() {
  return (
    <section className="min-h-screen w-full bg-black text-white py-24 px-6 border-t border-b border-gray-800">
      <div className="max-w-5xl mx-auto mt-10">
        {/* Hero */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-center"
        >
          Our Mission at <span className="text-gray-300">ProofBase</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto text-center"
        >
          We’re building a trustless network where your contributions and skills speak louder than your résumé. Our goal is to eliminate gatekeeping, bring transparency to hiring, and create a new standard of proof — owned by the builder, verifiable by all.
        </motion.p>

        {/* Pillars */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8"
        >
          <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-700 max-w-sm">
            <h3 className="text-xl font-semibold text-white mb-2">Decentralized Proof</h3>
            <p className="text-gray-400 text-sm">
              Every task, milestone, and credential is recorded on-chain, forever.
            </p>
          </div>

          <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-700 max-w-sm">
            <h3 className="text-xl font-semibold text-white mb-2">No Middlemen</h3>
            <p className="text-gray-400 text-sm">
              We replace trust brokers with smart contracts — no fees, no bias.
            </p>
          </div>
        </motion.div>

        {/* Why Now */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-24 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">Why Now?</h2>
          <p className="text-gray-400 text-lg">
            The world of work is shifting — from centralized employment to global, decentralized proof-of-work. With tools like GitHub, crypto rails, and composable credentials, it’s time to rewrite how talent is discovered and trusted.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mt-20"
        >
          <div className="flex flex-col items-center">
            <Users className="text-gray-300 mb-3" size={32} />
            <h3 className="text-3xl font-bold">+1000</h3>
            <p className="text-sm text-gray-400">Builders Onboarded</p>
          </div>
          <div className="flex flex-col items-center">
            <Sparkles className="text-gray-300 mb-3" size={32} />
            <h3 className="text-3xl font-bold">0 Middlemen</h3>
            <p className="text-sm text-gray-400">Trustless Coordination</p>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck className="text-gray-300 mb-3" size={32} />
            <h3 className="text-3xl font-bold">100%</h3>
            <p className="text-sm text-gray-400">Verifiable Proof of Work</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
