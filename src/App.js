import './App.css';
import Button from './components/Button';
import Form from './components/Form';
import { useState, useEffect } from 'react'
import TodoList from './components/TodoList';

function App() {
  const [state, setState] = useState(false)
  const [inputTask, setInputTask] = useState('')
  const [inputTime, setInputTime] = useState('')
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() =>{
    
    saveLocalTodos()
  }, [todos])

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]))
    }
    else {
      let localTodos = localStorage.getItem("todos")
      setTodos(JSON.parse(localTodos))
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Task Tracker</h1>
      </header>
      <Button state={state} setState={setState}/>
      <Form 
      state={state} 
      setState={setState}
      inputTask={inputTask}
      setInputTask={setInputTask}
      inputTime={inputTime}
      setInputTime={setInputTime}
      todos={todos}
      setTodos={setTodos}
      />
      <TodoList
      todos={todos}
      setTodos={setTodos} />
      
    </div>
  );
}

export default App;
