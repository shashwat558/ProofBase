"use client"


import { Github, Twitter } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-gray-700 px-6 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10 text-gray-400 text-sm">

        
        <div className="flex flex-col gap-4">
          <span className="text-xl font-semibold text-white tracking-wide">ProofBase</span>
          <p className="max-w-sm">
            Building the future of work — decentralized, trustless, and on-chain.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <Twitter size={20} />
            </a>
            <a href="https://github.com/yourrepo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <Github size={20} />
            </a>
          </div>
        </div>

        
        <div className="grid grid-cols-2 gap-6 md:text-right md:ml-auto">
          <div className="flex flex-col gap-2">
            <span className="text-white font-medium">Explore</span>
            <Link href="/docs" className="hover:text-white transition">Docs</Link>
            <Link href="/faq" className="hover:text-white transition">FAQ</Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white font-medium">Legal</span>
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
          </div>
        </div>
      </div>

      
      <div className="mt-4 border-t border-gray-800 pt-3 h-1 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} ProofBase. All rights reserved.
      </div>
    </footer>
  );
};
