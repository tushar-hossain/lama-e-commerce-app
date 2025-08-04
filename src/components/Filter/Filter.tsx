import React from "react";

export default function Filter() {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex flex-wrap gap-6">
        <select
          name="type"
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Type</option>
          <option value="">Physical</option>
          <option value="">Digital</option>
        </select>
        {/* min price */}
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-500"
        />
        {/* max price */}
        <input
          type="text"
          name="max"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-500"
        />
        {/*  */}
        <select
          name="size"
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Size</option>
          <option value="">Size</option>
        </select>
        {/*  */}
        <select
          name="color"
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Color</option>
          <option value="">Test</option>
        </select>
        {/*  */}
        <select
          name="ribbon"
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Category</option>
          <option value="">New Arrival</option>
          <option value="">Popular</option>
        </select>
        {/*  */}
        <select
          name=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>All Filter</option>
        </select>
        {/*  */}
        <div className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400">
          <select name="">
            <option>Sort By</option>
            <option value="">Price (low to high)</option>
            <option value="">Price (high to low)</option>
            <option value="">Newest</option>
            <option value="">Oldest</option>
          </select>
        </div>
      </div>
    </div>
  );
}
