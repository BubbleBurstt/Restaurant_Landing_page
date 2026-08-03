const ImageCard = ({ imgUrl, title, secondaryTitle }) => {
  return (
    <div className="flex items-center justify-center gap-5">
      <img src={imgUrl} alt={title} className="w-[4.6rem]" />
      <div className="flex flex-col">
        <span className="text-2xl">{title}</span>
        <span className="text-xl mt-1 bg-linear-to-r from-[#8C6115] via-[#E9C789] to-[#996f25] bg-clip-text text-center text-transparent ">
          {secondaryTitle}
        </span>
      </div>
    </div>
  );
};

export default ImageCard;
