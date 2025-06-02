"use client"

import React from 'react';
import { motion} from "framer-motion";

import Unchain from './Chain';
import NftCard from './HeroCard';
const HeroSection = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger animation of children
      },
    },
  };

  

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
        delay: 0.2, // Delay slightly after heading
      },
    },
  };

  const splineVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        duration: 1.2,
        delay: 0.4, // Delay after text content
      },
    },
  };
  const backgroundSplineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      scale: 0.8,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };


  const subHeadingText = "Mint a dynamic NFT that evolves with every gig you complete. Showcase real, verified work — forever on-chain.";

  return (
    <div className='min-w-screen min-h-[85vh] md:min-h-[90vh] flex items-center justify-center p-5 relative overflow-hidden backdrop-blur-xl'>

        <motion.div
        className="absolute inset-0 -z-10 blur-sm " 
        variants={backgroundSplineVariants}
        initial="hidden"
        animate="visible"
      >
        <Unchain />
        </motion.div>
     

      <motion.div
        className='w-full max-w-screen-xl h-full flex flex-col md:flex-row justify-center items-center p-3 gap-8 md:gap-4'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        <motion.div
          className='flex flex-col justify-center items-center md:items-start text-center md:text-left w-full md:w-1/2 lg:w-3/5 space-y-6 md:space-y-8 order-2 md:order-1'
          
        >
          <motion.h1
            className='text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-400 leading-tight'
            style={{
              textShadow: `
                1px 1px 2px rgba(0, 0, 0, 0.3),
                2px 2px 3px rgba(0, 0, 0, 0.2)
              `
            }}
            variants={headingVariants}
          >
            Proof of Work, Not Just Words.
          </motion.h1>

          <motion.p
            className='text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-xl leading-relaxed'
            variants={subheadingVariants}
          >
            {subHeadingText}
          </motion.p>

         
          <motion.button
             variants={subheadingVariants} 
             className='mt-6 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 text-lg'
           >
             Get Started
           </motion.button>

        </motion.div>

        
        <motion.div
          className='w-full md:w-1/2 lg:w-2/5 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex justify-center items-center order-1 md:order-2'
          variants={splineVariants}
        >
          <NftCard />
          
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HeroSection;