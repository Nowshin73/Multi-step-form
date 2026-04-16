import React from 'react'

import Card from "../common/Card";
import InputField from '../common/Inputfield';

const Step1 = ({ formData, handleChange, errors }) => {
  return (
    <Card title="Personal Information">
      <div className="space-y-4">
        <InputField
          label="Full Name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          error={errors.name}
        />

        <InputField
          label="Email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          error={errors.email}
        />

        <InputField
          label="Phone"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          error={errors.phone}
        />
      </div>
    </Card>
  );
};
export default Step1