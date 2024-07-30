import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import '../App.css'

function Todo({todo}) { 
    const {id,content}  = todo; //obje dictirication
    return (
        <div className='todo-row'>
            <div style={{ color: 'black' }}>
                {content}
            </div>
            <div>
                <IoIosRemoveCircle  className='todo-icons' />
                <FaEdit  className='todo-icons' />
            </div>
        </div>
    )
}

export default Todo