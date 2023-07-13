import { ChangeEvent, KeyboardEvent, useState } from 'react';
import React from 'react';


export const AddItemForm = ({addItem}) => {
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [error, setError] = useState(null);
    const onClickHandler = () => {
        
        if (newTaskTitle.trim() !== ''){
            addItem(newTaskTitle.trim() );
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
    <div className="AddItemForm">
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