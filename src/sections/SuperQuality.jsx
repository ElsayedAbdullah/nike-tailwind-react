import { shoe8 } from "../assets/images/index.js";
import Button from "../components/Button.jsx";

const SuperQuality = () => {
  return (
    <div className="max-container flex flex-col items-center justify-between gap-10 lg:flex-row">
      <div>
        <h2 className="font-palanquin text-3xl font-bold capitalize dark:text-slate-200 sm:text-4xl lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super Quality</span> Shoes
        </h2>
        <p className="info-text mt-4 sm:text-xl lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="info-text mt-6 sm:text-xl lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-10">
          <Button label="View details" />
        </div>
      </div>
      <div>
        <img
          src={shoe8}
          alt="shoe8"
          className="object-contain"
          width={570}
          height={522}
          data-aos="fade-left"
        />
      </div>
    </div>
  );
};

export default SuperQuality;
