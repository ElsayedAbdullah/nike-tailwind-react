import { useEffect, useState } from "react";
import { arrowRight } from "../assets/icons/index.js";
import { bigShoe1 } from "../assets/images/index.js";
import Button from "../components/Button.jsx";
import ShoeCard from "../components/ShoeCard.jsx";
import { shoes, statistics } from "../constants/index.js";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [bigShowImg, setBigShowImg] = useState(bigShoe1);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      id="home"
      className="max-container flex min-h-screen flex-col justify-center gap-10 xl:flex-row"
    >
      <div className="padding-x flex flex-col items-start justify-center pb-10 pt-28 xl:w-2/5 xl:px-0">
        <p className="font-montserrat text-coral-red sm:text-xl ">
          Our Summer collections
        </p>
        <h1 className="mt-5 font-palanquin text-4xl font-bold dark:text-slate-200 sm:text-8xl md:mt-10">
          <span className="relative z-10 inline-block  dark:bg-transparent lg:pr-10 xl:whitespace-nowrap xl:bg-white">
            The New Arrival
          </span>{" "}
          <br />
          <span className="inline-block text-coral-red">Nike</span> Shoes
        </h1>
        <p className="text-md mb-8 mt-6 font-montserrat leading-8 text-slate-gray dark:text-slate-400 sm:max-w-sm sm:text-lg">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="mt-20 flex flex-wrap items-start justify-start gap-8 sm:gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="font-palanquin text-2xl font-bold dark:text-slate-300 sm:text-4xl">
                {stat.value}
              </p>
              <p className="sm:text-md font-montserrat text-sm leading-7 text-slate-gray dark:text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex flex-1 items-center justify-center bg-primary bg-hero bg-cover bg-center py-20 dark:bg-slate-900 dark:bg-none sm:py-40 lg:-right-5 xl:min-h-screen">
        <img
          src={bigShowImg}
          width={610}
          height={500}
          className="relative z-10 object-contain"
          alt="shoe collection"
          data-aos="fade-down-left"
        />
        <div className="absolute -bottom-[5%] flex gap-4 px-6 sm:left-[10%] sm:gap-6 sm:p-0">
          {shoes.map((shoe) => (
            <div key={shoe.bigShoe}>
              <ShoeCard
                shoe={shoe}
                bigShowImg={bigShowImg}
                setBigShowImg={setBigShowImg}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
