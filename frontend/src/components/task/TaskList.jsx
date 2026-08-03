import TaskCard from "./TaskCard";

function TaskList({
  tasks = [],
  deleteTask,
  toggleTask,
  editTask,
}) {
  if (!tasks || tasks.length === 0) {
    return (
      <div className="empty-tasks-card">
        <h2 className="empty-tasks-title">
          No Tasks Yet 🚀
        </h2>
        <p className="empty-tasks-subtitle">
          Add your first task to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="task-list-wrapper">
      {tasks.map((task) => (
        <TaskCard
          key={task._id || task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default TaskList;