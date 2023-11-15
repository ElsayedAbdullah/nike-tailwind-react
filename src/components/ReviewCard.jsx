import { star } from "../assets/icons/index.js";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex gap-5 justify-center items-center flex-col">
      <img
        src={imgURL}
        alt={customerName}
        width={120}
        height={120}
        className="object-cover rounded-full"
      />
      <p className="text-center info-text max-w-sm mt-3 sm:mt-6">{feedback}</p>
      <div className="flex gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-slate-gray sm:text-xl">({rating})</p>
      </div>
      <h3 className="font-bold text-lg sm:text-3xl font-palanquin">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
