import { useState } from "react";
import { validateStep1, validateStep2 } from "../utils/validation";

const useForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    occupation: "",
    experience: "",
  });

  const [errors, setErrors] = useState({});

  // 🟢 Handle Input Change
  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // remove error when typing
    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  // 🟡 Validation Controller
  const validate = (step) => {
    let newErrors = {};

    if (step === 1) {
      newErrors = validateStep1(formData);
    }

    if (step === 2) {
      newErrors = validateStep2(formData);
    }

    setErrors(newErrors);

    // if no errors → valid
    return Object.keys(newErrors).length === 0;
  };

  return {
    formData,
    handleChange,
    errors,
    validate,
  };
};

export default useForm;