"use client";

import Link from "next/link";
import { CardSpotlight } from "@/components/ui/card-spotlight";

export default function Custom404() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-6 py-20 text-white">
      <h1 className="text-6xl md:text-7xl font-extrabold mb-6 text-white/90 text-center">
        404
      </h1>
      <p className="text-center text-white/70 text-lg md:text-xl mb-12">
        Oops! Page not found. But don’t worry, you can go to one of these pages:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl w-full mx-auto">
        {[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "FAQs", url: "/faqs" },
        ].map((btn) => (
          <CardSpotlight
            key={btn.url}
            className="h-48 w-full flex flex-col items-center justify-center p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Link href={btn.url} className="mt-auto w-full">
              <button className="w-full bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-3 px-6 ring-1 ring-white/10 justify-center">
                  <span className="font-bold text-[17px]">{btn.name}</span>
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
              </button>
            </Link>
          </CardSpotlight>
        ))}
      </div>
    </main>
  );
}
