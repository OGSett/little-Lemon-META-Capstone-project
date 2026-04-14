import heroImage from "../../assets/images/hero-image2.png";
import { useBookingNavigation } from "../../utils/helpers";
import ReserveBtn from "../common/Button";
const Hero = () => {
  const { goToBooking } = useBookingNavigation();

  return (
    <section className="w-full bg-[var(--primary-green-cold)]  text-white pt-12 pb-40 md:py-16 mb-52 md:mb-38">
      <div className="hero-layout flex items-center justify-center relative md:justify-between lg:max-w-7xl mx-auto px-2">
        <div className="hero-text max-w-sm space-y-1 md:space-y-6 flex flex-col items-center md:items-start">
          <h1 className="text-5xl font-semibold text-[60px] md:text-[70px] lg:text-[84px] text-[var(--secondary-btn)]">
            Little Lemon
          </h1>
          <h2 className="text-3xl font-semibold md:text-[56px] text-[36px] ">
            Chicago
          </h2>
          <p className="text-lg text-[16px] md:text-[18px] lg:text-[22px] tracking-[1%] text-center md:text-start py-2">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <ReserveBtn
            text="Reserve a Table"
            onClick={goToBooking}
            color="--secondary-btn"
            textColor="--black"
          />
        </div>
        <div className="hero-image flex items-center justify-center  absolute left-1/2 -translate-x-1/2 bottom-[-22rem] w-[60%]
md:w-[40%] md:bottom-0 md:left-auto md:translate-x-0 md:right-[10%]
lg:right-[5%] lg:top-40 lg:w-auto ">
          {/* <img src={heroImage} alt="hero" className="absolute left-1/2 -translate-x-1/2 -bottom-52  lg:translate-x-0 lg:right-[16%] md:top-18 w-[65%] lg:w-auto"/> */}
          <img
            src={heroImage}
            alt="hero"
            className="
               
                   "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
