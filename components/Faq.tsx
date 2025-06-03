"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is ProofBase?",
    answer: "ProofBase is a decentralized credentialing and gig platform powered by Solana. It helps builders earn verifiable, on-chain resumes and get paid instantly for their work.",
  },
  {
    question: "How is it different from platforms like Upwork?",
    answer: "Unlike traditional platforms, ProofBase uses smart contracts to ensure transparency, instant payouts, and ownership of your work history — without middlemen.",
  },
  {
    question: "Why Solana?",
    answer: "Solana offers lightning-fast transactions, low fees, and a thriving developer ecosystem, making it ideal for real-time, micro-incentivized tasks.",
  },
  {
    question: "Who can use ProofBase?",
    answer: "Developers, designers, and contributors across the ecosystem — anyone who wants to showcase their skills and earn through verifiable, on-chain work.",
  },
];

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-black border-t border-gray-800 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-white font-medium text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-gray-800 rounded-xl bg-gray-900/50 p-6"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="text-white text-lg font-medium">{faq.question}</h3>
                <ChevronDown
                  size={20}
                  className={`text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
