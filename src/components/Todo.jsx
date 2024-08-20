import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import '../App.css'

function Todo({ todo, removeT }) {
    const { id, content } = todo; //obje dictirication
    const removeTodo = () => {
        removeT(id);
    }
    return (
        <div className='todo-row'>
            <div style={{ color: 'black' }}>
                {content}
            </div>
            <div>
                <IoIosRemoveCircle className='todo-icons' onClick={removeTodo} />
                <FaEdit className='todo-icons' />
            </div>
        </div>
    )
}

export default Todo