import {
  CALENDAR_IMG_URL,
  COLLECTIONS_IMG_URL,
  FOOD_ON_TRAIN_IMG_URL,
  GIFT_CARDS_IMG_URL,
  GOURMET_IMG_URL,
  HEALTHY_IMG_URL,
  OFFERS_IMG_URL,
  PARTY_IMG_URL,
  PHONE_IMG_URL,
  VEG_MODE_IMG_URL,
} from "../utils/app.contants";
import FeatureCard from "./FeatureCard";

const cards = [
  {
    imgUrl: VEG_MODE_IMG_URL,
    title: "Veg-Mode",
    className: "bottom-72 left-94",
  },
  {
    imgUrl: HEALTHY_IMG_URL,
    title: "Healthy",
    className: "bottom-64 left-60",
  },
  {
    imgUrl: PARTY_IMG_URL,
    title: "Plan a Party",
    className: "bottom-28 left-64",
  },
  {
    imgUrl: GIFT_CARDS_IMG_URL,
    title: "Gift-Cards",
    className: "bottom-36 left-100",
  },
  {
    imgUrl: GOURMET_IMG_URL,
    title: "Gourmet",
    className: "bottom-64 right-100",
  },
  {
    imgUrl: OFFERS_IMG_URL,
    title: "Offers",
    className: "bottom-70 right-66",
  },
  {
    imgUrl: FOOD_ON_TRAIN_IMG_URL,
    title: "Food on Train",
    className: "bottom-28 right-94",
  },
  {
    imgUrl: COLLECTIONS_IMG_URL,
    title: "Collections",
    className: "bottom-34 right-60",
  },
];

const FeaturesSection = () => {
  return (
    <div className="h-120 bg-linear-to-b from-chablis to-white">
      <div className="relative text-center flex flex-col items-center justify-center py-20">
        <span className="text-carnation text-[35px] font-bold leading-tight">
          What's waiting for you <br /> on the app?
        </span>
        <span className="text-xl text-comet font-extralight mt-5">
          Our app is packed with features that <br />
          enable you to experience food <br />
          delivery like never before
        </span>
        <div className="relative">
          <img src={PHONE_IMG_URL} alt="phone-img" className="w-[18rem] mt-6" />
          <div
            className="py-3.5 pb-2 absolute top-34 left-18 shadow-2xl bg-white rounded-3xl flex flex-col 
          items-center justify-center border border-athens-gray "
          >
            <img
              src={CALENDAR_IMG_URL}
              alt="calendar-img"
              className="w-36 h-22.5"
            />
            <span>
              Schedule <br />
              your order
            </span>
          </div>
        </div>
        {cards.map((card) => (
          <FeatureCard
            imgUrl={card.imgUrl}
            title={card.title}
            className={card.className}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
