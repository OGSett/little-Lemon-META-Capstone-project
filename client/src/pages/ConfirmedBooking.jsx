import { useNavigate } from "react-router-dom";

const ConfirmedBooking   = () => {
    const navigate = useNavigate()

    return ( 
        <section className="min-h-screen bg-neutral-100 px-4 pb-12 pt-20">
      <div className="mx-auto flex w-full   max-w-3xl flex-col items-center text-center">
        <h1 className="mb-4 font-serif text-4xl font-bold text-black md:text-6xl">
          Thank you for your reservation!
        </h1>

        <p className="mb-10 text-sm font-medium uppercase tracking-wide text-black md:text-base">
          We look forward to seeing you at Little Lemon.
        </p>

        <div className="w-full max-w-md rounded-2xl bg-[var(--primary-green-cold)] p-6 text-left shadow-sm md:p-8">
          <h2 className="mb-6 font-serif text-3xl font-bold text-yellow-400">
            Confirmation details
          </h2>

          <div className="space-y-4 text-white">
            <p className="text-lg">
              <span className="font-semibold">Occasion:</span> Birthday
            </p>
            <p className="text-lg">
              <span className="font-semibold">Guests:</span> 1
            </p>
            <p className="text-lg">
              <span className="font-semibold">Date:</span> 2025-12-04
            </p>
            <p className="text-lg">
              <span className="font-semibold">Time:</span> 17:00
            </p>
          </div>
        </div>

        <button
          type="button"
          className="mt-10 w-full max-w-md rounded-xl bg-yellow-400 px-4 py-4 text-base font-semibold text-black transition hover:opacity-90"
        >
          Back to home
        </button>
      </div>
    </section>
     );
}
 
export default ConfirmedBooking ;