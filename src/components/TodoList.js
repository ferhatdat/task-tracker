import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, setTodos }) => {
    return (
        <div>
            <ul className='todo-list'>
            {todos.length ? (<div className='todo-container'>
                
                    {todos.map(todo => (
                        <Todo
                            text={todo.text}
                            time={todo.time}
                            todos={todos}
                            setTodos={setTodos}
                            todo={todo}
                        />
                    ))}
                
            </div>) : <p className='no-tasks'>No Tasks to Show</p>}
            </ul>
        </div>

    )
}

export default TodoList