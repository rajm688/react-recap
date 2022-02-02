import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import React, { useState } from "react";
let data = [
  { id: 1, text: "take tablet", day: "Feb 5th 8.30am", reminder: false },

  { id: 2, text: "do workout", day: "Feb 5th 9.30am", reminder: false },

  { id: 3, text: "pray god", day: "Feb 5th 10.00am", reminder: false },
];

function App() {
  const [tasks, setTasks] = useState(data); // state is immutaable so to change we use callback function
  // toggle InputBar
  const [toggleBar, setToggleBar] = useState(false);

  //Add Task
  const addTask = (task) => {
    console.log(task);
    let id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  //deleting tasks
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  //Task Remainder
  const toggleRemainder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header
        title="Task Tracker"
        toggleBar={toggleBar}
        setToggleBar={setToggleBar}
      />
      {toggleBar && <AddTask onAdd={addTask} />}
      {tasks.length > 0 /* passing values as arguments */ ? (
        <Tasks
          tasks={tasks}
          setTasks={setTasks}
          onDelete={deleteTask}
          toggleRemainder={toggleRemainder}
        />
      ) : (
        "No Tasks"
      )}
    </div>
  );
}

export default App;
