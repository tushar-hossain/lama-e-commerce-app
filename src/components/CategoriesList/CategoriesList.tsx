import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CategoriesList() {
  return (
    <div className="mt-12 px-4 overflow-x-scroll md:scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        <Link
          href={"/list?cat=test"}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src={
                "https://images.pexels.com/photos/5709656/pexels-photo-5709656.jpeg"
              }
              alt="product image"
              fill
              sizes="20vw"
              className="object-cover rounded-md"
            />
          </div>
          <h1 className="mt-8 font-light text-clip tracking-wide">
            Category Name
          </h1>
        </Link>
        {/*  */}
        <Link
          href={"/list?cat=test"}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src={
                "https://images.pexels.com/photos/5709656/pexels-photo-5709656.jpeg"
              }
              alt="product image"
              fill
              sizes="20vw"
              className="object-cover rounded-md"
            />
          </div>
          <h1 className="mt-8 font-light text-clip tracking-wide">
            Category Name
          </h1>
        </Link>
        {/*  */}
        <Link
          href={"/list?cat=test"}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src={
                "https://images.pexels.com/photos/5709656/pexels-photo-5709656.jpeg"
              }
              alt="product image"
              fill
              sizes="20vw"
              className="object-cover rounded-md"
            />
          </div>
          <h1 className="mt-8 font-light text-clip tracking-wide">
            Category Name
          </h1>
        </Link>
        {/*  */}
        <Link
          href={"/list?cat=test"}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src={
                "https://images.pexels.com/photos/5709656/pexels-photo-5709656.jpeg"
              }
              alt="product image"
              fill
              sizes="20vw"
              className="object-cover rounded-md"
            />
          </div>
          <h1 className="mt-8 font-light text-clip tracking-wide">
            Category Name
          </h1>
        </Link>
        {/*  */}
        <Link
          href={"/list?cat=test"}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src={
                "https://images.pexels.com/photos/5709656/pexels-photo-5709656.jpeg"
              }
              alt="product image"
              fill
              sizes="20vw"
              className="object-cover rounded-md"
            />
          </div>
          <h1 className="mt-8 font-light text-clip tracking-wide">
            Category Name
          </h1>
        </Link>
        {/*  */}
        <Link
          href={"/list?cat=test"}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src={
                "https://images.pexels.com/photos/5709656/pexels-photo-5709656.jpeg"
              }
              alt="product image"
              fill
              sizes="20vw"
              className="object-cover rounded-md"
            />
          </div>
          <h1 className="mt-8 font-light text-clip tracking-wide">
            Category Name
          </h1>
        </Link>
      </div>
    </div>
  );
}
