import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {
  const [todo, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todo, newTodo]);
  }
  const removeTodo = (todoId) => {
    setTodos([...todo.filter((t) => t.id !== todoId)]);
  }
  const updateTodo = (newTodo) => {
    const updatedTodo = todo.map((e) => {
      if (e.id !== newTodo.id) {
        return todo;
      }
      return newTodo;
    })
    setTodos([...updatedTodo])
  }
  return (
    <div className='App'>
      <div className='main'>
        <TodoCreate oneCreateTodo={createTodo} />
        <TodoList todos={todo} onRemoveTodo={removeTodo} upTodo={updateTodo} />
      </div>
    </div>
  )
}

export default App
