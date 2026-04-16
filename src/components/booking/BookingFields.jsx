export const NameField = ({ value, onChange, error }) => {
  return (
    <div>
      <label
        htmlFor="fullName"
        className="mb-2 block text-sm font-medium text-neutral-800"
      >
        Full Name
      </label>

      <input
        type="text"
        id="fullName"
        required
        name="fullName"
        value={value}
        onChange={onChange}
        placeholder="John Doe"
        aria-invalid={!!error}
        aria-describedby={error ? "fullName-error" : undefined}
        className={`${
          error ? "border-red-500" : "border-neutral-200"
        } w-full rounded-lg border bg-neutral-100 px-4 py-3 text-sm text-neutral-800 outline-none transition focus:border-yellow-500 focus:bg-white`}
      />

      {error && (
        <p id="fullName-error" className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export const DateField = ({ value, onChange, error }) => {
  return (
    <div>
      <label
        htmlFor="date"
        className="mb-2 block text-sm font-medium text-neutral-800"
      >
        Date
      </label>

      <input
        type="date"
        id="date"
        required
        name="date"
        min={new Date().toISOString().split("T")[0]}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? "date-error" : undefined}
        className={`${
          error ? "border-red-500" : "border-neutral-200"
        } w-full rounded-lg border bg-neutral-100 px-4 py-3 text-sm text-neutral-800 outline-none transition focus:border-yellow-500 focus:bg-white`}
      />

      {error && (
        <p id="date-error" className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export const GuestsField = ({ value, onChange, error }) => {
  return (
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
        required
        min="1"
        max="10"
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? "guests-error" : undefined}
        className={`${
          error ? "border-red-500" : "border-neutral-200"
        } w-full rounded-lg border bg-neutral-100 px-4 py-3 text-sm text-neutral-800 outline-none transition focus:border-yellow-500 focus:bg-white`}
      />

      {error && (
        <p id="guests-error" className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export const OccasionField = ({ value, onChange, error }) => {
  return (
    <div>
      <label
        htmlFor="occasion"
        className="mb-2 block text-sm font-medium text-neutral-800"
      >
        Occasion
      </label>

      <select
        id="occasion"
        required
        name="occasion"
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? "occasion-error" : undefined}
        className={`${
          error ? "border-red-500" : "border-neutral-200"
        } w-full hover:cursor-pointer rounded-lg border bg-neutral-100 px-4 py-3 text-sm text-neutral-800 outline-none transition focus:border-yellow-500 focus:bg-white`}
      >
        <option value="" disabled>
          Select your occasion
        </option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Engagement">Engagement</option>
        <option value="Other">Other</option>
      </select>

      {error && (
        <p id="occasion-error" className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};
