export const validateBooking = (formData) => {
  const errors = {};

  if (!formData.fullName.trim()) {
    errors.fullName = "Full name is required";
  }

  if (!formData.date) {
    errors.date = "Date is required";
  }

  if (!formData.time) {
    errors.time = "Time is required";
  }

  const guests = Number(formData.guests);

  if (!guests || guests < 1 || guests > 10) {
    errors.guests = "Guests must be between 1 and 10";
  }

  // optional (you can skip if not required)
  if (!formData.occasion) {
    errors.occasion = "Please select an occasion";
  }

  return errors;
};