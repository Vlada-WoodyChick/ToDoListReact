import { ChangeEvent, KeyboardEvent, useState } from "react"
import "./style.css"



export const ToDoList = ({ name, tasks, removeTask, filter, changeFilter, addTask, changeTaskStatus, id, removeToDoList }) => {

    //const [newTaskTitle, setNewTaskTitle] = useState('');
    // const [error, setError] = useState(null);
    // const onClickHandler = () => {
    //     if (newTaskTitle.trim() !== ''){
    //         addTask(newTaskTitle.trim(), id);
    //         setNewTaskTitle('');   
    //     }else {
    //         setError('Field is required')  
    //     }       
    // };

    // const onChangeHandler = (e) => {
    //     setNewTaskTitle(e.currentTarget.value)
    // }
    // const onPressKeyHandler = (e) => {
    //     setError(null);
    //     if (e.charCode === 13) {
    //         addTask(newTaskTitle, id);
    //         setNewTaskTitle('');
    //     }



    // }

    const onClickchangeFilterALL = () => changeFilter('ALL', id);
    const onClickchangeFilterACTIVE = () => changeFilter('ACTIVE', id);
    const onClickchangeFilterCOMPLETED = () => changeFilter('COMPLETED', id);

    const onClickchangeFilter = () => {

    }
const removeToDoListButton =() => {
    removeToDoList(id);
}

    return (
        <div className='ToDoList'>

            <h3>{name}
            <button onClick={removeToDoListButton}>-</button>
            </h3>


            <div>
            <AddItemForm id={id} addTask={addTask}
            />
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

                        const onChangeHandlerStatus = (e) => { changeTaskStatus(t.id, e.currentTarget.checked, id) }

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


const AddItemForm = ({addTask, id}) => {
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [error, setError] = useState(null);
    const onClickHandler = () => {
        if (newTaskTitle.trim() !== ''){
            addTask(newTaskTitle.trim(), id);
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
            addTask(newTaskTitle, id);
            setNewTaskTitle('');
        }
    }

    return(
    <div>
    <input value={newTaskTitle}
        onChange={onChangeHandler}
        className={error? "error" : ""}
        onKeyPress={onPressKeyHandler}
    />
    <button onClick={onClickHandler}>+</button>
    { error &&  <div className="error-message">{error}</div> }
</div>
    )
}




// // // const onChangeHandler = (e) => { console.log(t.id +'  ' + e.currentTarget.checked); }
