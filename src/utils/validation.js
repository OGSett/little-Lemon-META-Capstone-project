export const validateBooking = (formData) => {
  const errors = {};

  if (!formData.fullName.trim()) {
    errors.fullName = "Full name is required";
  }

  const today = new Date().toISOString().split("T")[0];

  if (!formData.date) {
    errors.date = "Date is required";
  } else if (formData.date < today) {
    errors.date = "Cannot select a past date";
  }
  
  if (!formData.time) {
    errors.time = "Time is required";
  }

  const guests = Number(formData.guests);

  if (!guests || guests < 1 || guests > 10) {
    errors.guests = "Guests must be between 1 and 10";
  }

  if (!formData.occasion) {
    errors.occasion = "Please select an occasion";
  }

  return errors;

};