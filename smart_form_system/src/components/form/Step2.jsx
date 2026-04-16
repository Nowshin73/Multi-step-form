import React from 'react'

const Step2 = ({ formData, handleChange, errors }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Details</h2>

      <InputField
        label="Address"
        value={formData.address || ""}
        onChange={(e) => handleChange("address", e.target.value)}
      />

      <InputField
        label="Occupation"
        value={formData.occupation || ""}
        onChange={(e) => handleChange("occupation", e.target.value)}
      />

      <InputField
        label="Experience (years)"
        value={formData.experience || ""}
        onChange={(e) => handleChange("experience", e.target.value)}
      />
    </div>
  );
};

export default Step2