import { star } from "../assets/icons/index.js";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div>
      {/* image */}
      <img src={imgURL} alt={name} width={280} height={280} />
      {/* rating */}
      <div className="mt-8 flex items-center gap-2.5">
        <img src={star} width={24} height={24} alt="rating" />
        <span className="font-montserrat text-lg text-slate-gray sm:text-xl">
          (4.5)
        </span>
      </div>
      {/* info */}
      <h3 className="mt-3 font-palanquin text-xl font-bold dark:text-slate-400 sm:text-3xl">
        {name}
      </h3>
      <p className="mt-2 text-lg font-semibold text-coral-red sm:text-2xl">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
