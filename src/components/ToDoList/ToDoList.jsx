import {ChangeEvent, KeyboardEvent,  useState } from "react"
import "./style.css"



export const ToDoList = ({ name, tasks, removeTask, changeFilter, addTask }) => {

    const [newTaskTitle, setNewTaskTitle] = useState('');

    const onClickHandler = () => {
        if(newTaskTitle !== '')
        addTask(newTaskTitle);
        setNewTaskTitle('');
    }

    const onChangeHandler = (e) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const onPressKeyHandler = (e) => {
        if(e.charCode === 13 && newTaskTitle !== '') {
            addTask(newTaskTitle);
            setNewTaskTitle('');
        }
    }

  const   onClickchangeFilterALL = () => changeFilter('ALL');
  const   onClickchangeFilterACTIVE = () => changeFilter('ACTIVE');
  const   onClickchangeFilterCOMPLETED = () => changeFilter('COMPLETED');

const   onClickchangeFilter =() => {

}


    return (
        <div className='ToDoList'>

            <h3>{name}</h3>


            <div>

                <div>
                    <input value={newTaskTitle}
                        onChange={onChangeHandler}
                        
                        onKeyPress={onPressKeyHandler}
                        />


                         
                    <button onClick={onClickHandler}>+</button>
                </div>

                <ul>
                    {tasks.map( t => {
                        const onRemoveHandler = () => removeTask(t.id)
                    return ( 
                    <li key={t.id} ><input type="checkbox" checked={t.isDone} /><span>{t.title}</span> <button onClick={ onRemoveHandler }>x</button></li>)
                    } )
                    
                }
                </ul>

                <div>
                    <button onClick= {onClickchangeFilterALL}>ALL</button>
                    <button onClick= { onClickchangeFilterACTIVE }>ACTIVE</button>
                    <button onClick={ onClickchangeFilterCOMPLETED}>COMPLETED</button>
                </div>

            </div>


        </div>


    )
} 
