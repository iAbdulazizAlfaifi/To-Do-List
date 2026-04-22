import React, { useRef, useState } from "react";
import "../App.css";
import TodoItem from "./TodoItem";

function TodoList({taskList, onToggleTask, onDeleteTask, onEditTask, filter, openedTaskIndex, onToggleAction}) {

    return (
      <ul className="tasks-container">
        {taskList.length === 0 ? (
          <p className="no-tasks-message">no tasks yet. Add some tasks to organize your day!</p>
        ) : (
          taskList.map((task, index) => {
            if (filter === "active" && task.completed) return null;
            if (filter === "completed" && !task.completed) return null;

            return (
              <TodoItem
                key={index}
                taskName={task}
                onToggle={() => onToggleTask(index)}
                onDelete={() => onDeleteTask(index)}
                onEdit={(newTask) => onEditTask(index, newTask)}
                isActionOpen={openedTaskIndex === index}
                onToggleAction={() => onToggleAction(index)}
              />
            );
          })
        )}
      </ul>
    );
}

export default TodoList;