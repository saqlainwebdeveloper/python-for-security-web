"use client";

import React from "react";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";

const calsans = Inter({ subsets: ["latin"] });

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="w-full mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={index} className="mb-10 text-white">
            
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge(calsans.className, "text-xl mb-4 text-white")}>
              {item.title}
            </p>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Coding Chat Room",
    badge: "Platform",
    description: (
      <p>
        Coding Chat Room is your dedicated space for ethical hacking and cybersecurity learning,
        designed to take you from 0 to advanced penetration testing with practical demonstrations,
        real-world examples, and step-by-step clarity. You learn Linux, Programming, Nmap, Wireshark,
        Metasploit, Termux, and complete hacking workflows without confusion.
      </p>
    ),
  },
  {
    title: "Muhammad Saqlain Shoukat",
    badge: "Founder",
    description: (
      <>
        <p>
          I am Muhammad Saqlain Shoukat — an ethical hacker, web developer, app developer,
          and future CEH/OSCP professional. I teach cybersecurity in a simple and practical way  
          so every learner can understand how real hackers think and operate.
        </p>
        <p>
          My content includes advanced pentesting labs, bug bounty workflows, OSINT,
          exploitation techniques, secure coding, and full preparation for certifications like CEH and OSCP.
        </p>
      </>
    ),
  },
  {
    title: "What You Will Learn?",
    badge: "Skills",
    description: (
      <p>
        You will learn complete ethical hacking from scratch — reconnaissance, scanning,
        exploitation, OSINT, payload generation, phishing, MITM, secure coding, bug bounties,
        penetration testing, app security, and web vulnerabilities with real-world examples.
      </p>
    ),
  },
];
