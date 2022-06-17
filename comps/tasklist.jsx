import React, { useState } from "react";
import Taskformulary from './formulary';
import '../stylesheet/tasklistcontent.css'
import Task from "./task";



function TaskList() {
    const [tasks, setTask] = useState([]);
    const addTask = task => {
        if (task.text.trim()) {
            task.text = task.text.trim();
            const taskUpgrade = [task, ...tasks];
            setTask(taskUpgrade);
        }
    }
    const deleteTask = id => {
        const taskUpgrade =tasks.filter(task => task.id !== id);
        setTask(taskUpgrade);
    }
    const completeTask = id =>{
        const taskUpgrade =tasks.map(task =>{
            if(task.id === id){
                task.complete = !task.complete;
            }
            return task;
        });
        setTask(taskUpgrade);
    }
    return (
        <>
            <Taskformulary onSubmit={addTask}
            />
            <div className='task-list-content'>
                {
                    tasks.map((task) =>
                        <Task
                        key={task.id}
                        id={task.id}
                            text={task.text}
                            complete={task.complete}
                            deleteTask={deleteTask}
                            completeTask={completeTask}
                        />
                    )
                }
            </div>
        </>
    );
}

export default TaskList;