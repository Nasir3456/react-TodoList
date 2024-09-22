"use client"
import React from 'react'
import { useState } from "react";


const page = () => {
  const [input, setinput] = useState("")
  const [task, settask] = useState([])

  const addTask = () =>{
    let err = [...task];
    err.push(input)
    settask(err)
    setinput("")
  }

  const handleDelete = (index) => {
    let err = [...task];
    err.splice(index, 1);
    settask(err);
  }
  return (
    <>
      <h1>TO-DO list with React.js</h1>
      <div className='input-task'>
        <input onChange={(e)=>{
          setinput(e.target.value)
        }} type='text' placeholder='Add a task' value={input} />
        <button onClick={()=>{
          addTask()
        }} className='addBtn'>Add</button>
      </div>

      <div className='container'>
        <ul>
          {
            task.length > 0 && task.map((element,index)=>{
              return <li key={index}>
              <p>{element}</p>
              <button onClick={()=>{
                handleDelete(index);
              }} className='deleteBtn'>Delete</button>
            </li>  
            })
          }

                  
        </ul>
      </div>
    </>
  )
}



export default page