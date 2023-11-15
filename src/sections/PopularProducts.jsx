import PopularProductCard from "../components/PopularProductCard.jsx";
import { products } from "../constants/index.js";

const PopularProducts = () => {
  return (
    <div className="max-container mt-12">
      <div className="flex flex-col gap-6">
        <h2 className="font-palanquin text-3xl font-bold dark:text-slate-200 sm:text-4xl">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="text-md font-montserrat text-slate-gray sm:text-xl md:max-w-2xl">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="mt-20 grid grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 ">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
