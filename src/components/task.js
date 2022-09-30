import React from 'react'
import TaskData from './taskdata'


const Task = ({task,onDelete,onToggle}) => {
  return (
    <>
        {
            task.map((task) => (
                <TaskData key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))
        }
    </>
  )
}

export default Task