"use client";
import Image from "next/image";
import React from "react";

function SearchBar() {

    const handelSearch = (e) => {
    
}


  return (
    <form onSubmit={handelSearch} className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1">
      <input
        className="input flex-1 bg-transparent outline-none"
        type="text"
        placeholder="Search"
      />
      <button type="submit">
        <Image src={"/search.png"} alt="" width={16} height={16} />
      </button>
    </form>
  );
}

export default SearchBar;
