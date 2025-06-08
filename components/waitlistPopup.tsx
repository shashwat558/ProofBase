"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WaitlistModal({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("Submitting...");
    
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      
      if (res.ok) {
        setMessage("🎉 Thank you!");
        setEmail("");
        setTimeout(() => {
          setShowModal(false);
          setMessage("");
          setIsSubmitting(false);
        }, 1500);
      } else {
        setMessage(data.error || "Something went wrong.");
        setIsSubmitting(false);
      }
    } catch {
      setMessage("Network error.");
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ 
              type: "spring",
              damping: 25,
              stiffness: 300,
              duration: 0.3
            }}
            className="bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-md relative border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-800"
            >
              ✕
            </motion.button>

            {/* Header */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-6"
            >
              <h2 className="text-2xl font-bold text-white mb-2">Join the Waitlist</h2>
              <p className="text-gray-400 text-sm">Be the first to know when we launch</p>
            </motion.div>

            {/* Form */}
            <div className="space-y-4">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
                  required
                />
              </motion.div>

              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
              >
                <motion.span
                  animate={isSubmitting ? { opacity: [1, 0.5, 1] } : {}}
                  transition={{ repeat: isSubmitting ? Infinity : 0, duration: 1 }}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </motion.span>
              </motion.button>

              {/* Message */}
              <AnimatePresence>
                {message && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`text-sm text-center mt-2 ${
                      message.includes("🎉") 
                        ? "text-green-400" 
                        : message.includes("error") || message.includes("wrong")
                        ? "text-red-400"
                        : "text-gray-300"
                    }`}
                  >
                    {message}
                  </motion.p>
                )}
              </AnimatePresence>
              </div>

            {/* Decorative elements */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-purple-500 rounded-full opacity-20"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}