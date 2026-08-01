import {
  BURGER_IMG_URL,
  CITIES_IMG_URL,
  LEAVES_IMG_URL,
  LEFT_SIDE_LINE,
  MOMOS_IMG_URL,
  ORDER_DELIVERED_IMG_URL,
  PIZZA_IMG_URL,
  RESTAURANT_IMG_URL,
  RIGHT_SIDE_LINE,
  TOMATO_IMG_URL,
} from "../utils/app.contants";

const OrderSection = () => {
  return (
    <div className="h-148 relative">
      <div className="absolute left-0 -top-44 h-auto w-[70%] translate-x-[-70%]">
        <img src={LEFT_SIDE_LINE} alt="LEFT_SIDE_LINE" />
      </div>
      <div className="absolute right-0 top-[-55%] h-auto w-[70%] translate-x-[65%]">
        <img src={RIGHT_SIDE_LINE} alt="RIGHT_SIDE_LINE" />
      </div>
      <img
        src={BURGER_IMG_URL}
        alt="burger-img"
        className="w-60 absolute left-52 top-10"
      />
      <img
        src={MOMOS_IMG_URL}
        alt="Momo-img"
        className="w-60 h-52 absolute right-52 -top-44"
      />
      <img
        src={PIZZA_IMG_URL}
        alt="pizza-img"
        className="w-60 h-52 absolute right-36 top-40"
      />
      <img
        src={TOMATO_IMG_URL}
        alt="tomato-img"
        className="w-12 absolute left-32 top-96"
      />
      <img
        src={TOMATO_IMG_URL}
        alt="tomato-img"
        className="w-12 transform -scale-x-100 absolute right-32 top-10"
      />
      <img
        src={LEAVES_IMG_URL}
        alt="leaves-img"
        className="w-12 absolute left-[30%] -top-38"
      />
      <div className="flex flex-col items-center justify-center w-[30%] text-center m-auto mt-56">
        <span className="text-carnation text-4xl font-medium leading-14">
          Better food for more people.
        </span>
        <span className="text-comet text-lg mt-8 w-100">
          For over a decade, we've enabled our customers to discover new tastes,
          delivered right to their doorstep
        </span>
      </div>

      <div className="rounded-4xl bg-white shadow-2xl w-[56%] m-auto py-6 px-7 flex items-center mt-40">
        <div className="flex item-center justify-center gap-3 flex-1 border-r border-gray-200 pr-5">
          <div className="flex flex-col">
            <span className="text-comet text-3xl font-bold">3,00,000+</span>
            <span className="text-raven text-lg">restaurants</span>
          </div>
          <img
            src={RESTAURANT_IMG_URL}
            alt="restaurant-img"
            className="w-16 h-14"
          />
        </div>

        <div className="flex item-center justify-center gap-3 flex-1 border-r border-gray-200 pr-5">
          <div className="flex flex-col">
            <span className="text-comet text-3xl font-bold">800+</span>
            <span className="text-raven text-lg">cities</span>
          </div>
          <img src={CITIES_IMG_URL} alt="Cities-img" className="w-9 h-12" />
        </div>

        <div className="flex item-center justify-center gap-3 flex-1 border-r border-gray-200 pr-5">
          <div className="flex flex-col">
            <span className="text-comet text-3xl font-bold">3 billion+</span>
            <span className="text-raven text-lg">order delivered</span>
          </div>
          <img
            src={ORDER_DELIVERED_IMG_URL}
            alt="Order-deliver-img"
            className="w-16 h-14"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderSection;
