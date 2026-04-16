export const saveData = (data) => {
  localStorage.setItem("formData", JSON.stringify(data));
};

export const getData = () => {
  return JSON.parse(localStorage.getItem("formData")) || [];
};