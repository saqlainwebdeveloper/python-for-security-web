import React from "react";
import { Vortex } from "@/components/ui/vortex";
import Link from "next/link";

export function VortexDemo() {
  return (
    <div className="w-full mx-auto h-screen  overflow-hidden">
      <Vortex
        backgroundColor="transparent"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          PYTHON FOR SECURITY
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Downlaod free Hand Written <span className="text-[#1ef] font-bold">PDF notes</span> of {" "}
          <span className="text-[#1ef] font-bold">PYTHON FOR SECURITY</span> by the founder of {" "}
          <span className="text-[#1ef] font-bold">Coding Chat Room</span>, <span className="text-[#1ef] font-bold">Ethical Hacker</span>,
          <span className="text-[#1ef] font-bold"> Web Developer</span> and<span className="text-[#1ef] font-bold"> App Developer</span> {" "}
          <span className="text-[#1ef] font-bold">Muhammad Saqlain Shoukat</span>!
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <Link href="/resources">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset] cursor-pointer text-[20px] font-bold">
              Download Free
            </button>
          </Link>
        </div>
      </Vortex>
    </div>
  );
}
