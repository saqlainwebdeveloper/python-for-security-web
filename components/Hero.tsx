"use client";
import React from "react";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight-new";

export function SpotlightNewDemo() {
  return (
    <div className="h-screen w-full flex md:items-center md:justify-center bg-black/96 antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />

      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
        >
          Welcome to<br /> Python For Security
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ delay: 0.2, duration: 1.3, ease: "easeOut" }}
          className="mt-4 font-normal text-base text-neutral-300 max-w-lg mx-auto"
        >
          Download all episode-wise{" "}
          <span className="text-[#1ef]">PDF notes</span> for the{" "}
          <strong className="text-[#1ef]">Python for Security</strong> YouTube
          Series. New PDFs will appear automatically on this Resources page.
          Follow the course on YouTube for step-by-step tutorials by{" "}
          <span className="text-[#1ef]">Muhammad Saqlain Shoukat</span> on
          <span className="text-[#1ef]"> Coding Chat Room</span>!
        </motion.p>

        {/* Buttons */}
<motion.div
  initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
  viewport={{ once: false, amount: 0.4 }}
  transition={{ delay: 0.4, duration: 1.3, ease: "easeOut" }}
  className="flex flex-col md:flex-row gap-6 mt-10 justify-center"
>
  {/* Resources Button */}
  <a
    href="/resources"
    className="px-6 py-4 bg-[#0f1115] border border-cyan-500
               rounded-3xl text-2xl font-bold text-cyan-400
               shadow-[0_0_15px_rgba(0,255,255,0.4)] hover:shadow-[0_0_35px_rgba(0,255,255,0.7)]
               transform transition-all duration-300 hover:scale-105 hover:tracking-wider"
  >
    📘 Resources
  </a>

  {/* YouTube Channel Button */}
  <a
    href="https://www.youtube.com/@CodingChatRoom"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-4 bg-[#1a0f0f] border border-red-500
               rounded-3xl text-2xl font-bold text-red-400
               shadow-[0_0_15px_rgba(255,0,0,0.4)] hover:shadow-[0_0_35px_rgba(255,0,0,0.7)]
               transform transition-all duration-300 hover:scale-105 hover:tracking-wider"
  >
    ▶ YouTube
  </a>

  {/* Course Playlist Button */}
  <a
    href="https://www.youtube.com/playlist?list=PL-Y4YkNs_EJGZEMaG6vck4KSS-WGXGxJf"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-4 bg-[#0f1a0f] border border-green-400
               rounded-3xl text-2xl font-bold text-green-400
               shadow-[0_0_15px_rgba(0,255,0,0.4)] hover:shadow-[0_0_35px_rgba(0,255,0,0.7)]
               transform transition-all duration-300 hover:scale-105 hover:tracking-wider"
  >
    📺 Full Course
  </a>
</motion.div>

      </div>
    </div>
  );
}
