export const validateStep1 = (data) => {
  let errors = {};

  if (!data.name) errors.name = "Name is required";

  if (!data.email) {
    errors.email = "Email is required";
  } else if (!data.email.includes("@")) {
    errors.email = "Invalid email";
  }

  if (!data.phone) errors.phone = "Phone is required";

  return errors;
};

export const validateStep2 = (data) => {
  let errors = {};

  if (!data.address) errors.address = "Address is required";

  if (!data.occupation) errors.occupation = "Occupation is required";

  if (!data.experience) {
    errors.experience = "Experience is required";
  } else if (isNaN(data.experience)) {
    errors.experience = "Must be a number";
  }

  return errors;
};