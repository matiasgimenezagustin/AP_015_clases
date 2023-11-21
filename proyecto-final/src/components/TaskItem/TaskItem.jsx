import React from 'react'

const TaskItem = ({task, deleteTask}) => {
    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <span>{task.createdAt}</span>
            <button onClick={() => deleteTask(task.id)}>X</button>
            <hr />
        </div>
    )
}

export default TaskItem