import { ChangeEvent, KeyboardEvent, useState } from "react";
import { AddItemForm } from "../AddItemForm/AddItemForm";
import { EditableSpan } from "../EditableSpan/EditableSpan";
import "./style.css";



export const ToDoList = ({ name, tasks, removeTask, filter, changeFilter, addTask, changeTaskStatus, id, removeToDoList, changeTaskTitle, changeToDoListTitle}) => {
    const onClickchangeFilterALL = () => changeFilter('ALL', id);
    const onClickchangeFilterACTIVE = () => changeFilter('ACTIVE', id);
    const onClickchangeFilterCOMPLETED = () => changeFilter('COMPLETED', id);

    const onClickchangeFilter = () => {

    }
const removeToDoListButton =() => {
    removeToDoList(id);
}

const addTaskToDoList = (title) =>{
    
    addTask(title, id)
};

const onChangeToDoListTitleHandler = (newValue) => {
    changeToDoListTitle(newValue, id);

}


    return (
        <div className='ToDoList'>

            <h3><EditableSpan title={name} onChange={ onChangeToDoListTitleHandler }  />
            <button onClick={removeToDoListButton}>-</button>
            </h3>


            <div>
                
            <AddItemForm  addItem={addTaskToDoList}/>
                {/* <div>
                    <input value={newTaskTitle}
                        onChange={onChangeHandler}
                        className={error? "error" : ""}
                        onKeyPress={onPressKeyHandler}
                    />
                    <button onClick={onClickHandler}>+</button>
                    { error &&  <div className="error-message">{error}</div> }
                </div> */}

                <ul>
                    {tasks.map(t => {
                        const onRemoveHandler = () => removeTask(t.id, id);

                        const onChangeHandlerStatus = (e) => { 
                            changeTaskStatus(t.id, e.currentTarget.checked, id) }

                        const onChangeTitleHandler = (newValue) => {
                            changeTaskTitle(t.id, newValue, id);

                        }

                        return (
                            <li key={t.id} className={t.isDone ? "isDone": ""}>
                                <input
                                    type="checkbox"
                                    checked={t.isDone}
                                    onChange={onChangeHandlerStatus}
                                />
                                <EditableSpan title={t.title} onChange={ onChangeTitleHandler }  />
                                {/* <span>{t.title}</span>  */}
                        
                                <button onClick={onRemoveHandler}>x</button></li>)
                    })

                    }        
                            </ul>

                <div>
                    <button className={filter === 'ALL' ? "active-filter" : ""} onClick={onClickchangeFilterALL}>ALL</button>
                    <button className={filter === 'COMPLETED' ? "active-filter" : ""} onClick={onClickchangeFilterCOMPLETED}>COMPLETED</button>
                    <button className={filter === 'ACTIVE' ? "active-filter" : ""} onClick={onClickchangeFilterACTIVE}>ACTIVE</button>
                </div>

            </div>


        </div>


    )
}





