"use client";
import Image from "next/image";
import React from "react";

export default function CartMoal() {
  const cartItems = true;

  return (
    <div className="w-max absolute shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 rounded-md bg-white  top-10 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div>Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-xl">Shopping Cart</h2>
          <div className="flex flex-col gap-8">
            {/* items */}
            <div className="flex gap-4">
              <Image
                src={
                  "https://images.pexels.com/photos/7309317/pexels-photo-7309317.jpeg"
                }
                alt=""
                width={50}
                height={50}
                className=" object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full text-sm">
                {/* top */}
                <div>
                  {/* title */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$96</div>
                  </div>
                </div>
                {/* desc */}
                <div className="text-sm text-gray-500">Available</div>

                {/* bottom */}
                <div className="flex justify-between">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal</span>
              <span>$49</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Officiis, in.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 bg-black text-white">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
