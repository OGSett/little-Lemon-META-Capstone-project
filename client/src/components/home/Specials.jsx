import ReserveBtn from "../common/Button";
import { useBookingNavigation } from "../../utils/helpers";
import SpecialCard from "../common/Cards";
import specialsData from "../../data/specials.json";

const Specials = () => {
  const { goToBooking } = useBookingNavigation();

  return (
    <section className="w-full text-black py-16 my-18">
      <div className="specials-layout flex flex-col items-center justify-between max-w-7xl mx-auto px-4">
        <div className="specials-text space-y-6 flex flex-row justify-between items-center w-full">
          <h1 className="font-semibold mb-0 mt-1 text-[64px]">
            This week’s specials!
          </h1>
          <ReserveBtn
            text="Online Menu"
            onClick={goToBooking}
            color="--secondary-btn"
            textColor="--black"
          />
        </div>
        <div className="grid grid-cols-3 gap-10 mt-16 w-full">
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
    </section>
  );
};

export default Specials;
