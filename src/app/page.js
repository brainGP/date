"use client";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [response, setResponse] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const handleNoClick = () => {
    setResponse("Үнэхээр үү🥺");
  };

  const handleYesClick = () => {
    setResponse("Хүлээн авсан баярлалаа.");
  };

  const handleLetterClick = () => {
    setShowPopup(true);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white relative"
      style={{
        background: `url('/heart.jpg') no-repeat center center fixed`,
        backgroundSize: "cover",
      }}
    >
      <Head>
        <title>Do You Wanna Go On A Date?</title>
        <meta name="description" content="Ask someone out on a date!" />
      </Head>

      <main className="flex flex-col items-center justify-center">
        {!showPopup && (
          <>
            <h1 className="text-3xl font-bold text-center bg-black bg-opacity-50 p-4 rounded-lg">
              Танд нэгэн ноёнтноос нууцхан сэтгэлийн захидал ирлээ.
              <br /> Та хүлээн авах уу?
            </h1>
            <div onClick={handleLetterClick} className="flex justify-center">
              <img
                src="/envelope.png"
                alt="Envelope"
                className="w-1/2 cursor-pointer"
              />
            </div>
          </>
        )}

        {showPopup && (
          <div className="bg-black bg-opacity-80 p-8 rounded-lg text-center shadow-lg">
            <h2 className="text-4xl font-bold mb-8">
              Сайн уу Хайр. Намайг уучлаарай би амжих гэж үнэхээр их хичээлээ
              даан ч амжсангүй. Хоёулаа танилцаад удаагүй ч энэ богинохон
              хугацаанд амьдралыг минь өөрчилсөнд баярлалаа. Үнэхээр утга
              учиртай санагдуулж нэг хүнийг ч болов өөрийн чадахаараа асарж
              хамгаалж халамжилмаар санагдуулсан. Өдөр болсон зүйлийг албан
              ёсоор тооцохгүй болохоор энийг албан ёсоор гэж ойлгоорой. Миний
              найз охин болох уу?
            </h2>
            <div className="flex justify-center items-center space-y-4">
              <button
                onClick={handleYesClick}
                className="px-8 py-4 bg-green-500 text-white text-2xl font-bold rounded-full shadow-lg transform transition-transform hover:scale-105 hover:bg-green-600"
              >
                Yes!
              </button>
              <button
                onClick={handleNoClick}
                className="px-8 py-4 bg-red-500 text-white text-2xl font-bold rounded-full shadow-lg transform transition-transform hover:scale-105 hover:bg-red-600"
              >
                No
              </button>
              <div className="mt-4 text-2xl">{response}</div>{" "}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
