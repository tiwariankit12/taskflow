import {
  FaTasks,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

function TaskStats({ tasks = [] }) {
  const total = tasks.length;

  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  const pending = total - completed;

  const cards = [
    {
      title: "Total Tasks",
      value: total,
      icon: <FaTasks />,
      type: "total",
    },
    {
      title: "Pending",
      value: pending,
      icon: <FaClock />,
      type: "pending",
    },
    {
      title: "Completed",
      value: completed,
      icon: <FaCheckCircle />,
      type: "completed",
    },
  ];

  return (
    <div className="stats-container">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`stat-card-item ${card.type}`}
        >
          <div className="stat-card-content">
            <div>
              <p className="stat-card-title">{card.title}</p>
              <h2 className="stat-card-value">{card.value}</h2>
            </div>
            <div className="stat-card-icon">{card.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskStats;