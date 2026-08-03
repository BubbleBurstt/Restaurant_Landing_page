import FeaturesSection from "./components/FeaturesSection";
import Gold from "./components/Gold";
import HeroSection from "./components/HeroSection";
import OrderSection from "./components/OrderSection";

const App = () => {
  return (
    <div className="relative w-screen h-screen overflow-x-hidden">
      <HeroSection />
      <OrderSection />
      <FeaturesSection />
      <Gold />
    </div>
  );
};

export default App;
