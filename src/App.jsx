import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {
  const [todo, setTodo] = useState([]);

  const createTodo = (newTodo) => {
    setTodo([...todo, newTodo]);
  }
  const removeTodo = (todoId) => {
    setTodo([...todo.filter((t) => t.id !== todoId)]);
  }

  return (
    <div className='App'>
      <div className='main'>
        <TodoCreate oneCreateTodo={createTodo} />
        <TodoList todos={todo} onRemoveTodo={removeTodo} />
      </div>
    </div>
  )
}

export default App
