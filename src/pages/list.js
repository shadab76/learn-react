import React, { useState } from 'react'
import "./list.scss"

const List = () => {

  const [active, setActive] = useState("Mohd shadab saifi");
  const [name, setName] = useState();

  // const handle = () =>{
  //   setValue(value)
  // }

  const handlechange = () => {
    setActive("Mohd aadil Saifi");
  }

  return (


    <div className='container'>
      <h1 style={{ color: "black", marginBottom: "30px" }}>{active}</h1>
      <button className='btn btn-danger' onClick={handlechange}>click me</button>


      <form>
        <p>{name}</p>
        <div>
          <label htmlFor="name" className='d-block'>Name</label>
        </div>
        <input type="text" name='name' id='name' value={name} onChange={(e) => setName(e.target.value)} />

        <textarea name="message" style={{ width: "200px", height: "300px" }}>
          The cat was playing in the garden.
        </textarea>
      </form>
    </div>
  )
}

export default List;