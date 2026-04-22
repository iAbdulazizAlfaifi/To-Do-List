import React, { useRef, useState } from "react";
import "../App.css";

function InputField({ onAddTask }) {
  const inputRef = useRef(null);
  const [error, setError] = useState("");

  const handleAddTask = () => {
    const text = inputRef.current.value;
    if (text.trim() === "") {
      setError("Task can't be empty!");
      return;
    }
    setError("");
    onAddTask(text);
    inputRef.current.value = "";
  };

  const handleInputChange = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    };
  }
    return (
      <div className="input-system-container">
        <div className="input-container">
          <input 
              type="text" 
              placeholder="Add a task..." 
              ref={inputRef}
              onKeyDown={handleInputChange}
          />
          <button className="button add-button" onClick={handleAddTask}>
            Add
          </button>
        </div>
        <p className="error-message">{error}</p>
      </div>
    );
  }

export default InputField;