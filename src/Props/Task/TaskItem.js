const TaskItem = ({ task }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>{task.title}</span>
      <span>
        <span className={`badge bg-${getStatusColor(task.status)} me-2`}>
          {task.status}
        </span>
        <button className="btn btn-sm btn-primary">Toggle Status</button>
      </span>
    </li>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case "Pending":
      return "warning";
    case "In Progress":
      return "info";
    case "Completed":
      return "success";
    default:
      return "secondary";
  }
};

export default TaskItem;
