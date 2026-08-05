import { APP_STORE_URL, PLAY_STORE_URL } from "../utils/app.contants";

const FooterRepeatDesign = ({ header, point1, point2, point3, point4 }) => (
  <div>
    <span className="text-lg font-medium">{header}</span>
    <div className="flex flex-col gap-3 mt-2">
      <span className="text-xs">{point1}</span>
      <span className="text-xs">{point2}</span>
      <span className="text-xs">{point3}</span>
      <span className="text-xs">{point4}</span>
    </div>
  </div>
);

const footerDesignConstants = [
  {
    header: "Company",
    point1: "About us",
    point2: "Our offerrings",
    point3: "Investor",
    point4: "Newsroom",
  },
  {
    header: "Quick Links",
    point1: "Home",
    point2: "Shop",
    point3: "Best Sellers",
    point4: "Deals",
  },
  {
    header: "Customer Support",
    point1: "FAQs",
    point2: "Shipping and Delivery",
    point3: "Returns and Refunds",
    point4: "Privacy Policy",
  },
  {
    header: "Follow Us",
    point1: "Instagram",
    point2: "Facebook",
    point3: "Twitter/X",
    point4: "LinkedIn",
  },
];

const Footer = () => {
  return (
    <div className="bg-black text-white p-20 md:px-36 mt-16 flex flex-col">
      <span className="text-3xl font-medium">Zomato</span>
      <span className="mt-8 hover:underline text-sm cursor-pointer">
        Visit Help Center
      </span>

      <div className="flex flex-wrap justify-between gap-2 mt-8">
        {footerDesignConstants.map((section, index) => (
          <FooterRepeatDesign
            key={index}
            header={section.header}
            point1={section.point1}
            point2={section.point2}
            point3={section.point3}
            point4={section.point4}
          />
        ))}
      </div>

      <div className="flex items-center justify-start gap-2 mt-6">
        <img
          src={PLAY_STORE_URL}
          alt="play-store-icon"
          className="w-[7.8rem] cursor-pointer"
        />
        <img
          src={APP_STORE_URL}
          alt="play-store-icon"
          className="w-[7.8rem] cursor-pointer"
        />
      </div>
      <span className="mt-4 text-gray-400 text-xs">
        © 2025 ShopEase Technologies Inc.
      </span>
    </div>
  );
};

export default Footer;
