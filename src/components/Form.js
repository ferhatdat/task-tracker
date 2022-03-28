import React from 'react'
import { useState } from 'react'

const Form = ({state, inputTask, setInputTask, inputTime, setInputTime, todos, setTodos}) => {
  const [noInput, setNoInput] = useState("")
  
  const inputTaskHandler = (e) => {
    setInputTask(e.target.value)
 
  }
  const inputTimeHandler = (e) => {
    setInputTime(e.target.value)
  }

  const submitTodoHandler = (e) => {
    e.preventDefault()
    inputTask === "" ? setNoInput("Please enter a task") : (setTodos([...todos, {text: inputTask, time: inputTime, completed: false, id: Math.random()}]))
    setInputTask('')
    setInputTime('')
    setTimeout(() => {
      setNoInput("")
    }, 2000);
   
    
  } 
  return (
    <form>
        {state ? null : 
        (
        <>
        <div className='todo-task'>
            <label className='todo-label' htmlFor="input1">Task</label>
            <input  className='todo-input' value={inputTask} type="text" placeholder='AddTask' onChange={inputTaskHandler} id='input1'/>
            <span className='noInput'>{noInput}</span>
        </div>
        <div className='todo-task'>
        <label htmlFor="input2">Day & Time</label>
        <input className='todo-input' value={inputTime} type="text" placeholder='Add Day & Time' onChange={inputTimeHandler} id='input2'/>
        </div>
        <button className='submit-button' type='submit' onClick={submitTodoHandler}>Save Task</button>
        </>
        )} 
    </form>
  )
}
export default Form;