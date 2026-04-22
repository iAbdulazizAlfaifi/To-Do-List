import { useState } from "react";
import "./App.css";

import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";


function App() {

  const [taskList, setTaskList] = useState([]);
  const [filter, setFilter] = useState("all");
  const [openedTaskIndex, setOpenedTaskIndex] = useState(null);
  
  const handleAddTask = (task) => {
    const newTask = { text:task, completed: false };
    setTaskList([...taskList, newTask]);
  };

  const handleToggleTask = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList[index].completed = !updatedTaskList[index].completed;
    setTaskList(updatedTaskList);
  };

  const handleDeleteTask = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);

    if (openedTaskIndex === index) {
      setOpenedTaskIndex(null);
    }
  };

  const handleEditTask = (index, newTask) => {
    const updatedTaskList = [...taskList];
    updatedTaskList[index].text = newTask;
    setTaskList(updatedTaskList);
  };

  const handleToggleAction = (index) => {
    setOpenedTaskIndex(prevIndex => (prevIndex === index ? null : index));
  }

  return (
    <section className="app-container">
      <div className="app">
        <h1 className="app-title">To-Do List</h1>
        <p className="app-subtitle">Organize your day. on task at a time.</p>

        <Filter
          filter={filter}
          onFilterChange={setFilter}
        />

        <TodoList 
          taskList={taskList}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
          onEditTask={handleEditTask}
          filter={filter}
          openedTaskIndex={openedTaskIndex}
          onToggleAction={handleToggleAction}

        />

        <InputField 
          onAddTask={handleAddTask}
        />
      </div>
    </section>
  );
}

export default App;