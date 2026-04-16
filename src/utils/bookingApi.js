export const fetchAPI = (selectedDate) => {
  if (!selectedDate) return [];

  const day = new Date(selectedDate).getDate();

  if (day % 2 === 0) {
    return ["17:00", "18:00", "19:00"];
  }

  return ["18:00", "19:00", "20:00", "21:00"];
};

export const submitAPI = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    },1000)
  })
};