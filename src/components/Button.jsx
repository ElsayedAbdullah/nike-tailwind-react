const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center px-7 py-4 font-montserrat text-lg leading-none bg-coral-red gap-3 rounded-full text-white border-coral-red">
      <span>{label}</span>
      <img src={iconURL} alt={label} className="rounded-full w-5 h-5 " />
    </button>
  );
};

export default Button;
