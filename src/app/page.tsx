"use client";
import { useState, useEffect } from "react";
import { Pacifico } from "next/font/google";
import Image from "next/image";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const [accepted, setAccepted] = useState(false);
  const [timeNow, setTimeNow] = useState(new Date());
  const [showLink, setShowLink] = useState(false);

  useEffect(() => {
    if (accepted) {
      const timer = setInterval(() => {
        const now = new Date();
        setTimeNow(now);
        const h = now.getHours();
        const m = now.getMinutes();

        if (h === 9 && m >= 10 && m < 20) {
          setShowLink(true);
        } else {
          setShowLink(false);
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [accepted]);

  const getCountdown = () => {
    const now = timeNow;
    const target = new Date();
    target.setHours(9, 10, 0, 0);

    let diff = target.getTime() - now.getTime();
    if (diff < 0) diff = 0;

    const hours = Math.floor(diff / 1000 / 60 / 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return `${hours > 0 ? hours + " цаг " : ""}${minutes} мин ${seconds} сек`;
  };

  return (
    <div className="bg-[#f6f1eb] min-h-screen flex items-center justify-center">
      <div className="absolute bottom-4 left-4">
        <Image src="/flower.png" alt="Цэцэг" width={200} height={200} />
      </div>

      {/* Mobile Design */}
      <div className="md:hidden flex flex-col items-center justify-center w-full h-screen text-center p-6">
        <h1 className={`text-5xl text-pink-700 mb-2 ${pacifico.className}`}>
          Date with me
        </h1>
        <p className={`text-xl text-gray-700 mb-4 ${pacifico.className}`}>
          Бат-Оргил ❤️ Энхжин
        </p>
        <p className="text-base text-gray-600 mb-2">
          Таныг болзоонд урьж байна
        </p>
        <p className="text-lg text-gray-800">2025 оны 8-р сарын 29</p>

        <div className="mt-6">
          {!accepted ? (
            <button
              onClick={() => setAccepted(true)}
              className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition"
            >
              Хүлээн авах
            </button>
          ) : showLink ? (
            <a
              href="/info"
              className="inline-block bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition"
            >
              Мэдээлэл рүү очих
            </a>
          ) : (
            <p className="text-sm text-gray-500">
              9:10 цаг хүртэл хүлээнэ үү ({getCountdown()})
            </p>
          )}
        </div>
      </div>

      {/* Desktop Design */}
      <div className="hidden md:flex flex-col items-center justify-center bg-white shadow-2xl rounded-3xl p-12 max-w-2xl text-center">
        <h1 className={`text-6xl text-pink-700 mb-4 ${pacifico.className}`}>
          Date with me
        </h1>
        <p className={`text-2xl text-gray-800 mb-2 ${pacifico.className}`}>
          Бат-Оргил ❤️ Энхжин
        </p>
        <p className="text-gray-600 mb-4">Таныг болзоонд урьж байна</p>
        <p className="text-xl text-gray-700 mb-2">2025 оны 8-р сарын 29</p>

        <div className="mt-6">
          {!accepted ? (
            <button
              onClick={() => setAccepted(true)}
              className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition"
            >
              Хүлээн авах
            </button>
          ) : showLink ? (
            <a
              href="/info"
              className="inline-block bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition"
            >
              Мэдээлэл рүү очих
            </a>
          ) : (
            <p className="text-sm text-gray-400">
              9:10 цаг хүртэл хүлээнэ үү ({getCountdown()})
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
