import React, { useState } from 'react'
import '../App.css'
function TodoCreate({ oneCreateTodo }) {
  const [newTodo, setNewTodo] = useState('')

  const inputValueClear = ()=> {
    setNewTodo('');
  }
  const createTodo = () => {
    if (!newTodo) return;
    const request = {
      id: Math.floor(Math.random() * 999999),
      content: newTodo
    }
    oneCreateTodo(request);
    inputValueClear();
  }
  return (
    <div className='todo-create '>
      <input className='todo-input'
        value={newTodo} onChange={(e) => setNewTodo(e.target.value)}
        type="text" placeholder='Todo gir' />
      <button onClick={createTodo} className='todo-create-button'>Todo Olustur</button>
    </div>
  )
}

export default TodoCreate