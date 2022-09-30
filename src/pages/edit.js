import React, { useState } from "react";
import "./edit.scss"
import PropTypes from 'prop-types';
import Task from '../components/task';
import Addtask from "../components/Addtask";
import Button from "../components/button"


const Edit = ({title}) => {
  const [showAddTask,setShowAddTask] = useState(true)
 const onAdd = () =>{
    setShowAddTask(!showAddTask)
  }
  const [task,setData] = useState(
    [
      {
          id: 1,
          name:"shadab saifi",
          Profile:"MERN stack developer",
          day: "Tuesday 2:00am",
          reminder:'true'
      },
      {
          id: 2,
          name:"aftab saifi",
          Profile:"mean stack developer",
          day: "Monday 1:00am",
          reminder:'false'
      },
      {
          id: 3,
          name:"harish saifi",
          Profile:"php developer",
          day: "Sunday 10:00am",
          reminder:'true'
      },
      {
        id: 4,
        name:"arsh saifi",
        Profile:"full stack developer",
        day: "Saturday 12:00pm",
        reminder:'false'
    }
    ]
  )

  // Delete task
  const DeleteTask = (id) => {
    setData(task.filter((task) => task.id !== id))
  }

  // addtask
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1 
    const newTask = { id, ...task}
    setData([...task,newTask])
  }

  // toggle Reminder
  const toggleReminder = (id) => {
    setData(
      task.map((task) => 
      task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }
  return (
    <>
    <div className='container'>
       <div className="row">
         <div className="col-6">
          <div className='head' onAdd={onAdd}>
            <h1 style={{color:"black"}}>{title}</h1>
            <Button color={showAddTask ? "red" : "green"} text={showAddTask ? "Close" : "Add Task"} show={onAdd}/>
          </div>
          
          {
            showAddTask && <Addtask onAdd={addTask} />
          }
          {
            task.length > 0 ?( <Task task={task} onDelete={DeleteTask} onToggle={toggleReminder}/>) : (<h6>Not found Data</h6>)
          }
         </div>
       </div>
    </div>

   
    </>

  )
}

Edit.defaultProps = {
  title: "Task Tracker"
}
Edit.propTypes = {
  title: PropTypes.string,
}

export default Edit