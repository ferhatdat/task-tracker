import React from 'react'

const Todo = ({ time, text, todos, setTodos, todo }) => {
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return { ...item, completed: !item.completed }
            }
            return item
        }))
    }
    return (
        <div className="todo-base">
            <div className={`todo ${todo.completed ? "completed-margin" : ""}`}>
                <li className={`todo-item ${todo.completed ? "completed" : ""}`} onClick={completeHandler}>
                    <p className='todo-task'>{text}</p>
                    <p className='todo-time'>{time}</p>
                </li>
                <button className='trash-btn' onClick={deleteHandler}><i class="fa-solid fa-xmark"></i></button>
            </div>
        </div>

    )
}

export default Todo