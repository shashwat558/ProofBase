"use client"

import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 0.77, 0.47, 0.97]
    }
  }
}

const borderVariants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 1, ease: "circOut" } }
}

export const WhySolana = () => {
  return (
    <section className="relative w-full max-h-[75vh] bg-black overflow-hidden" style={{backgroundImage: `url("/solana.png")` , backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
        variants={borderVariants}
      />
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
        variants={borderVariants}
      />

      
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[800px]">
        <div className="absolute inset-0 bg-purple-500/5 rounded-full blur-[100px] -translate-x-1/2" />
        <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-[80px] -translate-x-1/3" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="container mx-auto px-6 py-12 flex items-center justify-center min-h-[75vh]"
      >
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          <div className="flex flex-col gap-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl sm:text-5xl font-medium text-gray-100 tracking-tight">
                Why <span className="text-purple-400">Web3</span> on <span className="text-cyan-400">Solana</span>?
              </h2>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-xl text-gray-400 leading-relaxed">
              ProofBase harnesses Solana&apos;s high-performance blockchain to deliver unparalleled speed,
              transparency, and ownership for developers and builders.
            </motion.p>
            
            <motion.ul variants={containerVariants} className="space-y-4 mt-2">
              {[
                { icon: "⚡", text: "Sub-second finality with 400ms block times" },
                { icon: "🔍", text: "Fully transparent on-chain credentialing" },
                { icon: "💸", text: "Less than $0.001 per transaction" },
                { icon: "🌐", text: "Decentralized global infrastructure" }
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  variants={itemVariants}
                  className="flex items-start group"
                >
                  <span className="text-gray-300 mr-3 group-hover:text-purple-300 transition-colors">
                    {item.icon}
                  </span>
                  <span className="text-gray-300 group-hover:text-gray-100 transition-colors text-lg">
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 blur opacity-75" />
            <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800 p-8 h-full">
              <h3 className="text-2xl mb-6 font-medium text-gray-100">
                Platform Comparison
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                <div className="space-y-4">
                  <p className="font-medium text-gray-400">Traditional Systems</p>
                  <ul className="space-y-3">
                    {[
                      "Centralized control",
                      "High operational fees",
                      "Delayed settlements",
                      "Opaque reputation systems",
                      "Geographic restrictions"
                    ].map((item, i) => (
                      <li key={i} className="text-gray-400 flex items-start">
                        <span className="text-red-400/80 mr-2">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <p className="font-medium text-gray-100">ProofBase</p>
                  <ul className="space-y-3">
                    {[
                      "Decentralized network",
                      "Near-zero fees",
                      "Instant payments",
                      "On-chain reputation",
                      "Global access"
                    ].map((item, i) => (
                      <li key={i} className="text-gray-100 flex items-start">
                        <span className="text-green-400/80 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}