"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";


const content = [
  {
    title: "Welcome to Python for Security",
    description:
      "Dive into a complete, hands-on journey from absolute beginner to professional Python developer with Muhammad Saqlain Shoukat on CodingChatRoom. This course focuses on using Python for ethical hacking and penetration testing, while also covering core Python skills needed for real-world security projects.",
      image: "/pythonforsecurity.png",
    content: (
    //   <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
    //     Python for Security
    //   </div>
    <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/pythonforsecurity.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Python for Security"
        />
      </div>
    ),
  },
  {
    title: "Core Python & Security Skills",
    description:
      "Learn Python fundamentals including data types, operators, control flow, comprehensions, functions, scope, modules, packages, file handling, strings, regex, and error handling. Understand object-oriented programming with classes, inheritance, encapsulation, and apply these skills to automate tasks and build secure scripts.",
      image: "/CodingChatRoomLogo.jpeg",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/CodingChatRoomLogo.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Core Python & Security Skills"
        />
      </div>
    ),
  },
  {
    title: "Pentesting & Cybersecurity Applications",
    description:
      "Use Python for ethical security work: automate reconnaissance, integrate tools like Nmap and Burp, build simple vulnerability scanners, simulate exploits in a safe lab environment, and create reporting/remediation workflows. Gain practical experience in real-world penetration testing scenarios.",
      image: "/EthicalHackerDeveloper.png",
    content: (
    //   <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
    //     Pentesting Applications
    //   </div>
    <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/EthicalHackerDeveloper.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Pentesting Applications"
        />
      </div>
    ),
  },
  {
    title: "Project Based Learning",
    description:
      "Work through short, example-driven lessons with exercises. Build automation scripts, ethical hacking tools, and sample reports. Learn to publish projects to GitHub, write professional READMEs, and showcase your work for a career in Python-based cybersecurity and penetration testing.",
      image: "/pythonprojects.png",
    content: (
    //   <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
    //     Project Based Learning
    //   </div>
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/pythonprojects.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Project Based Learning"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
