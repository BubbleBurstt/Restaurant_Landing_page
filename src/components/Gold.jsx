import {
  FREE_DELIVERY_IMG_URL,
  GOLD_IMG_URL,
  GOLD_STAR_IMG_URL,
  SCOTTER_IMG_URL,
} from "../utils/app.contants";
import ImageCard from "./ImageCard";
const Gold = () => {
  return (
    <div className="bg-black relative py-60 mt-80 text-white flex items-center justify-center flex-col">
      <img src={GOLD_IMG_URL} alt="gold_img" className="w-76.5 h-33.5" />

      <div className="mt-6 text-xl flex flex-col font-normal bg-linear-to-r from-[#8C6115] via-[#E9C789] to-[#996f25] bg-clip-text text-center text-transparent">
        <span>India's Top Savings</span>
        <span>Programs for Food Lovers</span>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        <span className="text-lg bg-linear-to-r from-[#8C6115] via-[#E9C789] to-[#996f25] bg-clip-text text-center text-transparent">
          &#9733;
        </span>
        <span className="text-2xl font-medium tracking-[4px]">
          GOLD BENEFITS
        </span>
        <span className="text-lg bg-linear-to-r from-[#8C6115] via-[#E9C789] to-[#996f25] bg-clip-text text-center text-transparent">
          &#9733;
        </span>
      </div>

      <div className="flex gap-10 mt-8">
        <ImageCard
          title="Free Delivery"
          imgUrl={FREE_DELIVERY_IMG_URL}
          secondaryTitle="At all restaurants within 7 km"
        />
        <ImageCard
          title="Upto 30% extra off"
          imgUrl={SCOTTER_IMG_URL}
          secondaryTitle="At 20,000+ partner restaurants"
        />
      </div>

      <img
        src={GOLD_STAR_IMG_URL}
        alt="gold-star-img"
        className="w-44 absolute top-0 left-0"
      />
      <img
        src={GOLD_STAR_IMG_URL}
        alt="gold-star-img"
        className="w-64 absolute top-0 right-0 rotate-1"
      />
    </div>
  );
};

export default Gold;
