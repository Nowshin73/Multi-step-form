import React from 'react'

const SubmissionRow = ({ item }) => {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="py-3">{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>
        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded">
          {item.status}
        </span>
      </td>
    </tr>
  );
};

export default SubmissionRow