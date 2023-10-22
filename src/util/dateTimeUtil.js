
export const formatDate = (date) => {
  return new Date(date).toLocaleString();
}

export const isClosingSoon = (date) => {
  const currentDate = new Date().toLocaleDateString();
  let dueDate = new Date(date).toLocaleDateString();
  if (currentDate === dueDate) return true;
  return false;
}