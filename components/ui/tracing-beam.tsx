"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"], // Track full content
  });

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, [children]);

  // Smooth tracking for neon gradient
  const y1 = useSpring(
  useTransform(scrollYProgress, [0, 1], [svgHeight, 0]),
  { stiffness: 500, damping: 90 }
);

const y2 = useSpring(
  useTransform(scrollYProgress, [0, 1], [svgHeight - 50, 50]),
  { stiffness: 500, damping: 90 }
);


  return (
    <motion.div
      ref={ref}
      className={cn("relative mx-auto w-full max-w-4xl", className)}
    >
      {/* Tracing line wrapper */}
      <div className="absolute top-0 left-0 h-full flex items-start">
        {/* Tracker circle */}
        <motion.div className="flex h-4 w-4 items-center justify-center rounded-full border border-cyan-400 shadow-lg">
          <motion.div
            className="h-2 w-2 rounded-full border border-cyan-400 bg-cyan-400"
          />
        </motion.div>

        {/* SVG Line */}
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-4 block"
          aria-hidden="true"
        >
          {/* Base faint line */}
          <motion.path
            d={`M 10 0 V ${svgHeight}`}
            fill="none"
            stroke="#00ffff"
            strokeOpacity="0.1"
            strokeWidth={2}
          />

          {/* Neon gradient line */}
          <motion.path
            d={`M 10 0 V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth={1}
            className="motion-reduce:hidden"
          />

          <defs>
            <motion.linearGradient
  id="gradient"
  x1="0"
  x2="0"
  y1={y1}
  y2={y2}
  gradientUnits="userSpaceOnUse"
>
  <stop offset="0" stopColor="#FFFF00" stopOpacity={0} />  // Bright Yellow start
  <stop offset="1.4" stopColor="#FFFFFF" stopOpacity={0.8} /> // White highlight middle
  <stop offset="10.7" stopColor="#FFD700" stopOpacity={1.9} /> // Golden Yellow
  <stop offset="0" stopColor="#FFFF00" stopOpacity={1} />  // Neon Yellow end
</motion.linearGradient>

          </defs>
        </svg>
      </div>

      {/* Content with left padding to avoid overlap */}
      <div ref={contentRef} className="pl-12">
        {children}
      </div>
    </motion.div>
  );
};
