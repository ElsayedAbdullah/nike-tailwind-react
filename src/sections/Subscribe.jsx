import Button from "../components/Button.jsx";

const Subscribe = () => {
  return (
    <div className="max-container flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
      <h2 className="text-center text-2xl font-bold dark:text-slate-200 sm:text-3xl md:text-4xl lg:max-w-[50%] lg:text-left xl:max-w-lg">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h2>
      <div className="flex flex-1 flex-col justify-between gap-5 rounded-full p-2 sm:flex-row sm:border sm:border-slate-gray lg:max-w-[50%]">
        <input
          type="email"
          className="input"
          placeholder="subscribe@nike.com"
        />
        <div>
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
