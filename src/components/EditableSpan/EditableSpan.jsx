import { ChangeEvent, KeyboardEvent, useState } from "react";
import React from "react";

export const EditableSpan = ({ title, onChange }) => {
    const [editMode, setEditMode] = useState(false);
     const [editTitle, setTitle] = useState('');
     
    const activateEditMode = () => {
        setEditMode(true);
        setTitle(title);
    }
    const activateViewMode = () => {
    setEditMode(false);
    onChange(editTitle);
}

    const onChangeTitleHandler = (e) => {
      
setTitle(e.currentTarget.value);

}



    return ( 
      editMode?  
 <input value={editTitle}  onBlur={activateViewMode} autoFocus onChange={onChangeTitleHandler} /> :
<span onDoubleClick={activateEditMode} >{title}</span>
              
        
      ); 

    

}
//onChange={onChangeTitleHandler}

       
