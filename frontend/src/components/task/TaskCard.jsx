import { useState, useRef, useEffect } from "react";
import {
  FaTrash,
  FaEdit,
  FaSave,
  FaTimes,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

function TaskCard({
  task,
  deleteTask,
  toggleTask,
  editTask,
}) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task?.title || "");
  const inputRef = useRef(null);

  const taskId = task?._id || task?.id;

  // Auto-focus input when editing starts
  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editing]);

  const handleSave = async (e) => {
    if (e) e.preventDefault();
    if (!title.trim()) return;

    if (editTask) {
      await editTask(taskId, { title });
    }
    setEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setEditing(false);
      setTitle(task?.title || "");
    }
  };

  return (
    <div className="task-card">
      <div className="task-card-top">
        <div className="task-card-main">
          <input
            type="checkbox"
            checked={!!task?.completed}
            onChange={() => toggleTask && toggleTask(taskId)}
            className="task-checkbox"
          />

          <div className="task-content">
            {editing ? (
              <form onSubmit={handleSave}>
                <input
                  ref={inputRef}
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="task-edit-input"
                />
              </form>
            ) : (
              <h2
                className={`task-card-title ${
                  task?.completed ? "completed" : ""
                }`}
              >
                {task?.title}
              </h2>
            )}

            <div className="task-badges">
              <span className="badge badge-date">
                <FaCalendarAlt />
                Today
              </span>

              <span
                className={`badge ${
                  task?.completed ? "badge-completed" : "badge-pending"
                }`}
              >
                {task?.completed ? "Completed" : "Pending"}
              </span>
            </div>
          </div>
        </div>

        <div className="task-actions">
          {editing ? (
            <>
              <button
                onClick={handleSave}
                className="btn-icon btn-save"
                title="Save (Enter)"
              >
                <FaSave />
              </button>

              <button
                onClick={() => {
                  setEditing(false);
                  setTitle(task?.title || "");
                }}
                className="btn-icon btn-cancel"
                title="Cancel (Esc)"
              >
                <FaTimes />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setEditing(true)}
                className="btn-icon btn-edit"
                title="Edit"
              >
                <FaEdit />
              </button>

              <button
                onClick={() => deleteTask && deleteTask(taskId)}
                className="btn-icon btn-delete"
                title="Delete"
              >
                <FaTrash />
              </button>
            </>
          )}
        </div>
      </div>

      {task?.completed && (
        <div className="completed-banner">
          <FaCheckCircle />
          Completed Successfully
        </div>
      )}
    </div>
  );
}

export default TaskCard;