"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "";
  const MASTER_UNLOCK_KEY = process.env.NEXT_PUBLIC_MASTER_UNLOCK_KEY;

  // Protection states
  const [attempts, setAttempts] = useState<number>(0);
  const [isLocked, setIsLocked] = useState<boolean>(false);

  // Load attempts & lock status from localStorage
  useEffect(() => {
    const savedAttempts = localStorage.getItem("admin_attempts");
    const savedLock = localStorage.getItem("admin_locked");

    if (savedAttempts) setAttempts(parseInt(savedAttempts));
    if (savedLock === "true") setIsLocked(true);
  }, []);

  // --- Login Function ---
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (isLocked) {
      alert("⛔ Too many wrong attempts! Login locked.");
      return;
    }

    if (password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      alert("✅ Logged in successfully!");
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      localStorage.setItem("admin_attempts", newAttempts.toString());

      if (newAttempts >= 3) {
        setIsLocked(true);
        localStorage.setItem("admin_locked", "true");
        alert("⛔ Too many wrong attempts! You are now locked.");
      } else {
        alert(`❌ Wrong password! Attempts left: ${3 - newAttempts}`);
      }
    }
  };

  // --- Master Unlock Function ---
  const handleMasterUnlock = () => {
    const key = prompt("Enter master unlock key:");
    if (key === MASTER_UNLOCK_KEY) {
      setAttempts(0);
      setIsLocked(false);
      localStorage.removeItem("admin_attempts");
      localStorage.removeItem("admin_locked");
      alert("✅ Admin login unlocked!");
    } else {
      alert("❌ Wrong master key!");
    }
  };

  // --- Upload Function ---
  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !title) {
      alert("Please enter title and select file!");
      return;
    }

    const fileName = `${Date.now()}_${file.name}`;

    const { data, error } = await supabase.storage
      .from(process.env.NEXT_PUBLIC_SUPABASE_BUCKET!)
      .upload(fileName, file);

    if (error) {
      alert("❌ Upload failed: " + error.message);
      return;
    }

    const { data: publicData } = supabase.storage
      .from(process.env.NEXT_PUBLIC_SUPABASE_BUCKET!)
      .getPublicUrl(fileName);

    const publicUrl = publicData.publicUrl;

    const { error: dbError } = await supabase
      .from("resources")
      .insert([{ title, description, pdf_url: publicUrl }]);

    if (dbError) {
      alert("❌ Database insert failed: " + dbError.message);
      return;
    }

    alert(`✅ Uploaded ${file.name} successfully!`);
    setTitle("");
    setDescription("");
    setFile(null);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      {!isLoggedIn ? (
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-4 bg-[#111] p-10 rounded-3xl shadow-lg w-full max-w-md"
        >
          <h1 className="text-3xl font-bold mb-4 text-cyan-400 text-center">
            🔐 Admin Login
          </h1>

          {isLocked && (
            <p className="text-red-500 text-center mb-3">
              ⛔ Login Disabled (Too many attempts)
            </p>
          )}

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-xl bg-gray-800 text-white focus:outline-none"
            disabled={isLocked}
          />

          <button
            type="submit"
            className="p-3 rounded-xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLocked}
          >
            Login
          </button>

          {isLocked && (
            <button
              type="button"
              onClick={handleMasterUnlock}
              className="mt-2 p-2 rounded-xl bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition"
            >
              🔑 Master Unlock
            </button>
          )}

          <p className="text-center text-gray-400 mt-3 text-sm">
            Attempts: {attempts} / 3
          </p>
        </form>
      ) : (
        <form
          onSubmit={handleUpload}
          className="flex flex-col gap-4 bg-[#111] p-10 rounded-3xl shadow-lg w-full max-w-md"
        >
          <h1 className="text-3xl font-bold mb-4 text-cyan-400 text-center">
            📤 Upload PDF
          </h1>

          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-3 rounded-xl bg-gray-800 text-white focus:outline-none"
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-3 rounded-xl bg-gray-800 text-white focus:outline-none"
          />

          <input
            type="file"
            accept=".pdf"
            onChange={(e) => e.target.files && setFile(e.target.files[0])}
            className="text-white"
          />

          <button
            type="submit"
            className="p-3 rounded-xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition"
          >
            Upload PDF
          </button>
        </form>
      )}
    </main>
  );
}
