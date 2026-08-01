import { VIDEO_URL } from "../utils/app.contants";

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
      <div className="z-10 absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
    </div>
  );
};

export default HeroSection;
