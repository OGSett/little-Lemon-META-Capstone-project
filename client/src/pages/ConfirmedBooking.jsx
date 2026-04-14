import { useLocation, useNavigate } from "react-router-dom";

const ConfirmedBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state;

  if (!booking) {
    return (
      <section className="px-4 py-12">
        <div className="mx-auto max-w-md rounded-2xl p-6 shadow-sm md:p-8">
          <h1 className="text-3xl font-bold text-black">No booking found</h1>
          <p className="mt-4 text-neutral-600">
            Please make a reservation first.
          </p>
          <button
            onClick={() => navigate("/booking")}
            className="mt-6 rounded-xl bg-yellow-400 px-4 py-3 text-sm font-semibold text-black transition hover:opacity-90"
          >
            Go to Booking
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 py-12 h-[80vh] lg:h-[80vh] flex items-center justify-center">
      <div className="mx-auto max-w-md rounded-2xl p-6 shadow-sm md:p-8">
        <h1 className="text-3xl font-bold text-black">Booking Confirmed</h1>
        <p className="mt-4 text-neutral-700">Thank you <strong>{booking.fullName}</strong> for your reservation.</p>

        <div className="mt-6 space-y-2 text-neutral-800">
          <p><strong>Full Name:</strong> {booking.fullName}</p>
          <p><strong>Date:</strong> {booking.date}</p>
          <p><strong>Time:</strong> {booking.time}</p>
          <p><strong>Guests:</strong> {booking.guests}</p>
          <p><strong>Occasion:</strong> {booking.occasion}</p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-6 rounded-xl bg-yellow-400 px-4 py-3 text-sm font-semibold text-black transition hover:opacity-90"
        >
          Back to Home
        </button>
      </div>
    </section>
  );
};

export default ConfirmedBooking;