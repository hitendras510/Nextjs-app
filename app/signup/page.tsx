"use client";
import axios from "axios";
import { useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup() {
    try {
      const res = await axios.post("http://localhost:3000/api/v1/signup", {
        username,
        password,
      });
      console.log("Signup success:", res.data);
    } catch (err) {
      console.error("Signup failed:", err);
    }
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-4">
      <input
        type="text"
        placeholder="username"
        className="border p-2"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="password"
        className="border p-2"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="bg-blue-600 text-white px-4 py-2"
        onClick={handleSignup}
      >
        Sign up
      </button>
    </div>
  );
}
