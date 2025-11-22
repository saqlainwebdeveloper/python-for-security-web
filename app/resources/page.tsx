"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { CardSpotlight } from "@/components/ui/card-spotlight";

type Resource = {
  id: number;
  title: string;
  description: string;
  pdf_url: string;
};

export default function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    const fetchResources = async () => {
      const { data } = await supabase
        .from("resources")
        .select("*")
        .order("created_at", { ascending: false });

      if (data) setResources(data);
    };
    fetchResources();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      {/* Page Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-white/90">
  Python for Security
</h1>
<p className="text-center text-white/70 text-lg md:text-xl mb-12">
  All the resources you need to install and learn Python for Security effectively
</p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {resources.map((pdf) => (
          <CardSpotlight
            key={pdf.id}
            className="h-96 w-full sm:w-88 lg:w-[20rem] p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            {/* Title */}
            <p className="text-xl font-bold relative z-20 mt-2 text-white">
              {pdf.title}
            </p>

            {/* Description */}
            <div className="text-neutral-200 mt-4 relative z-20 text-sm md:text-base flex-1">
              {pdf.description}
            </div>

            {/* Download Button at Bottom */}
            <a
  href={`/api/download?fileName=${encodeURIComponent(
    pdf.pdf_url.split("/").pop()!
  )}`}
  download={pdf.title + ".pdf"}
  className="mt-auto bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block"
>
  <span className="absolute inset-0 overflow-hidden rounded-full">
    <span className="absolute inset-0 rounded-full bg-[radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
  </span>
  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-4 px-6 ring-1 ring-white/10 ">
    <span className="font-bold text-[17px]">Download PDF</span>
    <svg
      fill="none"
      height="16"
      viewBox="0 0 24 24"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.75 8.75L14.25 12L10.75 15.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </div>
  <span className="absolute bottom-0 left-4.5 h-px w-[calc(100%-2.25rem)] bg-linear-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
</a>

          </CardSpotlight>
        ))}
      </div>
    </main>
  );
}
