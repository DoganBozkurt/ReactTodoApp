import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {
  const [todo, setTodo] = useState([]);
  const createTodo = (newTodo) => {
    setTodo([...todo, newTodo]);
    console.log(todo);
  }
  return (
    <div className='App'>
      <div className='main'>
        <TodoCreate oneCreateTodo={createTodo}></TodoCreate>
        <TodoList></TodoList>
      </div>
    </div>
  )
}

export default App
