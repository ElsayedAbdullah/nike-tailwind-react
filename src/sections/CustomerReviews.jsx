import ReviewCard from "../components/ReviewCard.jsx";
import { reviews } from "../constants/index.js";

const CustomerReviews = () => {
  return (
    <div className="max-container">
      <h2 className="text-center capitalize text-3xl sm:text-4xl font-palanquin font-bold">
        What Our<span className="text-coral-red"> Customers </span> Say?
      </h2>
      <p className="md:max-w-lg m-auto info-text mt-4 text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="gap-14 mt-24 flex flex-col justify-evenly md:flex-row ">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
