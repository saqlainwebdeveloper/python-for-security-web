import React from "react";
import { Instagram, Youtube, Github, } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black/90 backdrop-blur-md border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo + Brand */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-cyan-400 shadow-lg mb-4"
          />
          <h3 className="text-white text-2xl font-bold tracking-wide">
            CodingChatRoom
          </h3>
          <p className="text-white/60 mt-1 text-center md:text-left max-w-xs">
            Master Python for Security, Pentesting, Web & AI with hands-on projects and real-world workflows.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex flex-col gap-2 text-white/70">
            <h4 className="font-semibold text-white text-lg mb-2">Vist</h4>
            <a href="/resources" className="hover:text-cyan-400 transition-colors">Resources</a>
            <a href="/faqs" className="hover:text-yellow-500 transition-colors">FAQs</a>
            <a href="https://www.youtube.com/@CodingChatRoom" target="_blank" className="hover:text-red-500 transition-colors">YouTube</a>
            <a href="https://www.youtube.com/playlist?list=PL-Y4YkNs_EJGZEMaG6vck4KSS-WGXGxJf" target="_blank" className="hover:text-green-500 transition-colors">Full Course</a>
          </div>
          <div className="flex flex-col gap-2 text-white/70">
            <h4 className="font-semibold text-white text-lg mb-2">Follow Me</h4>
            <div className="flex gap-4 mt-1">
              <a href="https://www.instagram.com/codingchatroom/" className="hover:text-pink-500 transition-colors"><Instagram className="w-6 h-6" /></a>
              <a href="https://github.com/CodingChatRoom" className="hover:text-green-900 transition-colors"><Github className="w-6 h-6" /></a>
              <a href="https://www.youtube.com/@CodingChatRoom" className="hover:text-red-600 transition-colors"><Youtube className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-white/10 mt-6 pt-6 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} CodingChatRoom. All rights reserved. Crafted with ❤️ by Muhammad Saqlain Shoukat.
      </div>
    </footer>
  );
}
