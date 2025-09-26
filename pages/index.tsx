import Image from "next/image";
import { Geist, Geist_Mono, Roboto } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <div className="title py-6 border-b-1 border-stone-200">
        <div className="container mx-auto">
          <h1 className="font-semibold text-3xl">Home</h1>
        </div>
      </div>

      <div className="bg-[#f8fafb] mx-auto">
        <div className="max-w-[1200px] mx-auto h-screen py-10">
          Something
        </div>
      </div>
    </>
  );
}
