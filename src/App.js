import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { Data } from "./components/Data";

function App() {
  const [tasks, setTasks] = useState(Data);
  const [addTasks, setAddTasks] = useState(false);

  // add task
  const addNewTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // toggle reminder
  const reminder = async (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="app-container">
      <Header
        title="Task Planner"
        onAdd={() => setAddTasks(!addTasks)}
        addTasks={addTasks}
      />
      {addTasks && <AddTask onAdd={addTasks} addNewTask={addNewTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} reminder={reminder} />
      ) : (
        <p className="no-task">No task left, add task and set a reminder</p>
      )}
      <div>
        <button className="btn-clear" onClick={() => setTasks([])}>
          {tasks.length > 0 ? "clear all" : "No task"}
        </button>
      </div>
    </div>
  );
}

export default App;
