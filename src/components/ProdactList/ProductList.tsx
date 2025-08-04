import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductList() {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href={"/"}
        className="w-full flex flex-col gap-4  sm:w-[45%] lg:w-[22%] rounded-md"
      >
        <div className="relative h-80 w-full">
          <Image
            src={
              "https://images.pexels.com/photos/5264906/pexels-photo-5264906.jpeg"
            }
            alt=""
            fill
            sizes="15vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src={
              "https://images.pexels.com/photos/5709656/pexels-photo-5709656.jpeg"
            }
            alt=""
            fill
            sizes="15vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2 justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
          <div className="text-sm text-gray-500">My description</div>

          <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
            Add to Cart
          </button>
        </div>
      </Link>
      {/*  */}
      <Link
        href={"/"}
        className="w-full flex flex-col gap-4  sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative h-80 w-full">
          <Image
            src={
              "https://images.pexels.com/photos/5264906/pexels-photo-5264906.jpeg"
            }
            alt=""
            fill
            sizes="20vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src={
              "https://images.pexels.com/photos/5709656/pexels-photo-5709656.jpeg"
            }
            alt=""
            fill
            sizes="20vw"
            className="absolute object-cover rounded-md"
          />
          vfgfg
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>

        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
          Add to Cart
        </button>
      </Link>
      {/*  */}
      <Link
        href={"/"}
        className="w-full flex flex-col gap-4  sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative h-80 w-full">
          <Image
            src={
              "https://images.pexels.com/photos/5264906/pexels-photo-5264906.jpeg"
            }
            alt=""
            fill
            sizes="20vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src={
              "https://images.pexels.com/photos/5709656/pexels-photo-5709656.jpeg"
            }
            alt=""
            fill
            sizes="20vw"
            className="absolute object-cover rounded-md"
          />
          vfgfg
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>

        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
          Add to Cart
        </button>
      </Link>
      {/*  */}
      <Link
        href={"/"}
        className="w-full flex flex-col gap-4  sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative h-80 w-full">
          <Image
            src={
              "https://images.pexels.com/photos/5264906/pexels-photo-5264906.jpeg"
            }
            alt=""
            fill
            sizes="20vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src={
              "https://images.pexels.com/photos/5709656/pexels-photo-5709656.jpeg"
            }
            alt=""
            fill
            sizes="20vw"
            className="absolute object-cover rounded-md"
          />
          vfgfg
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>

        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
          Add to Cart
        </button>
      </Link>
    </div>
  );
}
