import { TimeField } from "./AvailableTimes";
import {
  DateField,
  GuestsField,
  NameField,
  OccasionField,
} from "./BookingFields";
import { SubmitButton } from "./SubmitButton";
import { useBookingForm } from "../../hooks/useBookingForm";

export const BookingForm = () => {
  const { formData, handleChange, handleSubmit } = useBookingForm();

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <NameField
        value={formData.fullName}
        onChange={handleChange}
        error={formData.errors.fullName}
      />

      <DateField
        value={formData.date}
        onChange={handleChange}
        error={formData.errors.date}
      />

      <TimeField
        value={formData.time}
        onChange={handleChange}
        times={formData.availableTimes}
        error={formData.errors.time}
      />

      <GuestsField
        value={formData.guests}
        onChange={handleChange}
        error={formData.errors.guests}
      />

      <OccasionField
        value={formData.occasion}
        onChange={handleChange}
        error={formData.errors.occasion}
      />

      <SubmitButton />
    </form>
  );
};