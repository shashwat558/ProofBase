"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Coins, Search, Zap } from "lucide-react"
import Image from "next/image"
import {motion} from "framer-motion"
const headingVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 1,
      },
    },
  };

  const subheadingVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 1,
        delay: 0.2, 
      },
    },
  };
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h1 variants={headingVariants} initial="hidden" animate="visible" className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent">
            Reimagining Work.
            <br />
            <span className="text-cyan-400">On-Chain.</span>
          </motion.h1>
          <motion.p variants={subheadingVariants} initial="hidden" animate="visible" className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-transparent bg-gradient-to-br from-gray-100 via-gray-300 to-gray-500 bg-clip-text drop-shadow-[2px_2px_1px_rgba(0,0,0,0.5)]">
            ProofBase is a decentralized job platform where your credentials are verifiable, your achievements are
            immutable, and your opportunities are permissionless. Say goodbye to gatekeepers. Say hello to proof-driven
            hiring.
            </motion.p>

        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <motion.div initial={{opacity: 0, y:100}} animate={{opacity:1, y:0}} transition={{duration:0.3}} className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-cyan-400">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card className="bg-gray-900/50 border-gray-800 border-b-3 border-l-3 hover:border-b-[2px] border-t-0 border-r-0 hover:border-l-[2px] backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 border-[2px] border-gray-600 rounded-full flex items-center justify-center">
                  <Coins className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Mint Your Resume</h3>
                <p className="text-gray-400 leading-relaxed">
                  Upload your background and create your Resume NFT — a cryptographically signed, on-chain credential
                  tied to your wallet.
                </p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-900/70 border-t-0 border-r-0  border-b-3 border-l-3 hover:border-b-[2px] transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 border-[2px] border-gray-600 rounded-full flex items-center justify-center">
                  <Search className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Discover Bounties</h3>
                <p className="text-gray-400 leading-relaxed">
                  Explore gig bounties and full-time roles directly posted by companies and DAOs. No recruiters, no spam
                  — just real opportunities.
                </p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="bg-gray-900/50  border-b-3 border-l-3 hover:border-b-[2px] border-t-0 border-r-0 border-gray-800 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 border-[2px] border-gray-600 rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Get Verified & Paid</h3>
                <p className="text-gray-400 leading-relaxed">
                  Complete tasks, earn trust, and get rewarded instantly on Solana. Your completed work and history
                  become part of your Proof Profile.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* Why ProofBase Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-cyan-400">Why ProofBase?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Value Prop 1 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl mb-4">🔐</div>
              <h3 className="text-lg font-semibold mb-3 text-white">Verified Identity & Skills</h3>
              <p className="text-gray-400 text-sm">
                Every resume is a tamper-proof NFT. Employers hire based on verifiable experience — not buzzwords.
              </p>
            </div>

            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold mb-3 text-white">Instant Payouts</h3>
              <p className="text-gray-400 text-sm">
                Smart contracts pay you the moment work is accepted. No invoices, no waiting.
              </p>
            </div>

            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-lg font-semibold mb-3 text-white">Open Access</h3>
              <p className="text-gray-400 text-sm">
                Anyone can participate. From freelancers to full-time hunters — ProofBase is global and permissionless.
              </p>
            </div>

            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-lg font-semibold mb-3 text-white">Transparent Reputation</h3>
              <p className="text-gray-400 text-sm">
                Your history is public, portable, and provable — across gigs, companies, and borders.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 via-black to-zinc-900/30"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
            Meet the Creator
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-zinc-500 to-transparent mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main Card */}
          <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-zinc-800 overflow-hidden">
            {/* Subtle grid pattern */}
            

            {/* Content */}
            <div className="relative p-8 md:p-12">
              {/* Profile Image Container */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative mb-8"
              >
                <div className="relative w-32 h-32 mx-auto">
                  {/* Layered shadows for depth */}
                  <div className="absolute inset-0 bg-zinc-950 rounded-full blur-xl opacity-60 transform translate-y-2 scale-110"></div>
                  <div className="absolute inset-0 bg-black rounded-full blur-lg opacity-40 transform translate-y-1 scale-105"></div>
                  
                  {/* Image container */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 8,
                      rotateX: 8,
                      transition: { duration: 0.4, ease: "easeOut" }
                    }}
                    className="relative w-full h-full rounded-full overflow-hidden border-2 border-zinc-700/50"
                    style={{
                      transformStyle: 'preserve-3d',
                      boxShadow: `
                        0 0 0 1px rgba(63, 63, 70, 0.3),
                        0 4px 8px rgba(0, 0, 0, 0.4),
                        0 8px 16px rgba(0, 0, 0, 0.3),
                        0 16px 32px rgba(0, 0, 0, 0.2)
                      `
                    }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center ">
                      <Image width={130} height={130} src={"/my.png"} alt="my" className="object-center mt-10"/>
                    </div>
                    
                    {/* Inner rim light */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-zinc-600/20 to-transparent"></div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Name and Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-8"
              >
                <h3 className="text-3xl font-bold mb-3 text-white">
                  Shashwatt
                </h3>
                <div className="inline-flex items-center px-4 py-2 bg-zinc-800/80 rounded-full border border-zinc-700/50">
                  <span className="text-zinc-300 font-medium">Founder, ProofBase</span>
                </div>
              </motion.div>

              {/* Bio Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto space-y-6 text-zinc-300 leading-relaxed"
              >
                <p className="text-lg">
                  I&apos;m a solo founder building the future of hiring — where trust is programmable and merit is on-chain.
                  ProofBase was born from frustration with opaque hiring systems, ghosted applications, and credential
                  inflation. I believe your work should be self-validating — and rewarded transparently.
                </p>
                <p className="text-lg">
                  When I&apos;m not writing smart contracts or crafting frontends, I&apos;m obsessing over how we can make
                  opportunity more equitable through decentralization.
                </p>
              </motion.div>
            </div>

            {/* Card edge highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-600/50 to-transparent"></div>
          </div>

          {/* Floating base shadow */}
          <div className="absolute inset-x-8 -bottom-2 h-8 bg-black rounded-full blur-2xl opacity-40"></div>
        </motion.div>
      </div>

      {/* Ambient particles */}
      <div className="absolute top-20 left-10 w-1 h-1 bg-zinc-600 rounded-full opacity-60"></div>
      <div className="absolute top-40 right-20 w-0.5 h-0.5 bg-zinc-500 rounded-full opacity-40"></div>
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-zinc-600 rounded-full opacity-30"></div>
    </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-gray-900/50 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Ready to Join the Future of Work?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Mint your resume. Earn your reputation. Find work that pays — transparently and instantly.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-600 hover:to-cyan-500 text-black font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
          >
            Get Started →
          </Button>
        </div>
      </section>
    </div>
  )
}
