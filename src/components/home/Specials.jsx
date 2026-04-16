import ReserveBtn from "../common/Button";
import { useBookingNavigation } from "../../utils/helpers";
import SpecialCard from "../common/Cards";
import specialsData from "../../data/specials.json";

const Specials = () => {
  const { goToBooking } = useBookingNavigation();

  return (
    <div
      className="w-full text-black py-16 my-18"
      aria-labelledby="specials-heading"
    >
      <div className="specials-layout flex flex-col items-center justify-between max-w-7xl mx-auto px-4">
        <div className="specials-text space-y-6 flex flex-col md:flex-row md:justify-between justify-center items-center w-full">
          <h2
            id="specials-heading"
            className="font-semibold md:mb-0 mt-1 text-[48px] md:text-[64px]"
          >
            This week’s specials!
          </h2>

          <ReserveBtn
            text="Reserve a Table"
            onClick={goToBooking}
            color="--secondary-btn"
            textColor="--black"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-16 w-full">
          {specialsData.specialsData.map((special) => (
            <SpecialCard
              key={special.id}
              title={special.title}
              price={special.price}
              description={special.description}
              image={special.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specials;
