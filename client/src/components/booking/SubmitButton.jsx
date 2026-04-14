export const SubmitButton = ({ submitState }) => {
  return (
    <button
      type="submit"
      disabled={submitState}
      className={`w-full rounded-xl px-4 py-3 text-sm font-semibold text-black transition ${
        submitState
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-yellow-400 hover:opacity-90"
      }`}
    >
      {submitState ? "Processing..." : "Make Your Reservation"}
    </button>
  );
};