"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

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
      const { data, error } = await supabase
        .from("resources")
        .select("*")
        .order("created_at", { ascending: false });
      if (data) setResources(data);
    };
    fetchResources();
  }, []);

  return (
    <main className="min-h-screen bg-linear-to-b from-black via-gray-900 to-black text-white p-8">

      {/* Page Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-12 text-center text-cyan-400 drop-shadow-lg">
        📘 Python for Security — Resources
      </h1>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {resources.map((pdf) => (
          <div
            key={pdf.id}
            className="bg-[#111111] p-6 rounded-3xl shadow-[0_0_25px_rgba(0,255,255,0.2)] 
                       hover:shadow-[0_0_50px_rgba(0,255,255,0.5)] hover:scale-105 transition-transform duration-300 relative overflow-hidden"
          >
            {/* PDF Title */}
            <h2 className="text-2xl font-bold mb-3 text-cyan-300">{pdf.title}</h2>

            {/* PDF Description */}
            <p className="opacity-80 mb-6">{pdf.description}</p>

            {/* Download Button */}
            <a
              href={`/api/download?fileName=${encodeURIComponent(pdf.pdf_url.split("/").pop() || "")}`}
              download={pdf.title + ".pdf"}
              className="relative inline-block px-6 py-3 font-bold rounded-xl bg-cyan-500 text-black overflow-hidden group shadow-md hover:shadow-lg hover:bg-cyan-400 transition-all duration-300"
            >
              <span className="relative z-10">⬇ Download PDF</span>
              <span className="absolute inset-0 bg-white opacity-10 rounded-xl transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
