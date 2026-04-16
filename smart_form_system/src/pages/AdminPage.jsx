const AdminPage = () => {
  const data = getData();

  return (
    <div>
      <h1>Submissions</h1>
      <SubmissionTable data={data} />
    </div>
  );
};