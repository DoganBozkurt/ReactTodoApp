import React from 'react'
import Todo from './Todo'

function TodoList({ todos }) {
  return (
    <div style={{ width: '100%', marginTop: '5px', justifyContent: 'space-between' }}>
      {
        todos && todos.map((todo) => (
          <div style={{ width: '100%', marginTop: '5px', justifyContent: 'space-between', border: '1px solid lightgrey' }}>
            <Todo key={todo.id} todo={todo}></Todo>
          </div>

        ))
      }
    </div>

  )
}

export default TodoList