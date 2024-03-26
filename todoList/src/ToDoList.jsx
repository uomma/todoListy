import React, { useState } from "react"

function ToDoList() {

    const [tasks, setTasks] = useState(["eat", "walk", "shower"]);
    const [newTask, setNewTask] = useState("");


    function inputChange(e) {
        setNewTask(e.target.value);
    }

    function addTask() {

        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }

    }

    function deleteTask(index) {
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTasks(updatedTask);
    }

    function moveUp(index) {
        if (index > 0) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
            setTasks(updatedTask)
        }
    }

    function moveDown(index) {
        if (index <tasks.length-1) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
            setTasks(updatedTask)
        }
    }

    return (
        <>
            <div className="to-do-list">
                <h1>todoList</h1>
                <div>
                    <input type="text" placeholder="enter task..." value={newTask} onChange={inputChange} />
                    <button className="add-button" onClick={addTask}>Add</button>

                </div>
                <ol>
                    {tasks.map((task, index) => <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="move-button" onClick={() => moveUp(index)}>UP</button>
                        <button className="move-button" onClick={() => moveDown(index)}>DOWN</button>


                    </li>)}
                </ol>
            </div>
        </>
    )
}

export default ToDoList
