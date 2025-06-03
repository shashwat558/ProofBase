"use client";


import Image from "next/image";
import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export const About = () => {
  return (
    <BackgroundBeamsWithCollision>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="w-[100vw] bg-black min-h-[60vh] flex items-center justify-center py-5 px-4 sm:px-6 lg:px-8 border-r-0 border-l-0 border-t-[1px] border-gray-600"
      >
        <div className="w-full max-w-6xl h-full flex flex-col lg:flex-row items-center lg:gap-40  rounded-2xl p-8">
          
          <div className="w-full lg:w-[75%] flex flex-col justify-center gap-4 sm:gap-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-wide leading-tight text-gray-400">
              Redefining Work in Web3 with ProofBase
            </h1>
            <p className="text-xl sm:text-2xl tracking-wide text-gray-300">
              Your resume. On-chain. Verified. Unstoppable.
            </p>
            <p className="text-base sm:text-lg md:text-xl tracking-tight text-gray-400 font-light">
              ProofBase is a decentralized resume and bounty platform powered by Solana. We turn traditional resumes into dynamic NFTs that evolve with your work — verified by the people who pay you. Bounties are trustlessly posted, completed, and paid out — with reputation built transparently on-chain. Whether you&apos;re a builder, designer, writer, or marketer, ProofBase helps you prove your worth — forever.
            </p>

            <Link
              href="/about"
              className="inline-block mt-6 px-6 py-3 bg-white text-black rounded-md text-lg font-medium shadow hover:bg-gray-200 transition-all"
            >
              Learn More
            </Link>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative aspect-square max-lg:max-w-md">
            <Image
              src="/cube2.png"
              alt="Proof of Work NFT"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 bg-black/80 text-white text-lg tracking-wider rounded">
              PROOFBASE
            </div>
          </div>
        </div>
      </motion.div>
    </BackgroundBeamsWithCollision>
  );
};
