const ShoeCard = ({ shoe, bigShowImg, setBigShowImg }) => {
  function handleClick() {
    setBigShowImg(shoe.bigShoe);
  }

  return (
    <div
      className={`border-2 ${
        bigShowImg === shoe.bigShoe ? "border-coral-red" : "border-transparent"
      } cursor-pointer p-4 rounded-xl flex items-center justify-center bg-card sm:w-40 sm:h-40 bg-center bg-cover`}
    >
      <img
        src={shoe.thumbnail}
        className="object-contain"
        width={127}
        height={102}
        alt="shoe collection"
        onClick={handleClick}
      />
    </div>
  );
};

export default ShoeCard;
