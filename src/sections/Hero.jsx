import { arrowRight } from "../assets/icons/index.js";
import { bigShoe1 } from "../assets/images/index.js";
import Button from "../components/Button.jsx";
import ShoeCard from "../components/ShoeCard.jsx";
import { shoes, statistics } from "../constants/index.js";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col xl:flex-row gap-10 justify-center min-h-screen max-container border-blue-800 border-8"
    >
      <div className="xl:w-2/5 flex flex-col justify-center items-start padding-x pt-28 pb-10">
        <p className="text-coral-red text-xl font-montserrat">
          Our Summer collections
        </p>
        <h1 className="text-[72px] sm:text-8xl font-palanquin mt-10 font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>{" "}
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray texlg leading-8 mt-6 mb-8 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoe1}
          width={610}
          height={500}
          className="object-contain relative z-10"
          alt="show collection"
        />
        <div>
          {shoes.map((shoe) => (
            <div key={shoe.bigShoe}>
              <ShoeCard />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
