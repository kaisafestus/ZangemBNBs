"use client";

import { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Aisha",
    rating: 5,
    text: "Clean, secure and comfortable. Close to everything.",
  },
  {
    id: 2,
    name: "John",
    rating: 5,
    text: "Great value and very responsive host.",
  },
  {
    id: 3,
    name: "Mary",
    rating: 4,
    text: "Perfect for business trips. Fast Wi-Fi and quiet.",
  },
];

export default function ReviewCarousel() {
  const [i, setI] = useState(0);
  const r = reviews[i];

  return (
    <div className="rounded-2xl border border-[#f08a24]/18 bg-[linear-gradient(160deg,rgba(22,13,9,0.96),rgba(40,23,15,0.90))] p-6 text-white/92 shadow-xl shadow-black/14">
      <div className="flex items-start space-x-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f08a24]/16 font-semibold text-[#ffbf7a]">
          {r.name[0]}
        </div>
        <div>
          <div className="font-semibold text-white">{r.name}</div>
          <div className="text-sm text-[#ff9f43]">{"★".repeat(r.rating)}</div>
          <p className="mt-2 text-white/84">{r.text}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setI((i - 1 + reviews.length) % reviews.length)}
          className="rounded-md px-3 py-2 text-sm text-[#ffbf7a] transition hover:bg-white/5 hover:text-[#ff9f43]"
        >
          Prev
        </button>
        <div className="text-xs text-white/66">
          {i + 1} / {reviews.length}
        </div>
        <button
          type="button"
          onClick={() => setI((i + 1) % reviews.length)}
          className="rounded-md px-3 py-2 text-sm text-[#ffbf7a] transition hover:bg-white/5 hover:text-[#ff9f43]"
        >
          Next
        </button>
      </div>
    </div>
  );
}
