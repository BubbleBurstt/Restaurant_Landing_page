import {
  APP_STORE_URL,
  PLAY_STORE_URL,
  VIDEO_URL,
} from "../utils/app.contants";

const HeroSection = () => {
  return (
    <div className="relative w-screen h-screen">
      <video
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <div className="-z-10 absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

      <div className="flex flex-col items-center justify-center h-full pt-60">
        <img src="/assets/zomato.png" alt="zomato-icon" className="w-42" />
        <div className="mb-3 px-5 text-center font-semibold text-4xl text-white mt-6">
          India's #1 <br /> food delivery app.
        </div>
        <span className="text-white text-2xl px-5 text-center font-medium">
          Experience fast & easy online ordering <br /> on the Zomato app.
        </span>

        <div className="flex gap-6 mt-7">
          <img src={PLAY_STORE_URL} className="w-40" />
          <img src={APP_STORE_URL} className="w-40" />
        </div>

        <div className="flex items-center justify-center gap-2 mt-6 animate-bounce">
          <span className="text-white font-medium">Scroll Down</span>
          <img src="/assets/double-arrow.svg" alt="double-arrow-icon" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
