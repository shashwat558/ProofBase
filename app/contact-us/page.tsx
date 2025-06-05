"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="min-h-screen bg-black text-white py-24 px-6 border-t border-b border-gray-800">
      <div className="max-w-4xl mx-auto mt-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Contact <span className="text-gray-300">ProofBase</span>
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6 max-w-xl mx-auto"
        >
          <div>
            <label className="block text-sm text-gray-400 mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Message</label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gray-200 text-black px-6 py-3 rounded-lg hover:bg-white transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
