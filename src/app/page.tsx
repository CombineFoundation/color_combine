"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image */}
        <Image
          src="/farm3.jpeg" // apni image yahan rakhna
          alt="Farmhouse background"
          fill
          priority
          className="object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-wide drop-shadow-lg animate-fade-in">
            Colors of Combine Farm House
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto mb-10 font-light animate-fade-in-delay">
            A peaceful getaway surrounded by <span className="font-semibold">nature</span>, 
            <span className="font-semibold"> luxury</span>, and 
            <span className="font-semibold"> comfort</span>. 
            Experience the perfect blend of relaxation and elegance.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-6">
            <Link
              href="/gallery"
              className="px-8 py-3 rounded-xl bg-white/20 backdrop-blur-md text-white font-semibold shadow-lg hover:bg-white/30 transition"
            >
              Explore Gallery
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-xl bg-green-600 text-white font-semibold shadow-lg hover:bg-green-700 transition"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
