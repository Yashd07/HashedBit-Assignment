import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
            <h1 className="text-center mb-4">Todo List</h1>
            <div className="input-group mb-3 w-75">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add a new task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <div className="input-group-append">
                    <button className="btn btn-primary" onClick={addTask}>
                        Add
                    </button>
                </div>
            </div>

            <ul className="list-group w-75">
                {tasks
                    .sort() // Sort tasks in ascending order
                    .map((task, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            {task}
                            <button className="btn btn-danger btn-sm" onClick={() => removeTask(index)}>
                                Delete
                            </button>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default App;
