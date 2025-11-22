"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-160 rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Python gives ethical hackers a fast, readable toolkit to automate discovery and verify defenses—helping professionals find and fix security issues responsibly and within the law.",
    name: "Python — Penetration Testing",
    title: "For Ethical Hacker",
  },
  {
    quote:
      "For web developers, Python accelerates prototyping and backend integrations with clear, maintainable code—making it simple to build secure, user-friendly web apps.",
    name: "Python — Web Development",
    title: "For Web Developer",
  },
  {
    quote:
      "Backend engineers rely on Python for robust APIs, reliable services, and fast iteration. Its ecosystem helps teams scale systems while maintaining clean architecture and strong testing practices.",
    name: "Python — Backend",
    title: "For Backend Developer",
  },
  {
    quote:
      "In machine learning, Python connects research to production fast—libraries and tooling let engineers experiment, validate, and deploy models responsibly with reproducible workflows.",
    name: "Python — Machine Learning",
    title: "For ML",
  },
  {
    quote:
      "For AI development, Python provides the frameworks and clarity to build intelligent systems ethically—prioritizing transparency, validation, and human-centered design.",
    name: "Python — AI",
    title: "For AI",
  },
  {
    quote:
      "Across roles, Python's readability and extensive libraries turn ideas into practical tools—empowering professionals to solve real problems while following ethical and legal standards.",
    name: "Python — Universal",
    title: "For Developers & Security Engineers",
  },
];
