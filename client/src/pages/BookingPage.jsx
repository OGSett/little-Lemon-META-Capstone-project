import { BookingForm } from "../components/booking/BookingForm";

const BookingPage = () => {
  return (
    <section className=" px-4 py-12">
      <div className="mx-auto w-full max-w-md rounded-2xl p-6 shadow-sm md:p-8">
        <h1 className="mb-8 text-center font-serif text-4xl font-bold text-black">
          Book Now
        </h1>

        <BookingForm/>

      </div>
    </section>
  );
};

export default BookingPage;