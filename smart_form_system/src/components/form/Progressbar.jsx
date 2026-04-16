import React from 'react'

const ProgressBar = ({ step }) => {
  const percentage = (step / 3) * 100;

  return (
    <div className="w-full bg-gray-200 h-2 rounded">
      <div
        className="bg-blue-500 h-2 rounded"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar