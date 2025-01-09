"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export function SlidingCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearTimeout(interval);
  }, [currentIndex]);

  return (
    <div className="relative mx-auto w-full overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <Image
              width={350}
              height={300}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-64 object-center object-cover"
            />
          </div>
        ))}
      </div>
      <button
        variant="outline"
        size="icon"
        className="top-1/2 left-2 absolute bg-white rounded-full w-6 h-6 transform -translate-y-1/2"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="mx-auto w-4 h-4" />
      </button>
      <button
        variant="outline"
        size="icon"
        className="top-1/2 right-2 absolute bg-white rounded-full w-6 h-6 transform -translate-y-1/2"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="mx-auto w-4 h-4" />
      </button>
      <div className="right-0 bottom-2 left-0 absolute">
        <div className="flex justify-center items-center gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                currentIndex === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
