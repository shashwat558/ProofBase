/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"
import { useState, useEffect } from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence, useTransform } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
//@ts-ignore
const HamburgerIcon = ({ isOpen, toggle }) => (
  <motion.button
    onClick={toggle}
    className="md:hidden z-50 flex flex-col justify-around w-6 h-6 bg-transparent border-none cursor-pointer p-0 focus:outline-none"
    aria-label="Toggle menu"
    whileTap={{ scale: 0.9 }}
  >
    <motion.div
      className="w-6 h-0.5 bg-gray-700 rounded-sm"
      variants={{
        closed: { rotate: 0, y: 0 },
        open: { rotate: 45, y: 8 },
      }}
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    />
    <motion.div
      className="w-6 h-0.5 bg-gray-700  rounded-sm my-1.5"
      variants={{
        closed: { opacity: 1 },
        open: { opacity: 0 },
      }}
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.2 }}
    />
    <motion.div
      className="w-6 h-0.5 bg-slate-700  rounded-sm"
      variants={{
        closed: { rotate: 0, y: 0 },
        open: { rotate: -45, y: -8 },
      }}
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    />
  </motion.button>
)

const Navbar = () => {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  
  const navbarOpacity = useTransform(scrollY, [0, 100], [0.95, 0.98])
  const navbarScale = useTransform(scrollY, [0, 100], [1, 0.98])
  const navbarBlur = useTransform(scrollY, [0, 100], [8, 16])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()

   
    if (latest > (previous ?? 0) && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }

    
    setScrolled(latest > 50)

    
    if (isMobileMenuOpen && latest > (previous ?? 0) + 20) {
      setIsMobileMenuOpen(false)
    }
  })

  const navVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6,
      },
    },
    hidden: {
      y: "-100%",
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    initial: {
      y: -100,
      opacity: 0,
    },
  }

  const desktopLinkItemVariants = {
    hover: {
      y: -2,
      color: "#ffffff",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.98,
      y: 0,
    },
  }

  const logoVariants = {
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
    tap: { scale: 0.98 },
  }

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
    closed: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  const mobileLinkItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    closed: {
      y: 20,
      opacity: 0,
      transition: { duration: 0.2 },
    },
    hover: {
      x: 8,
      color: "#334155",
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
    },
  }

  const navLinks = [{name:"About", link:"/about"}, {name:"Contact", link:"/contact-us"}, {name: "Our mission", link:"our-mission"}]

  return (
    <>
      <motion.div
        variants={navVariants}
        initial="initial"
        animate={hidden ? "hidden" : "visible"}
        style={{
          opacity: navbarOpacity,
          scale: navbarScale,
        }}
        className="w-full fixed top-4 z-50 flex justify-center items-center px-4"
      >
        <motion.div
          className={`
            xl:w-2/3 w-full max-w-4xl mx-auto px-6 py-4 rounded-2xl
            transition-all duration-500 ease-out 
            ${
              scrolled
                ? " dark:bg-slate-900/90 border border-slate-200/50 dark:border-slate-700/50 shadow-lg shadow-slate-900/5 backdrop-blur-lg"
                : " dark:bg-slate-900/70 border border-slate-200/30 dark:border-slate-700/30 shadow-sm backdrop-blur-lg"
            }
            backdrop-blur-xl
          `}
          style={{
            backdropFilter: `blur(${navbarBlur}px)`,
          }}
        >
          <motion.div className="flex items-center justify-between">
            <motion.div className="flex h-full items-center" variants={logoVariants} whileHover="hover" whileTap="tap">
              <Image src={"/logo2.png"} alt="logo" width={50} height={50}/>
              <Link href={"/"}>
              <motion.h1 className="text-2xl sm:text-3xl text-gray-300 font-bold cursor-pointer tracking-tight">
                ProofBase
              </motion.h1>
              </Link>
            </motion.div>

            <motion.div className="hidden md:flex items-center">
              <motion.ul className="flex items-center gap-8">
                {navLinks.map((item, index) => (
                  <Link key={index} href={item.link}>
                  <motion.li
                    
                    className="text-sm font-medium text-white cursor-pointer relative"
                    variants={desktopLinkItemVariants}
                    whileHover="hover"
                    whileTap="tap"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.1 + index * 0.1,
                        duration: 0.5,
                        ease: "easeOut",
                      },
                    }}
                  >
                    =
                    {item.name}
                    =
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-slate-800 dark:bg-slate-200 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  </motion.li>
                  </Link>
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
            className="md:hidden fixed inset-x-0 top-24 z-40 mx-4"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-xl rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50">
              <motion.ul className="flex flex-col gap-1">
                {navLinks.map((item, index) => (
                  <motion.li
                    key={index}
                    className="text-base font-medium text-slate-700 dark:text-slate-200 cursor-pointer px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-200"
                    variants={mobileLinkItemVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href={item.link}>
                    {item.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar