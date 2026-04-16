import FormNavigation from "../components/form/FormNavigation.jsx";
import Step1 from "../components/form/Step1.jsx";
import Step2 from "../components/form/Step2.jsx";
import Step3 from "../components/form/Step3.jsx";
// import { saveData } from "../services/storageService.js";
import React, { useState } from 'react'
import useForm from "../hooks/Useform.jsx";
import ProgressBar from "../components/form/Progressbar.jsx";

const FormPage = () => {
  const [step, setStep] = useState(1);
  const { formData, handleChange, errors, validate } = useForm();

const handleSubmit = () => {
  const existing = JSON.parse(localStorage.getItem("formData")) || [];

  const newEntry = {
    ...formData,
    status: "Pending",
    id: Date.now(),
  };

  localStorage.setItem(
    "formData",
    JSON.stringify([...existing, newEntry])
  );

  alert("Submitted successfully!");
};
  const next = () => {
    if (validate(step)) setStep(step + 1);
  };

  const prev = () => setStep(step - 1);

  return (
    <div>
      <ProgressBar step={step} />

      {step === 1 && <Step1 {...{ formData, handleChange, errors }} />}
      {step === 2 && <Step2 {...{ formData, handleChange, errors }} />}
      {step === 3 && <Step3 formData={formData} />}

      <FormNavigation next={next} prev={prev} step={step} />
    </div>
  );
};
export default FormPage