import React from 'react'

const Card = ({ children, title }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
      {title && (
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {title}
        </h2>
      )}

      {children}
    </div>
  );
};

export default Card;

