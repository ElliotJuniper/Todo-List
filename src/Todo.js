import { useState } from "react";
import "./App.css";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const updateInput = (event) => {
    setInput(event.target.value);
  };

  //amended push method with new properties that will recognise state change
  const addTask = () => {
    let array = [...tasks];
    array.push({ text: input, complete: false });
    setTasks(array);
    setInput("");
  };
  const removeTasks = (index) => {
    let array = [...tasks];
    array.splice(index, 1);
    setTasks(array);
  };

  //funtion to set the state to complete line through, green
  const checkBox = (index) => {
    const newTasks = tasks.slice();
    newTasks[index].complete = !newTasks[index].complete;
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>To-Do list</h1>
      <input className="addTask1" value={input} onChange={updateInput} />
      <button className="addTask" onClick={addTask}>
        Add Task
      </button>

      {tasks.map((item, index) => {
        return (
          <div className="container">
            {item.complete ? (
              <h1 style={{ color: "green", textDecoration: "line-through" }}>
                {item.text}
              </h1>
            ) : (
              <h1>{item.text}</h1>
            )}
            {/* added function to onClick event */}
            <button className="check" onClick={() => checkBox(index)}>
              ✔
            </button>
            <button className="delete" onClick={() => removeTasks(index)}>
              X
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;