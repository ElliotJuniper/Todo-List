import { useState } from "react";
import './App.css'

const Todo = () => {
    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState("")
    const [color, setColor] = useState(false)

    const updateInput = (event) => {
        setInput(event.target.value)
    } 
    const addTask = () => {
        let array = [...tasks]
        array.push(input)
        setTasks(array)
        setInput("")
    }
    const removeTasks = (index) => {
        let array = [...tasks];
        array.splice(index, 1);
        setTasks(array)
    }
    // const checkTasks = (index) => {
    //     let array = [...tasks];
    //     array(index)               
    //     setColor(array)
    // }

    return (
        <div>
            <h1>To-Do list</h1>
            <input className="addTask1" value={input} onChange={updateInput}/>
            <button className="addTask" onClick={addTask}>Add Task</button>

            {tasks.map((item, index) => {
                return (
                <div className="container">
                    {color ? (
                        <h1 style={{color: "green", textDecoration: "line-through"}}>
                            {item}
                        </h1>
                    ) : (
                        <h1>{item}</h1>
                    )}
                    <button className="check" onClick={() => setColor(true)}>✔</button>
                    <button className="delete" onClick={() => removeTasks(index)}>X</button>
                    </div>)
                {/* <button className="check" onClick={() => checkTasks(index)}
                style={{
                color:color ? 'red':'green'
            // color:border ? 'red':'green'
            }}

                    >✔</button>  */}
                {/* <button className="check" onClick={() => setColor(!color)}
                style={
                    {
                    color:color ? 'red':'green'
                    // color:border ? 'red':'green'
                    }
                    }
                >✔</button> */}
                 {/* <h2>{item}</h2> */}
            })}
        </div>   
    )}

export default Todo