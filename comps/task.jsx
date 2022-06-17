import React from "react";
import '../stylesheet/task.css';
import { AiFillLeftCircle } from "react-icons/ai";


function Task ({ id, text, complete,completeTask , deleteTask }) {
    return (
        <div className={complete ? 'task-content completed' :'task-content'}>
            <div
             className='task-text'
             onClick={() => completeTask(id)}>
                {text}
            </div>
            <div className='task-content-icon'
            onClick={() => deleteTask(id)}>
                <AiFillLeftCircle className='task-icon' />
            </div>
        </div>
    )
}
export default Task;