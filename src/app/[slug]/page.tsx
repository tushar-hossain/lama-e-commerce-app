import Add from "@/components/Add/Add";
import CoustomizeProducts from "@/components/CoustomizeProducts/CoustomizeProducts";
import ProductImages from "@/components/ProductImages/ProductImages";
import React from "react";

export default function SinglePage() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* image */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* texts */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-medium">
          Product Name
        </h1>
        <p className="text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A debitis
          impedit nihil repudiandae, tempora iure harum accusantium nobis,
          corrupti iusto reprehenderit. Quisquam amet eveniet asperiores,
          placeat quia debitis commodi distinctio.
        </p>
        <div className="h-[2px] bg-gray-200" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h2 className="font-medium text-2xl">$59</h2>
        </div>
        <div className="h-[2px] bg-gray-200" />
        <CoustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-200" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore,
            necessitatibus magnam reiciendis earum ratione molestias atque
            cupiditate, nam maiores voluptas asperiores architecto quis deleniti
            consequatur, dolorem perferendis corrupti sunt nemo.
          </p>
        </div>
        {/*  */}
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore,
            necessitatibus magnam reiciendis earum ratione molestias atque
            cupiditate, nam maiores voluptas asperiores architecto quis deleniti
            consequatur, dolorem perferendis corrupti sunt nemo.
          </p>
        </div>
        {/*  */}
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore,
            necessitatibus magnam reiciendis earum ratione molestias atque
            cupiditate, nam maiores voluptas asperiores architecto quis deleniti
            consequatur, dolorem perferendis corrupti sunt nemo.
          </p>
        </div>
      </div>
    </div>
  );
}
