import { arrowRight } from "../assets/icons/index.js";
import { offer } from "../assets/images/index.js";
import Button from "../components/Button.jsx";

const SpecialOffer = () => {
  return (
    <div className="max-container flex flex-col-reverse items-center gap-10 lg:flex-row">
      <div className="flex flex-1" data-aos="fade-right">
        <img src={offer} alt="offer" width={773} height={687} />
      </div>
      <div className="flex flex-1 flex-col" data-aos="fade-up">
        <h2 className="font-palanquin text-3xl font-bold capitalize dark:text-slate-200 sm:text-4xl">
          <span className="text-coral-red">Special </span> Offer
        </h2>
        <p className="info-text mt-4">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="info-text mt-6">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
