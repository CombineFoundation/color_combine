"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "/farm1.jpeg", alt: "Farmhouse view 1", caption: "Luxury pool", description: "Enjoy the clear water swimming pool at our farmhouse." },
    { src: "/farm2.jpeg", alt: "Farmhouse view 2", caption: "Night View", description: "Beautifully lit farmhouse view during nighttime." },
    { src: "/farm3.jpeg", alt: "Farmhouse view 3", caption: "Open fields", description: "Wide open lush green fields perfect for a walk or picnic." },
    { src: "/farm4.jpeg", alt: "Farmhouse view 4", caption: "Splendid Whether", description: "The farmhouse is covered in beautiful cotton clouds." },
    { src: "/farm5.jpeg", alt: "Farmhouse view 5", caption: "Indoor area", description: "Spacious indoor sitting area with modern design." },
    { src: "/farm6.jpeg", alt: "Farmhouse view 6", caption: "Outdoor baths", description: "An outdoor toilet in a farmhouse, is a simple, separate structure built outside the main house for privacy and hygiene." },
    { src: "/farm7.jpeg", alt: "Farmhouse view 7", caption: "Luxury pool", description: "Enjoy the clear water swimming pool at our farmhouse." },
    { src: "/farm8.jpeg", alt: "Farmhouse view 8", caption: "Indoor area", description: "Spacious indoor sitting area with modern design." },
    { src: "/farm9.jpeg", alt: "Farmhouse view 9", caption: "Cozy Classic Farmhouse Kitchen", description: "A farmhouse kitchen blends rustic charm with modern comfort, featuring warm wood, shaker cabinets, open shelves, and a big central island." },
    { src: "/farm10.jpeg", alt: "Farmhouse view 10", caption: "BBQ Setup", description: "That farmhouse has a dedicated BBQ setup with a grill, prep area, and seating—perfect for outdoor cooking and gatherings!." },
    { src: "/farm11.jpeg", alt: "Farmhouse view 11", caption: "Lush Greenery and Charming Plants", description: "That farmhouse has beautiful greenery—lush plants and trees all around, giving it a fresh and peaceful vibe." },
    { src: "/farm12.jpeg", alt: "Farmhouse view 12", caption: "Expansive Open Fields and Shade-Giving Trees", description: "The farmhouse is surrounded by tall, shady trees and wide open fields, creating a peaceful, natural space perfect for relaxing and enjoying fresh air." },
    { src: "/farm13.jpeg", alt: "Farmhouse view 13", caption: "Luxury pool", description: "Enjoy the clear water swimming pool at our farmhouse." },
    { src: "/farm14.jpeg", alt: "Farmhouse view 14", caption: "Fun-Filled Kid's Play Area", description: "A cozy, fun-filled corner designed just for kids with soft rugs, playful tents, art easels, and plenty of space to imagine, create, and explore safely." },
    { src: "/farm15.jpeg", alt: "Farmhouse view 15", caption: "Classic Dabbu & Patti Game Spot", description: "A lively spot where family and friends gather to enjoy traditional Dabbu and Patti games." },
    { src: "/farm16.jpeg", alt: "Farmhouse view 16", caption: "Modern Ensuite Comfort", description: "The room includes a modern attached toilet for convenience and privacy, making it super comfortable." },
  ];

  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

 useEffect(() => {
  let timer: NodeJS.Timeout;
  if (isPlaying && selectedImage !== null) {
    timer = setInterval(() => {
      setSelectedImage((prev) => {
        if (prev !== null) {
          if (prev === images.length - 1) {
            // Last image reached → Stop slideshow and close modal
            setIsPlaying(false);
            return null; // Modal close ho jayega
          } else {
            return prev + 1;
          }
        }
        return 0;
      });
    }, 2000); // 2 seconds per slide
  }
  return () => clearInterval(timer);
}, [isPlaying, selectedImage]);

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-700">
        Our Gallery
      </h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
        {images.map(({ src, alt, caption }, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={src}
              alt={alt}
              width={2000}
              height={300}
              className="object-cover w-full h-60"
            />
            <p className="text-center text-sm font-medium mt-2 text-gray-700">
              {caption}
            </p>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white text-4xl font-bold"
            onClick={() => {
              setSelectedImage(null);
              setIsPlaying(false);
            }}
          >
            ✕
          </button>

          {/* Slideshow Controls */}
          <div className="absolute top-6 left-6 flex gap-4">
            {!isPlaying ? (
              <button
                className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
                onClick={() => setIsPlaying(true)}
              >
                ▶ Play
              </button>
            ) : (
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700"
                onClick={() => setIsPlaying(false)}
              >
                ⏸ Pause
              </button>
            )}
          </div>

          {/* Previous Button */}
          {selectedImage > 0 && (
            <button
              className="absolute left-4 md:left-10 text-white text-5xl"
              onClick={() => setSelectedImage(selectedImage - 1)}
            >
              ‹
            </button>
          )}

          {/* Image + Caption + Description */}
          <div className="max-w-4xl max-h-[80vh] p-4 text-center">
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              width={1200}
              height={800}
              className="object-contain w-full h-full rounded-lg"
            />
            <h3 className="text-white text-xl mt-4 font-semibold">
              {images[selectedImage].caption}
            </h3>
            <p className="text-gray-300 mt-2 max-w-2xl mx-auto">
              {images[selectedImage].description}
            </p>
          </div>

          {/* Next Button */}
          {selectedImage < images.length - 1 && (
            <button
              className="absolute right-4 md:right-10 text-white text-5xl"
              onClick={() => setSelectedImage(selectedImage + 1)}
            >
              ›
            </button>
          )}
        </div>
      )}
    </div>
  );
}
