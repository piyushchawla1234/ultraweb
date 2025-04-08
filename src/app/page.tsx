// src/app/page.tsx

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden overflow-y-auto relative">
      <div className="fixed top-0 left-0 w-full h-full z-0">
        {/* Nurolink-style background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/neural-animation.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-28 text-center space-y-20">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight text-white drop-shadow-xl">
            <motion.span className="text-blue-500">ULTRAWEB</motion.span>
            <span className="text-sm font-light ml-2 align-top">.ai</span>
          </h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
            whileHover={{ scale: 1.02, color: '#ffffff' }}
          >
            Imagine an internet that thinks with you. UltraWeb.ai is your intelligent browser sidekick —
            it enhances search engines, books flights from search queries, fills forms smartly, and
            automates your digital journey using AI. Just type — and let UltraWeb handle the rest.
          </motion.p>
        </div>

        {/* Signup Form */}
        <form
          action="https://formspree.io/f/your-form-id" // Replace this
          method="POST"
          className="flex flex-col items-center gap-4"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email for early access"
            className="px-5 py-3 w-80 rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 focus:outline-none placeholder-white shadow-xl border border-white/20 backdrop-blur-sm"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg backdrop-blur-sm"
          >
            🚀 Get Early Access
          </button>
        </form>

        <motion.section
          className="max-w-3xl mx-auto text-center text-gray-200 px-4 space-y-6 pb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Welcome to the Future of Browsing
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            <strong className="text-blue-400">UltraWeb.ai</strong> is not just a browser extension — it's your personal AI that upgrades how you explore the internet.
            Whether you're booking a flight, filling out forms, searching for deals, or just trying to get things done faster — 
            UltraWeb does the work for you.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            Just type like you normally do. UltraWeb understands your intent, automates your task, and helps you achieve results with minimal effort. 
            It’s like having a smart co-pilot for your everyday web life.
          </p>
        </motion.section>
      </div>
    </main>
  );
}
