import React from 'react'
import Todo from './Todo'

function TodoList() {
  return (
    <div style={{width: '100%', marginTop: '50px',justifyContent: 'space-between',border: '1px solid lightgrey'}}>
        <Todo></Todo>
    </div>
  )
}

export default TodoList