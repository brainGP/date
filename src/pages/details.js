import Head from "next/head";
import Image from "next/image";
import "tailwindcss/tailwind.css";

export default function Details() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-gray-900 p-4 relative"
      style={{
        background: `linear-gradient(to right, #ff5f6d, #ffc371)`, // Red gradient background
      }}
    >
      <Head>
        <meta
          name="description"
          content="An inviting date invitation for a chill evening!"
        />
      </Head>

      <main className="relative z-10 flex flex-col items-center max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-center mt-12 mb-8">
          Төлөвлөгөө
        </h1>

        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center">
          <div className="md:w-1/2 p-4">
            <p className="text-2xl mb-4">
              Байршил:{" "}
              <a
                href="https://maps.app.goo.gl/XgAABE8Jtw5vLm9q6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Cafe_4450
              </a>
            </p>
            <Image
              src="/central.webp"
              alt="Central Park"
              width={800}
              height={500}
              className="w-full rounded-lg shadow-lg mb-4"
            />
            <p className="text-2xl mt-4">Огноо: 2024.06.21, 18:00</p>
          </div>
          <div className="md:w-1/2 p-4 mt-8 md:mt-0 md:ml-8 flex">
            <ul className="list-disc list-inside space-y-2 text-xl">
              <li>4:00 PM - Cafe 4450-т уулзан тухтай яриа өрнүүлнэ.</li>
              <li>Зураг зурах бөгөөд бие биендээ зураг сонгож өгнө.</li>
              <li>Би аймар сайн зурдаггүй учир сайн зааж өгөөрэй 🥰🙏</li>
              <li> Дундуураа өөр олон юм болноо 😊</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
