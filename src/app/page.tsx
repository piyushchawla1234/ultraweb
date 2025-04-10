"use client";
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { RocketIcon, SearchIcon, BrainIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function LandingPage() {
  const lightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (lightRef.current) {
        animationFrameId = requestAnimationFrame(() => {
          if (lightRef.current) {
            lightRef.current.style.left = `${e.clientX}px`;
            lightRef.current.style.top = `${e.clientY}px`;
          }
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* Optimized Glowing Cursor Effect */}
      <div
        ref={lightRef}
        className="pointer-events-none fixed w-32 h-32 -ml-16 -mt-16 rounded-full bg-purple-500 opacity-70 blur-2xl z-10 transition-transform duration-100 mix-blend-screen"
      ></div>

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20 z-0"
      >
        <source src="/background-video.mp4" type="video/mp4" />
        {/* Optional fallback text */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className="relative z-20 px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl font-bold leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            UltraWeb.ai
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            The AI-native way to search, browse, and act on the internet. Smarter, faster, and deeply personal.
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl px-6 py-2">
                Join the Waitlist
              </Button>
              <Button variant="outline" className="border-gray-500 text-gray-300 rounded-xl px-6 py-2">
                See How It Works
              </Button>
            </div>
            <Button className="text-lg px-6 py-3 rounded-xl shadow-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90">
              🔮 Try UltraWeb
            </Button>
          </div>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-5xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="bg-gray-900/70 rounded-2xl p-6 shadow-xl">
            <SearchIcon className="mx-auto h-10 w-10 text-purple-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Smarter Search</h3>
            <p className="text-gray-400 text-sm">
              Natural language queries, summarized results, and AI understanding built into every search.
            </p>
          </div>
          <div className="bg-gray-900/70 rounded-2xl p-6 shadow-xl">
            <BrainIcon className="mx-auto h-10 w-10 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Built-in Intelligence</h3>
            <p className="text-gray-400 text-sm">
              UltraWeb learns your intent, history, and preferences to deliver deeply personal results.
            </p>
          </div>
          <div className="bg-gray-900/70 rounded-2xl p-6 shadow-xl">
            <RocketIcon className="mx-auto h-10 w-10 text-pink-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Actionable AI</h3>
            <p className="text-gray-400 text-sm">
              Take actions directly — book, buy, email, summarize — right from your results page.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
