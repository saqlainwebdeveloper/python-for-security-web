import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Python",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-white md:text-sm dark:text-neutral-200">
            Learn from very basics to advance Python first and then next
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/CodingChatRoomLogo.jpeg"
              alt="CodingChatRoomLogo"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/EthicalHackerDeveloper.png"
              alt="EthicalHackerDeveloper"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/pythonforsecurity.png"
              alt="pythonforsecurity"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/webDownload.png"
              alt="webDownload"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Python Dev",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-white md:text-sm dark:text-neutral-200">
            Python developers design, code, and debug software systems and applications using the Python programming language.
          </p>
          <p className="mb-8 text-xs font-normal text-white md:text-sm dark:text-neutral-200">
            Build and break to truly understand the systems you protect; let curiosity be the fuel for your endless learning journey.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/python1.png"
              alt="python1"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/python2.png"
              alt="python2"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/python3.png"
              alt="python3"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/python4.png"
              alt="python4"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "PenTesting",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-white md:text-sm dark:text-neutral-200">
            On reaching this level do this type of activities comfortabely
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">
              ✅ Python based Port Scanner
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">
              ✅ Vulnerability Detection Script
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">
              ✅ Brute force Attack
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">
              ✅ Packet Sniffing using Scapy
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">
              ✅ QR-based Payload Delivery
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/portscanner.png"
              alt="portscanner"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/vulnerability.png"
              alt="vulnerability"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/bruteforce.png"
              alt="bruteforce"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/sniffer.png"
              alt="sniffer"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
