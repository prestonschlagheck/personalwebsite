'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-neutral-900 overflow-hidden">
      {/* Background image with dark overlay and top fade */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/exterior_moore_school.jpg"
          alt="Darla Moore School of Business Exterior"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/60 to-transparent" />
      </div>
      <div className="relative z-10 flex flex-col items-center w-full max-w-2xl mx-auto py-16 gap-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-white text-center tracking-tight"
        >
          Preston Schlagheck
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-sm md:text-base text-neutral-200 text-center font-medium"
        >
          Finance Major, Computer Science Minor
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xs text-neutral-400 text-center mb-2"
        >
          Guilford, Connecticut, United States
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative aspect-square w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl bg-neutral-900 flex items-center justify-center group mx-auto"
          whileHover={{ scale: 1.04 }}
        >
          <Image
            src={"/headshot.jpg"}
            alt="Preston Schlagheck Headshot"
            fill
            style={{ objectFit: 'cover' }}
            className="grayscale transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex gap-4 mt-2"
        >
          <a
            href="https://www.linkedin.com/in/preston-schlagheck/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-neutral-800 text-white rounded-lg border border-neutral-700 transition-all duration-300 hover:bg-white hover:text-neutral-900 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/prestonschlagheck/personalwebsite.git"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-neutral-700 text-white rounded-lg transition-all duration-300 hover:bg-white hover:text-neutral-900 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
} 