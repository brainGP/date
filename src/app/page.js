"use client";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/router

// Import the background image
import backgroundImage from "../assets/background.jpeg"; // Adjust the path based on your folder structure

export default function Home() {
  const [response, setResponse] = useState(null);
  const router = useRouter(); // Use useRouter from next/router

  const handleNoClick = () => {
    setResponse("Үнэхээр үү🥺"); // Change response for No option
  };
  const handleYesClick = () => {
    setResponse("Хүлээн авсан баярлалаа.");
    setTimeout(() => {
      router.push("/details");
    }, 1500);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white"
      style={{
        background: `linear-gradient(to right, #ff5f6d, #ffc371)`, // Red gradient background
      }}
    >
      <Head>
        <title>Do You Wanna Go On A Date?</title>
        <meta name="description" content="Ask someone out on a date!" />
      </Head>

      <main className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold text-center mt-12 px-8">
          Оройн мэнд 🥰, Хатагтай Цэцэн та энэ хагасайн өдөр надад цаг гаргаж
          болохсон болов уу.
        </h1>
        <div className="mt-12">
          <button
            onClick={handleYesClick}
            className="px-8 py-4 bg-green-500 text-white text-2xl font-bold rounded-full shadow-lg transform transition-transform hover:scale-105 hover:bg-green-600"
          >
            Yes!
          </button>
          <button
            onClick={handleNoClick} // Handle click for No button
            className="px-8 py-4 bg-red-500 text-white text-2xl font-bold rounded-full shadow-lg transform transition-transform hover:scale-105 hover:bg-red-600 mt-4" // Style for No button
          >
            No
          </button>
        </div>
        <div className="mt-4 text-2xl">{response}</div> {/* Display response */}
      </main>
    </div>
  );
}
