import {
  APP_STORE_URL,
  PHONE_IMG_URL,
  PLAY_STORE_URL,
  QR_CODE_IMG_URL,
} from "../utils/app.contants";

const Download = () => {
  return (
    <div className="flex items-center justify-center gap-28 h-screen bg-linear-to-b from-chablis to-white">
      <div className="flex flex-col">
        <span className="font-bold text-3xl ">Download the app now!</span>
        <span className="font-semibold text-gray-600">
          Experience seemless online ordering <br />
          only on Zomato app
        </span>
        <div className="flex gap-6 mt-7">
          <img src={PLAY_STORE_URL} alt="Play-store_img" className="w-40" />
          <img src={APP_STORE_URL} alt="App-store_img" className="w-40" />
        </div>
      </div>
      <div className="relative">
        <img src={PHONE_IMG_URL} alt="phone-img" className="w-[18rem] mt-6" />
        <span className="absolute top-26 left-13 w-48 flex flex-col text-center text-gray-700 font-medium">
          Scan the QR code to download the app.
        </span>
        <img
          src={QR_CODE_IMG_URL}
          alt="calendar-img"
          className="w-40 absolute left-16 bottom-0 "
        />
      </div>
    </div>
  );
};

export default Download;
