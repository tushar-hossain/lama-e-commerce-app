import CategoriesList from "@/components/CategoriesList/CategoriesList";
import ProductList from "@/components/ProdactList/ProductList";
import Slider from "@/components/Slider/Slider";

const HomePage = () => {
  return (
    <div className="">
      {/* slider */}
      <Slider />
      {/* product list */}
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Product</h1>
        <ProductList />
      </div>

      {/* product list */}
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          Categories
        </h1>
        <CategoriesList />
      </div>

      {/* product list */}
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Product</h1>
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
