import { useState } from "react"
import "./style.css"



export const ToDoList = ({ name, tasks, removeTask, changeFilter, addTask }) => {

    const [newTaskTitle, setNewTaskTitle] = useState('');

    return (
        <div className='ToDoList'>

            <h3>{name}</h3>


            <div>

                <div>
                    <input value={newTaskTitle}
                        onChange={(e) => {

                            setNewTaskTitle(e.currentTarget.value)
                        }} />
                    <button onClick={(e) => {
                        addTask(newTaskTitle)
                        setNewTaskTitle('');
                    }}>+</button>
                </div>

                <ul>
                    {tasks.map(t => <li key={t.id} ><input type="checkbox" checked={t.isDone} /><span>{t.title}</span> <button onClick={() => { removeTask(t.id) }}>x</button></li>
                    )
                    }
                </ul>

                <div>
                    <button onClick={(e) => { changeFilter('ALL') }}>ALL</button>
                    <button onClick={(e) => { changeFilter('ACTIVE') }}>ACTIVE</button>
                    <button onClick={(e) => { changeFilter('COMPLETED') }}>COMPLETED</button>
                </div>

            </div>


        </div>


    )
} 
