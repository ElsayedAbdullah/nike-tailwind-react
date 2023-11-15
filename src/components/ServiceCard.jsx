const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex w-full flex-1 flex-col rounded-3xl px-8 py-10 shadow-3xl dark:bg-slate-800 sm:w-[350px] sm:min-w-[350px] sm:px-10 sm:py-16">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-coral-red">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-2xl font-bold dark:text-slate-200 sm:text-3xl">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-slate-gray sm:text-lg">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
