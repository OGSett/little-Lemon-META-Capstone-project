export const TimeField = ({ value, onChange, times, error }) => {
  const isDisabled = times.length === 0;

  return (
    <div>
      <label
        htmlFor="time"
        className="mb-2 block text-sm font-medium text-neutral-800"
      >
        Time
      </label>

      <select
        id="time"
        name="time"
        value={value}
        onChange={onChange}
        disabled={isDisabled}
        className={`${error ? "border-red-500" : "border-neutral-200"} w-full hover:cursor-pointer rounded-lg border bg-neutral-100 px-4 py-3 text-sm text-neutral-800 outline-none transition focus:border-yellow-500 focus:bg-white`}
      >
        <option value="" disabled>
          {isDisabled ? "Select a date first" : "Select a time"}
        </option>

        {times.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}

    </div>
  );
};