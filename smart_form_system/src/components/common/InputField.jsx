import React from 'react'

const InputField = ({
  label,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition
        ${
          error
            ? "border-red-500 focus:ring-red-300"
            : "border-gray-300 focus:ring-blue-300"
        }`}
      />

      {error && (
        <span className="text-red-500 text-sm mt-1">
          {error}
        </span>
      )}
    </div>
  );
};

export default InputField;

