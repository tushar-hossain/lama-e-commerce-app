import Link from "next/link";
import React from "react";
import Menu from "./Menu/Menu";
import Image from "next/image";
import SearchBar from "./SearchBar/SearchBar";
import NavIcons from "./NavIcons";

export default function Navbar() {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* mobile screen */}
      <div className="flex items-center justify-between h-full md:hidden">
        <Link className="text-2xl tracking-wide" href={"/"}>
          LAMA
        </Link>
        <Menu />
      </div>
      {/* bigger screen */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* left side */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link
            className="text-2xl tracking-wide flex items-center gap-3"
            href={"/"}
          >
            <Image src={"/logo.png"} alt="Brand logo" width={24} height={24} />
            <div className="text-2xl tracking-wide">LAMA</div>
          </Link>
          <div className="flex items-center gap-4">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Shop</Link>
            <Link href={"/"}>Deals</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Contact</Link>
          </div>
        </div>
        {/* right side */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
}
