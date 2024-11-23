import TaskList from "./TaskList";

const App = () => {
  const tasks = [
    {
      id: 1,
      title: "Comlete React Assignment",
      status: "Pending",
    },
    {
      id: 2,
      title: "Prepare for meeting",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Review the PRs",
      status: "Completed",
    },
  ];

  return (
    <div className="container mt-5">
      <h1>Task Manager</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
