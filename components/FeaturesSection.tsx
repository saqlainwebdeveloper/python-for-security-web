import React from "react";
import { useId } from "react";
import {
  Cpu,
  Network,
  Shield,
  Bug,
  Terminal,
  FileText,
  Database,
  Code
} from "lucide-react";

export function FeatureSection() {
  return (
    <div className="py-20 lg:py-20 bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-black/40 dark:bg-black/60 backdrop-blur-md border border-white/10 rounded-3xl p-6 overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
          >
            <Grid size={20} />
            <div className="flex items-center mb-3 space-x-3">
              <feature.icon className="w-6 h-6 text-gradient animate-gradient text-[#8011ff]" />
              <p className="text-lg font-bold text-white relative z-20">
                {feature.title}
              </p>
            </div>
            <p className="text-white/70 text-sm font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "Python for Ethical Hacking",
    description:
      "Learn how Python powers reconnaissance, scanning, exploitation, automation, and reporting in real penetration testing workflows.",
    icon: Cpu,
  },
  {
    title: "Network & Recon Automation",
    description:
      "Build Python scripts to automate Nmap scans, subdomain enumeration, OS detection, banner grabbing, and information gathering.",
    icon: Network,
  },
  {
    title: "Web Pentesting Tools",
    description:
      "Use Python to create custom tools that test login pages, brute-force forms, detect common vulnerabilities, and analyze responses.",
    icon: Shield,
  },
  {
    title: "Vulnerability Scanners",
    description:
      "Develop lightweight scanners to detect SQLi, XSS, LFI/RFI patterns, misconfigurations, weak headers, and authentication issues.",
    icon: Bug,
  },
  {
    title: "Exploitation Basics",
    description:
      "Learn payload creation, request manipulation, and how exploits work in labs — strictly ethical and educational only.",
    icon: Terminal,
  },
  {
    title: "Packet & Traffic Analysis",
    description:
      "Use Python to sniff packets, parse network data, analyze traffic anomalies, and understand Wireshark-style inspection.",
    icon: Database,
  },
  {
    title: "Reporting & Documentation",
    description:
      "Write professional pentest reports, record findings, reproduce issues, and present remediation guidance.",
    icon: FileText,
  },
  {
    title: "Complete Pentesting Track",
    description:
      "A full guided journey: Recon → Scanning → Exploitation → Post-Exploitation → Reporting — all using Python.",
    icon: Code,
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full mask-[linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-linear-to-r from-purple-600/10 via-pink-500/10 to-blue-400/10 mask-[radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay fill-white/5 stroke-white/5"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
