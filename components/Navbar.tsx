"use client"
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";


const HamburgerIcon = ({ isOpen, toggle }) => (
  <motion.button
    onClick={toggle}
    className="md:hidden z-50 flex flex-col justify-around w-6 h-6 bg-transparent border-none cursor-pointer p-0 focus:outline-none"
    aria-label="Toggle menu"
    whileTap={{ scale: 0.9 }}
  >
    <motion.div
      className="w-6 h-0.5 bg-gray-100 rounded-sm"
      variants={{
        closed: { rotate: 0, y: 0 },
        open: { rotate: 45, y: 8 }
      }}
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.3 }}
    ></motion.div>
    <motion.div
      className="w-6 h-0.5 bg-gray-100 rounded-sm my-1.5"
      variants={{
        closed: { opacity: 1 },
        open: { opacity: 0 }
      }}
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.1 }}
    ></motion.div>
    <motion.div
      className="w-6 h-0.5 bg-gray-100 rounded-sm"
      variants={{
        closed: { rotate: 0, y: 0 },
        open: { rotate: -45, y: -8 }
      }}
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.3 }}
    ></motion.div>
  </motion.button>
);


const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { 
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    if (isMobileMenuOpen && latest > (previous ?? 0) + 20 ) setIsMobileMenuOpen(false);
  });

  const navVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.5,
        delay: 0.2,
      }
    },
    hidden: { y: "-120%", opacity: 0, transition: { duration: 0.3 } }, // 
    initial: {
      y: -100,
      opacity: 0,
    }
  };

  const desktopLinkItemVariants = {
    hover: {
      scale: 1.1,
      color: "#E5E7EB",
      transition: { type: "spring", stiffness: 300, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  const logoVariants = {
    hover: {
      scale: 1.05,
      textShadow: "0px 0px 8px rgba(192, 132, 252, 0.5)",
      transition: { type: "spring", stiffness: 300 }
    },
    tap: { scale: 0.98 }
  };

  
  const mobileMenuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        staggerChildren: 0.07, 
      }
    },
    closed: {
      opacity: 0,
      y: "-30%", 
      transition: {
        duration: 0.3,
        when: "afterChildren", 
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  
  const mobileLinkItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 15 }
    },
    closed: {
      y: 30, 
      opacity: 0,
      transition: { duration: 0.2 }
    },
    hover: {
        scale: 1.05,
        color: "#C7D2FE", 
        transition: { duration: 0.2}
    },
    tap: {
        scale: 0.95
    }
  };

  const navLinks = ['About', 'Contact', 'How it works'];

  return (
    <>
      <motion.div
        variants={navVariants}
        initial="initial"
        animate={hidden ? "hidden" : "visible"}
        
        className={`w-full sticky top-5 z-50 flex justify-center items-center`}
      >
        <motion.div
          className='xl:w-2/3 md:p-3 max-sm:p-4 rounded-xl w-[90%] md:w-full p-5 border-[0.5px] border-gray-600/50 bg-gray-900/80 backdrop-blur-md shadow-2xl shadow-purple-500/30'
          
        >
          <motion.div className='flex items-center justify-between'>
            <motion.div
              className='flex h-full items-center gap-3'
              variants={logoVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.h1 className='text-xl sm:text-2xl text-gray-100 font-bold mb-1 cursor-pointer'>
                ProofBase
              </motion.h1>
            </motion.div>

            
            <motion.div className='hidden md:flex items-center gap-3 md:mr-5'>
              <motion.ul className='flex items-center gap-5'>
                {navLinks.map((item) => (
                  <motion.li
                    key={item}
                    className='text-md font-semibold text-gray-400 cursor-pointer'
                    variants={desktopLinkItemVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            
            <div className="md:hidden flex items-center">
              <HamburgerIcon isOpen={isMobileMenuOpen} toggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-x-0 top-[calc(theme(spacing.5)_+_60px)] z-40 mt-2 mx-auto w-[90%]  overflow-hidden" // Position 
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <div className="bg-gray-800/90 backdrop-blur-lg shadow-xl shadow-purple-500/20 rounded-lg p-6 border border-gray-600/50">
                <motion.ul className='flex flex-col items-center gap-6'>
                {navLinks.map((item) => (
                    <motion.li
                    key={item}
                    className='text-lg font-semibold text-gray-200 cursor-pointer w-full text-center py-2'
                    variants={mobileLinkItemVariants} 
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => setIsMobileMenuOpen(false)}
                    >
                    {item}
                    </motion.li>
                ))}
                </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;