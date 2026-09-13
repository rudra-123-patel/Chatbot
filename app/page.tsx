"use client";

import Image from "next/image";
import { generateTextAction } from "@/app/actions/aiActions";

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const handleSendPrompt = async () => {
    const res = await generateTextAction(prompt);
    setOutput(res);
  };

  return (
    <main className="flex w-screen h-screen flex-col items-center justify-between px-24 py-6 pb-16">
      {output && (
        <div className="w-full max-w-3xl p-4 my-4 bg-gray-100 dark:bg-neutral-800 rounded-md">
          <h1 className="font-bold text-lg mb-2">AI Response</h1>
          <p className="whitespace-pre-wrap">{output}</p>
        </div>
      )}

      <div className="input-area fixed bottom-6 px-24 py-2 flex items-center justify-between w-full ">
        <input
          type="text"
          className="border p-2 rounded-md w-[80%] outline-none"
          placeholder="Type your message here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        ></input>
        <button
          className="bg-neutral-700 text-white p-2 rounded-md ml-4 w-[18%] cursor-pointer"
          onClick={handleSendPrompt}
        >
          Send 
        </button>
      </div>
    </main>
  );
}
