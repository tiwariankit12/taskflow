import { useState } from "react";
import { FaPlus, FaSpinner } from "react-icons/fa";
import toast from "react-hot-toast";

function TaskInput({ addTask }) {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      toast.error("Please enter a task title");
      return;
    }

    try {
      setLoading(true);
      if (addTask) {
        await addTask(trimmedTitle);
      }
      toast.success("Task Added Successfully");
      setTitle("");
    } catch (error) {
      toast.error("Failed to add task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="task-input-container">
      <label htmlFor="task-title" className="task-input-label">
        Add New Task
      </label>

      <form onSubmit={handleSubmit} className="task-input-form">
        <input
          id="task-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="✍️ What are you planning today?"
          className="task-input-field"
          disabled={loading}
          autoComplete="off"
        />

        <button
          type="submit"
          disabled={loading || !title.trim()}
          className="task-add-btn glow-effect"
        >
          {loading ? (
            <>
              <FaSpinner className="animate-spin" />
              <span>Adding...</span>
            </>
          ) : (
            <>
              <FaPlus />
              <span>Add Task</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default TaskInput;