const BookingForm = () => {
  return (
    <section className=" px-4 py-12">
      <div className="mx-auto w-full max-w-md rounded-2xl p-6 shadow-sm md:p-8">
        <h1 className="mb-8 text-center font-serif text-4xl font-bold text-black">
          Book Now
        </h1>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="res-date"
              className="mb-2 block text-sm font-medium text-neutral-800"
            >
              Date
            </label>
            <input
              type="date"
              id="res-date"
              name="res-date"
              className="w-full rounded-lg border border-neutral-200 bg-neutral-100 px-4 py-3 text-sm text-neutral-800 outline-none transition focus:border-yellow-500 focus:bg-white"
            />
          </div>

          <div>
            <label
              htmlFor="res-time"
              className="mb-2 block text-sm font-medium text-neutral-800"
            >
              Time
            </label>
            <select
              id="res-time"
              name="res-time"
              className="w-full rounded-lg border border-neutral-200 bg-neutral-100 px-4 py-3 text-sm text-neutral-800 outline-none transition focus:border-yellow-500 focus:bg-white"
            >
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="guests"
              className="mb-2 block text-sm font-medium text-neutral-800"
            >
              Number of guests
            </label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              max="10"
              placeholder="1"
              className="w-full rounded-lg border border-neutral-200 bg-neutral-100 px-4 py-3 text-sm text-neutral-800 outline-none transition focus:border-yellow-500 focus:bg-white"
            />
          </div>

          <div>
            <label
              htmlFor="occasion"
              className="mb-2 block text-sm font-medium text-neutral-800"
            >
              Occasion
            </label>
            <select
              id="occasion"
              name="occasion"
              className="w-full rounded-lg border border-neutral-200 bg-neutral-100 px-4 py-3 text-sm text-neutral-800 outline-none transition focus:border-yellow-500 focus:bg-white"
            >
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Engagement</option>
              <option>Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-yellow-400 px-4 py-3 text-sm font-semibold text-black transition hover:opacity-90"
          >
            Make Your Reservation
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;