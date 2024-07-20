'use client';
import React, { useState } from 'react'
//ปณิตา ดอนเมือง 660610772
function Task({task}){
    const textStyle = task.title === 'Read a book' ? { textDecoration: 'line-through' } : {};
    return (
        <div className="d-flex p-3 gap-2 align-items-center border-bottom">
            <span style={textStyle}>{task.title}</span>
            <button className="btn btn-success">Done</button>
            <button className="btn btn-danger">Delete</button>
        </div>
    )
}

export default function TaskList() {
    const [tasks] = useState([
        {id: 0, title: 'Read a book', isDone: true},
        {id: 1, title: 'Take a shower', isDone: true},
        {id: 2, title: 'Sleep', isDone: true},
    ]);
    return(
        <div>
            {tasks.map(task => <Task key={task.id} task={task}/>)}
        </div>
    )
}