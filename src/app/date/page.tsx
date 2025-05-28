"use client";
import { useState } from "react";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

export default function Proposal() {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="bg-[#f6f1eb] min-h-screen flex items-center justify-center">
      <div className="lg:bg-white lg:shadow-2xl rounded-3xl p-12 max-w-2xl text-center">
        <h1 className={`text-5xl text-pink-700 mb-6 ${pacifico.className}`}>
          Чи миний найз охин болох уу?
        </h1>

        {!accepted ? (
          <button
            onClick={() => setAccepted(true)}
            className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition"
          >
            Тийм
          </button>
        ) : (
          <p className="text-2xl text-black mt-8">
            {`Чи намайг хамгийн аз жаргалтай хүн болголоо <3`}
          </p>
        )}
      </div>
    </div>
  );
}
