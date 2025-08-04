"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const sliderData = [
  {
    id: 1,
    title: "Winter Sale Collection",
    description: "Sale! Up to 50% off",
    img: "https://images.pexels.com/photos/12324552/pexels-photo-12324552.jpeg",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
  {
    id: 2,
    title: "Summer Essentials",
    description: "Hot Deals on Summer Wear",
    img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
    url: "/summer",
    bg: "bg-gradient-to-r from-yellow-50 to-red-100",
  },
  {
    id: 3,
    title: "New Arrivals 2025",
    description: "Explore the latest trends",
    img: "https://images.pexels.com/photos/18953509/pexels-photo-18953509.jpeg",
    url: "/new",
    bg: "bg-gradient-to-r from-purple-50 to-pink-100",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: ` translateX(-${current * 100}vw)` }}
      >
        {sliderData.map((slide) => {
          return (
            <div
              className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
              key={slide.id}
            >
              {/* text container */}
              <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-16">
                <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                  {slide.description}
                </h2>
                <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold text-center">
                  {slide.title}
                </h1>
                <Link href={slide.url}>
                  <button className="rounded-md bg-black text-white py-4 px-3">
                    Shop Now
                  </button>
                </Link>
              </div>
              {/* image container */}
              <div className="h-1/2 xl:w-1/2 xl:h-full relative">
                <Image
                  src={slide.img}
                  alt="slide image"
                  fill
                  sizes="100%"
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {sliderData.map((slide, ind) => (
          <div
            key={slide.id}
            onClick={() => setCurrent(ind)}
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === ind ? "scale-150" : ""
            }`}
          >
            {current === ind && (
              <div className="w-[6px] h-[6px] rounded-full bg-black"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
