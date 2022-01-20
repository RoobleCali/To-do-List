import React from "react";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "./index.css";
import Footer from "./components/Footer";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, settasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      settasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // fetch tasks from the server
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    console.log(data);

    return data;
  };
  // fetch task from the server
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/$id`);
    const data = await res.json();
    console.log(data);

    return data;
  };

  //Add tasks
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    settasks([...tasks, data]);
  };
  // delete task
  const DeleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    settasks(tasks.filter((task) => task.id !== id));
  };
  //  toggle Remainder
  const TaskRemainder = (id) => {
    settasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              reminder: !task.reminder,
            }
          : task
      )
    );
  };
  // jsx
  return (
    <div className='container'>
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        ShowAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={DeleteTask} onToggle={TaskRemainder} />
      ) : (
        <h3
          style={{ textAlign: "center", marginTop: "20%", fontWeight: "300" }}
        >
          please add a task..........✋{" "}
        </h3>
      )}

      <Footer />
    </div>
  );
};

export default App;
