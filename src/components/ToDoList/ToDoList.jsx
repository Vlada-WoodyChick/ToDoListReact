import { ChangeEvent, KeyboardEvent, useState } from "react"
import "./style.css"



export const ToDoList = ({ name, tasks, removeTask, filter, changeFilter, addTask, changeTaskStatus }) => {

    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [error, setError] = useState(null);
    const onClickHandler = () => {
        if (newTaskTitle.trim() !== ''){
            addTask(newTaskTitle.trim());
            setNewTaskTitle('');   
        }else {
            setError('Field is required')  
        }       
    };

    const onChangeHandler = (e) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const onPressKeyHandler = (e) => {
        setError(null);
        if (e.charCode === 13) {
            addTask(newTaskTitle);
            setNewTaskTitle('');
        }



    }

    const onClickchangeFilterALL = () => changeFilter('ALL');
    const onClickchangeFilterACTIVE = () => changeFilter('ACTIVE');
    const onClickchangeFilterCOMPLETED = () => changeFilter('COMPLETED');

    const onClickchangeFilter = () => {

    }


    return (
        <div className='ToDoList'>

            <h3>{name}</h3>


            <div>

                <div>
                    <input value={newTaskTitle}
                        onChange={onChangeHandler}
                        className={error? "error" : ""}
                        onKeyPress={onPressKeyHandler}
                    />
                    <button onClick={onClickHandler}>+</button>
                    { error &&  <div className="error-message">{error}</div> }
                </div>

                <ul>
                    {tasks.map(t => {
                        const onRemoveHandler = () => removeTask(t.id);

                        const onChangeHandlerStatus = (e) => { changeTaskStatus(t.id, e.currentTarget.checked) }

                        return (
                            <li key={t.id} className={t.isDone ? "isDone": ""}>
                                <input
                                    type="checkbox"
                                    checked={t.isDone}
                                    onChange={onChangeHandlerStatus}
                                />
                                <span>{t.title}</span> <button onClick={onRemoveHandler}>x</button></li>)
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
// // // const onChangeHandler = (e) => { console.log(t.id +'  ' + e.currentTarget.checked); }
