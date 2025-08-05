"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CartMoal from "./cartModal/CartMoal";

export default function NavIcons() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();

  const isLoggedIn = false;

  const handelProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        className="cursor-pointer"
        src={"/profile.png"}
        alt="profile image"
        width={22}
        height={22}
        onClick={handelProfile}
      />

      {isProfileOpen && (
        <div className="absolute p-4 rounded-md text-sm left-0 top-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href={"/"}>Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}

      <Image
        className="cursor-pointer"
        src={"/notification.png"}
        alt="profile image"
        width={22}
        height={22}
      />
      <div
        className="relative cursor-pointer"
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <Image
          className="cursor-pointer"
          src={"/cart.png"}
          alt="profile image"
          width={22}
          height={22}
        />
        <div className=" absolute -top-4 -right-4 h-6 bg-lama rounded-full text-white text-sm flex items-center justify-center w-6">
          2
        </div>
      </div>
      {isCartOpen && (
        <div>
          <CartMoal />
        </div>
      )}
    </div>
  );
}
