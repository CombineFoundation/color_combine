"use client";

import "./globals.css";
import Navbar from "./components/Navbar";
import { Facebook, Instagram, Youtube, Music2 } from "lucide-react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Colors of Combine Farm House</title>
        <meta
          name="description"
          content="A peaceful getaway surrounded by nature, luxury, and comfort."
        />
      </head>
      <body className="bg-green-50 text-gray-800 flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow container mx-auto px-6 py-12">
          {children}
        </main>

        {/* Footer with Social Links */}
        <footer className="bg-green-700 text-white text-center py-10 mt-12">
          <p className="text-sm mb-6">
            &copy; {new Date().getFullYear()} Colors of Combine Farm House. All
            rights reserved.
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center gap-12">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/colorsofcombine"
              target="_blank"
              className="flex flex-col items-center gap-2 transform transition duration-300 hover:scale-110"
            >
              <Facebook size={40} className="text-white hover:text-[#1877F2]" />
              <span className="text-sm">Facebook</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/colorsofcombine/"
              target="_blank"
              className="flex flex-col items-center gap-2 transform transition duration-300 hover:scale-110"
            >
              <Instagram
                size={40}
                className="text-white hover:text-pink-500"
              />
              <span className="text-sm">Instagram</span>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@colorsofcombine"
              target="_blank"
              className="flex flex-col items-center gap-2 transform transition duration-300 hover:scale-110"
            >
              <Youtube size={40} className="text-white hover:text-[#FF0000]" />
              <span className="text-sm">YouTube</span>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@colorsofcombine"
              target="_blank"
              className="flex flex-col items-center gap-2 transform transition duration-300 hover:scale-110"
            >
              <Music2 size={40} className="text-white hover:text-pink-400" />
              <span className="text-sm">TikTok</span>
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
