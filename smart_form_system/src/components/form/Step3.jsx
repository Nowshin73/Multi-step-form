import React from 'react'
import Card from '../common/Card';

const Step3 = ({ formData }) => {
  return (
      <Card title="Review Information">

    <div>
      <h2 className="text-lg font-semibold mb-4">Review Your Info</h2>

      <div className="bg-gray-50 p-4 rounded-lg space-y-2">
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
        <p><strong>Address:</strong> {formData.address}</p>
        <p><strong>Occupation:</strong> {formData.occupation}</p>
        <p><strong>Experience:</strong> {formData.experience}</p>
      </div>

      <p className="text-sm text-gray-500 mt-3">
        Please confirm your details before submitting.
      </p>
    </div>
      </Card>
  );
};

export default Step3