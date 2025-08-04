import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* top */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* left */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href={"/"}>
            <div className="text-2xl tracking-wide">LAMA</div>
          </Link>
          <p>Dhaka, Bangladesh</p>
          <span className="font-semibold">hello@gmail.com</span>
          <span className="font-semibold">+880 1900 000000</span>
          <div className="flex gap-6">
            <Image
              src={"/facebook.png"}
              alt="facebook icon"
              width={16}
              height={16}
            />
            <Image
              src={"/youtube.png"}
              alt="facebook icon"
              width={16}
              height={16}
            />
            <Image src={"/x.png"} alt="facebook icon" width={16} height={16} />
          </div>
        </div>
        {/* center */}
        <div className="w-1/2 hidden lg:flex justify-between">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href={"/"}>About Us</Link>
              <Link href={"/"}>Careers</Link>
              <Link href={"/"}>Affiliates</Link>
              <Link href={"/"}>Blog</Link>
              <Link href={"/"}>Contact Us</Link>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href={"/"}>New Arrivals</Link>
              <Link href={"/"}>Accessories</Link>
              <Link href={"/"}>Man</Link>
              <Link href={"/"}>Woman</Link>
              <Link href={"/"}>All Products</Link>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href={"/"}>Customer Service</Link>
              <Link href={"/"}>My Account</Link>
              <Link href={"/"}>Find Store</Link>
              <Link href={"/"}>Legal & Privacy</Link>
              <Link href={"/"}>Gift Card</Link>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>
            BE the first to get the latest news about trends, promotions and
            much more!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-lama text-white">JOIN</button>
          </div>
          <span className="font-semibold">Secure Payment</span>
          <div className="flex justify-between gap-4">
            <Image src={"/discover.png"} alt="" width={40} height={40} />
            <Image src={"/skrill.png"} alt="" width={40} height={40} />
            <Image src={"/paypal.png"} alt="" width={40} height={40} />
            <Image src={"/mastercard.png"} alt="" width={40} height={40} />
            <Image src={"/visa.png"} alt="" width={40} height={40} />
          </div>
        </div>
      </div>
      {/* button */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">@ 2025 Lama Shop</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div>
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">Bangladesh | Bangla</span>
          </div>
          <div>
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">$ BDT</span>
          </div>
        </div>
      </div>
    </div>
  );
}
