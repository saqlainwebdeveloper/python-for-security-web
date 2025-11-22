"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What will I learn in Python for Security?",
    answer:
      "You'll start from absolute basics of Python, learn programming fundamentals, then move to automation, network scanning, web pentesting, and exploit development using Python — covering the full ethical hacking lifecycle.",
  },
  {
    question: "Do I need prior programming experience?",
    answer:
      "No prior experience is needed. The course starts from Level 0, introducing Python syntax, variables, loops, functions, and gradually moves to advanced concepts.",
  },
  {
    question: "How will this course help in ethical hacking?",
    answer:
      "You'll gain hands-on skills to create your own security tools, perform network reconnaissance, detect vulnerabilities, automate scanning, and write pentesting reports ethically and professionally.",
  },
  {
    question: "What practical projects will I complete?",
    answer:
      "Projects include a Python-based port scanner, vulnerability scanner, packet sniffing scripts, web pentesting tools, automated network recon scripts, and complete pentesting lab exercises and much more.",
  },
  {
    question: "How is the learning path structured?",
    answer:
      "The course is divided into levels: every level is more informative and practical then previous",
  },
  {
    question: "Will I understand real-world security workflows?",
    answer:
      "Yes. Each concept is tied to practical, real-world penetration testing scenarios — you’ll simulate attacks ethically in controlled labs and understand how professional pentesters work.",
  },
  {
    question: "Is this course suitable for beginners in cybersecurity?",
    answer:
      "Absolutely. Even if you’re new to cybersecurity, the step-by-step approach ensures you grow from a total beginner to an advanced ethical hacker using Python.",
  },
  {
    question: "Is this course free?",
    answer:
      "Yes! All learning materials, scripts, guides, and practical exercises are completely free to help anyone start their journey in Python-based ethical hacking.",
  },
  {
    question: "What should I do after completing this course?",
    answer:
      "After finishing, you can create your own pentesting tools, participate in CTF challenges, work on bug bounty programs, or pursue professional certifications in ethical hacking.",
  },
  {
    question: "Except notes, is their any video lectures?",
    answer: "Yes! All Python for Security practical lectures in Urdu/Hindi is on our Youtube Channel CodingChatRoom.",
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) =>
    setActiveIndex(index === activeIndex ? null : index);

  return (
    <main className="min-h-screen bg-black text-gray-300 px-4 py-20 font-sans">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-indigo-400 mb-16 drop-shadow-lg tracking-tight">
          💬 Python for Security FAQs
        </h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`relative bg-[#111418]/70 backdrop-blur-md border border-white/10 hover:border-indigo-500 transition-all duration-300 rounded-2xl shadow-lg overflow-hidden ${
                activeIndex === index ? "scale-105 shadow-indigo-500/50" : ""
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center text-lg md:text-xl font-semibold text-gray-100"
              >
                <span>{faq.question}</span>
                <span className="ml-2 text-indigo-400">
                  {activeIndex === index ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out px-6 ${
                  activeIndex === index ? "max-h-[400px] pb-6 pt-1" : "max-h-0 pb-0 pt-0"
                }`}
              >
                <p
                  className={`text-gray-400 text-base md:text-lg leading-relaxed transition-opacity duration-300 ${
                    activeIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
