const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`
    flex justify-center items-center px-7 py-4 font-montserrat text-md sm:text-lg leading-none border ease-in duration-200
    ${
      backgroundColor
        ? `${borderColor} ${backgroundColor} ${textColor} hover:bg-slate-100`
        : `bg-coral-red gap-3 hover:bg-orange-600 text-white border-coral-red`
    }
    
    rounded-full ${fullWidth && "w-full"}`}
    >
      <span>{label}</span>
      {iconURL && (
        <img src={iconURL} alt={label} className="rounded-full w-5 h-5 " />
      )}
    </button>
  );
};

export default Button;
