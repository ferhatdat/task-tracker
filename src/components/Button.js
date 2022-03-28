import React from 'react'


const Button = ({state, setState}) => {
  
  const taskBarHandler = () => {
      setState(!state)
  }
  return (
    <div onClick={taskBarHandler} className='myButton'>
        { state ? <button className='todo-button-open'>Show Add Task Bar</button> : <button className='todo-button-close'>Close Add Task Bar</button> }
    </div>
  )
}

export default Button