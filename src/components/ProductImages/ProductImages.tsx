"use client";
import Image from "next/image";
import React, { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/8886937/pexels-photo-8886937.jpeg",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/14366434/pexels-photo-14366434.jpeg",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/8886947/pexels-photo-8886947.jpeg",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/8887248/pexels-photo-8887248.jpeg",
  },
];

export default function ProductImages() {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="h-[300px] relative">
        <Image
          src={images[index].url}
          alt="product image"
          fill
          sizes="50vw"
          className=" object-cover rounded-md"
        />
      </div>
      {/*  */}
      <div className="flex justify-between gap-4">
        {images.map((img, ind) => (
          <div
            key={img.id}
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            onClick={() => setIndex(ind)}
          >
            <Image
              src={img.url}
              alt="product image"
              fill
              sizes="30vw"
              className=" object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
