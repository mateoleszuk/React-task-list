import React, { setState } from "react";
import { useState } from "react";
import '../stylesheet/taskformulary.css'
import {v4 as uuidv4} from 'uuid';

function Taskformulary (props) {
    
    const[input, setInput] = useState('');
    const handle = e => {
        setInput(e.target.value);
    }
    const send = e => {
        e.preventDefault();
        
        const taskNew = {
            id: uuidv4(),
            text: input,
            complete: false
        }
       props.onSubmit(taskNew);
    }
    return(
        <form className="task-formulary"
        onSubmit={send}>
            <input className="task-input" 
            type='text'
            placeholder='Escribe una tarea'
            name='text' 
            onChange={handle}
            />
            <button className='task-button'>
                add task
            </button>
        </form>
    )
}

export default Taskformulary;