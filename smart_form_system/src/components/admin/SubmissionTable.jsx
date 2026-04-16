import React from 'react'

const SubmissionTable = ({ data }) => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <SubmissionRow key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
};

export default SubmissionTable