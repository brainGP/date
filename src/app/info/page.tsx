"use client";
import React, { useState, useEffect } from "react";
import { Pacifico } from "next/font/google";
import clsx from "clsx";
import Link from "next/link";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

function GetCountdown() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const targetTime = new Date();
    targetTime.setHours(18, 10, 0, 0); // 9:10 AM today

    const updateTimer = () => {
      const now = new Date();
      let diff = targetTime.getTime() - now.getTime();

      if (diff < 0) diff = 0;

      const hours = Math.floor(diff / 1000 / 60 / 60);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(
        `${hours > 0 ? hours + " цаг " : ""}${minutes} мин ${seconds} сек`
      );
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return <>({timeLeft})</>;
}

const planDetails = [
  {
    icon: "📸",
    title: "Зураг авах (Say Cheese!)",
    time: "9:20 AM",
    places: [{ name: "Өргөө 2" }, { name: "Шангрилла молл" }],
  },
  {
    icon: "🛍️",
    title: "Хамтдаа шоппинг хийх",
    time: "11:00 AM",
    places: [{ name: "Shangri-La Mall" }, { name: "Өөр хаана ч байсан болно" }],
  },
  {
    icon: "🧸",
    title: "Намайг явсан хойгуур чамайг хамгаалах бамбарууш",
    time: "1:30 PM",
    places: [
      { name: "Хаа сайгүй явж байгаад авна", address: "Sukhbaatar District" },
    ],
  },
  {
    icon: "🍰",
    title: "Дуртай амттанаа хамт идэх",
    time: "3:00 PM",
    places: [
      { name: "Энэ сонголтыг хамт хийе, тиймээ" },
      { name: "Caffee Bean & Tea Leaf Mongolia" },
      { name: "Café Bene" },
    ],
  },
  {
    icon: "🌇",
    title: "Хамт гадуур зугаалах",
    time: "4:30 PM",
    places: [{ name: "Хүргэж өгнө" }],
  },
];

export default function Info() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const [allOpen, setAllOpen] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);

  const toggleOne = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const toggleAll = () => {
    if (allOpen) {
      setOpenIndexes([]);
    } else {
      setOpenIndexes(planDetails.map((_, idx) => idx));
    }
    setAllOpen(!allOpen);
  };

  const buttonClasses =
    "text-sm px-4 py-2 bg-pink-100 text-pink-700 rounded-lg border border-pink-300 hover:bg-pink-200 transition";

  const currentHour = new Date().getHours();

  return (
    <div className="bg-[#f6f1eb] min-h-screen flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-xl">
        {/* Back Button on top */}
        <div className="mb-6 text-left">
          <Link href="/">
            <span className={buttonClasses}>⬅</span>
          </Link>
        </div>
        <h1
          className={`text-4xl md:text-5xl text-pink-700 text-center mb-6 ${pacifico.className}`}
        >
          Date Plan 💖
        </h1>
        <div className="text-center mb-6">
          <button onClick={toggleAll} className={buttonClasses}>
            {allOpen ? "Бүгдийг хаах" : "Бүгдийг нээх"}
          </button>
        </div>
        <div className="space-y-5">
          {planDetails.map((plan, idx) => (
            <div key={idx}>
              <button
                onClick={() => toggleOne(idx)}
                className="w-full flex justify-between items-center bg-[#fff5f7] border border-pink-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
              >
                <span className="text-2xl">{plan.icon}</span>
                <span className="text-left text-gray-700 text-base md:text-lg ml-3 flex-grow">
                  {plan.title}
                </span>
                <span className="text-pink-600">
                  {openIndexes.includes(idx) ? "▲" : "▼"}
                </span>
              </button>
              <div
                className={clsx(
                  "overflow-hidden transition-all duration-500 ease-in-out",
                  openIndexes.includes(idx)
                    ? "max-h-60 opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                )}
              >
                <div className="bg-pink-50 text-sm text-gray-700 px-4 py-3 rounded-b-xl border-l border-r border-b border-pink-200 space-y-2">
                  <p>🕒 Цаг: {plan.time}</p>
                  <p>📍 Байршлууд:</p>
                  <ul className="list-disc list-inside pl-4 space-y-1">
                    {plan.places.map((place, pidx) => (
                      <li key={pidx}>
                        <span className="font-semibold">{place.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          {!showCountdown ? (
            <button
              onClick={() => setShowCountdown(true)}
              className={buttonClasses}
            >
              Нууц зүйл
            </button>
          ) : currentHour < 18 ? (
            <p className="text-sm text-gray-400">
              18:00 цаг хүртэл хүлээнэ үү <GetCountdown />
            </p>
          ) : (
            <Link href="/date" className={buttonClasses}>
              Date руу шилжих
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
