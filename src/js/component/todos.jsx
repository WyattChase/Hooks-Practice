import React, { useState, useEffect } from "react";
import { javascript } from "webpack";

const Todos = () => {
    const [tasks, setTask] = useState []

    return { 
        <div> 
            <input onKeyUp={element =>
            element.keyCode === 13 &&
            setTask(tasks.concat({label: element.target.value, done: falst}))    
        }
        />
        <ul>
            {task.length === 0 ? 
            "Loading..."
            :
            tasks.map(task => (
                <li>
                    {task.label} ({task.done ? "done" : "not done"})
                </li>
            ))}
            </ul>      
    }
}
