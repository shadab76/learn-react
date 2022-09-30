import React from 'react'
import { FaTimes } from 'react-icons/fa';

const TaskData = ({task,onDelete,onToggle}) => {
  return (
    <div className={`task_box ${task.reminder ? 'reminder' : ""}`} onDoubleClick={() => onToggle(task.id)}>
        <h4>{task.name}</h4>
        <p>{task.Profile}</p>
        <div className='icon-close' onClick={() => onDelete(task.id)} >
            <span><FaTimes /></span>
        </div>
    </div>
  )
}

export default TaskData;