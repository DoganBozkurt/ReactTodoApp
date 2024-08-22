import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import '../App.css'
import { FaCheck } from "react-icons/fa";

function Todo({ todo, removeT, onUpdateTodo }) {
    const { id, content } = todo; //obje dictirication
    const removeTodo = () => {
        removeT(id);
    }
    const [editTable, setEditTable] = useState(false);
    const [newTodo, setNewTodo] = useState(content)
    const updateTodo = () => {
        const request = {
            id: id,
            content: newTodo
        }
        onUpdateTodo(request);
        setEditTable(false);
    }
    return (
        <div className='todo-row'>
            <div style={{ color: 'black' }}>
                {
                    editTable ? <input type="text" name='todo-input'
                        style={{ width: '380px', height: '40px', backgroundColor: 'white', color: 'black' }}
                        value={newTodo} onChange={(e) => setNewTodo(e.target.value)} /> :
                        content
                }
            </div>
            <div>
                <IoIosRemoveCircle className='todo-icons' onClick={removeTodo} />
                {
                    editTable ? <FaCheck className='todo-icons' onClick={updateTodo} /> : <FaEdit className='todo-icons' onClick={() => setEditTable(true)} />
                }
            </div>
        </div>
    )
}

export default Todo