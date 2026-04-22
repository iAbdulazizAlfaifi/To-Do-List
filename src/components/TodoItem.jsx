import React, { useRef, useState } from "react";
import { FiEdit2, FiTrash2, FiX, FiCheck } from "react-icons/fi";
import "../App.css";

function TodoItem({
  taskName,
  onToggle,
  onDelete,
  onEdit,
  isActionOpen,
  onToggleAction,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const editInputRef = useRef(null);
  const [error, setError] = useState("");

  const handleEdit = (event) => {
    event.stopPropagation();
    setIsEditing(true);
  };

  const handleSave = (event) => {
    event.stopPropagation();

    const newTask = editInputRef.current.value;

    if (newTask.trim() === "") {
      setError("Task can't be empty!");
      return;
    }

    onEdit(newTask);
    setIsEditing(false);
    setError("");
  };

  const handleInputChange = (event) => {
    if (event.key === "Enter") {
      handleSave(event);
    }
  };

  const handleCancelEdit = (event) => {
    event.stopPropagation();
    setIsEditing(false);
    setError("");
  };

  return (
    <li
      className={`task-item ${isActionOpen ? "task-item-open" : ""}`}
      onClick={onToggleAction}
    >
      <div className="task-div" style={{ display: isEditing ? "none" : "flex" }}>
        <div
          className="task-figure"
        >
          <span className={`checkmark ${taskName.completed ? "done" : ""}`}
            onClick={(event) => {
            event.stopPropagation();
            onToggle();
            }}>
            </span>
          <span className={taskName.completed ? "completed-task" : ""}>
            {taskName.text}
          </span>
        </div>

        <button className="green-btn edit-btn" onClick={handleEdit}>
          <FiEdit2 size={18} />
        </button>

        <button
          className="red-btn delete-btn"
          onClick={(event) => {
            event.stopPropagation();
            onDelete();
          }}
        >
          <FiTrash2 size={18} />
        </button>
      </div>

      <div
        className="input-div"
        style={{ display: isEditing ? "flex" : "none" }}
        onClick={(event) => event.stopPropagation()}
      >
        <input
          ref={editInputRef}
          type="text"
          placeholder="Edit task..."
          defaultValue={taskName.text}
          onKeyDown={handleInputChange}
          autoFocus
        />

        <button className="green-btn" onClick={handleSave}>
          <FiCheck size={18} />
        </button>

        <button className="red-btn" onClick={handleCancelEdit}>
          <FiX size={18} />
        </button>
      </div>

      <p className="error-message" style={{ display: error ? "block" : "none" }}>
        {error}
      </p>
    </li>
  );
}

export default TodoItem;