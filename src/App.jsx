import React, { useState } from 'react';
import { v4 } from 'uuid'
import { ToDoList } from './components/ToDoList/ToDoList'
import { AddItemForm } from "./components/AddItemForm/AddItemForm"
import { EditableSpan } from ".//components/EditableSpan/EditableSpan"
import "./App.css";

// const Counter = () => {
//   let arr = useState(5);
//   let data = arr[0];
//   let setData = arr[1];
//   return (
//     <div onClick = {() => { setData(data + 1) } }>{data}</div>

//   );
//}

function App() {

  const toDoListID1 = v4();
  const toDoListID2 = v4();

  const [tasksOBJ, setTasks] = useState({
    [toDoListID1]: [{
      id: v4(),
      title: "CSS",
      isDone: true,
    },

    {
      id: v4(),
      title: "JS",
      isDone: true,
    },

    {
      id: v4(),
      title: "React",
      isDone: false,
    },

    {
      id: v4(),
      title: "Redux",
      isDone: false,
    }
    ],

    [toDoListID2]: [
      {
        id: v4(),
        title: "Book",
        isDone: false,
      },

      {
        id: v4(),
        title: "Milk",
        isDone: true,
      },
    ]
  }
  )

  const removeTask = (id, toDoListID) => {
    const tasks = tasksOBJ[toDoListID];
    let filteredTasks = tasks.filter(t => t.id !== id);
    tasksOBJ[toDoListID] = filteredTasks;
    //console.log(resultTask);
    // alert(resultTask); 
    setTasks({ ...tasksOBJ });
  }


  const addTask = (title, toDoListID) => {

    const newTask = { id: v4(), title: title, isDone: false };
    const tasks = tasksOBJ[toDoListID];
    const newTasks = [newTask, ...tasks];
    tasksOBJ[toDoListID] = newTasks
    setTasks({ ...tasksOBJ });
  }

  const changeStatus = (taskID, isDone, toDoListID) => {
    const tasks = tasksOBJ[toDoListID];
    const task = tasks.find(t => t.id === taskID);
    if (task) {
      task.isDone = isDone;
    }
    setTasks({ ...tasksOBJ });
  }


  const [toDoLists, setToDoLists] = useState([
    { id: toDoListID1, title: 'What to learn', filter: 'ALL' },
    { id: toDoListID2, title: 'What to bye', filter: 'ALL' }
  ]);



  const changeFilter = (value, toDoListID) => {
    let toDoList = toDoLists.find(tl => tl.id === toDoListID);
    if (toDoList) {
      toDoList.filter = value;
      setToDoLists([...toDoLists])
    }
  };


  const removeToDoList = (toDoListID) => {

    let filteredToDoLists = toDoLists.filter(tl => tl.id !== toDoListID)
    setToDoLists(filteredToDoLists);
    delete tasksOBJ[toDoListID];
    setTasks({ ...tasksOBJ });


  }


  const addToDoList = (title) => {
    const toDoList = {
      id: v4(),
      title: title,
      filter: 'ALL',
    }
    setToDoLists([toDoList, ...toDoLists]);
    setTasks({ [toDoList.id]: [], ...tasksOBJ })

  }

  const changeTaskTitle = (taskID, newValue, toDoListID) => {
    const tasks = tasksOBJ[toDoListID];
    const task = tasks.find(t => t.id === taskID);
    if (task) task.title = newValue;
    setTasks({ ...tasksOBJ });
  }
  
  const changeToDoListTitle = (newName, toDoListID) => {
    const toDoList = toDoLists.find(t => t.id === toDoListID);
    if(toDoList) toDoList.title = newName;
    setToDoLists([...toDoLists]);
  } 


  return (
    <div>
      <div>
        <AddItemForm
          addItem={addToDoList} />
      </div>
      {
        toDoLists.map(tl => {

          let tasksForToDoList = tasksOBJ[tl.id];

          if (tl.filter === 'COMPLETED') {
            tasksForToDoList = tasksForToDoList.filter(t => t.isDone === true);

          }
          if (tl.filter === 'ACTIVE') {
            tasksForToDoList = tasksForToDoList.filter(t => t.isDone === false);
          }
          return (
            <div className='app'>
              <ToDoList
                key={tl.id}
                id={tl.id}
                name={tl.title}
                tasks={tasksForToDoList}
                removeTask={removeTask}
                filter={tl.filter}
                changeFilter={changeFilter}
                addTask={addTask}
                changeTaskStatus={changeStatus}
                removeToDoList={removeToDoList}
                changeTaskTitle={changeTaskTitle}
                changeToDoListTitle={changeToDoListTitle}
              />
            </div>
          )
        }
        )

      }
    </div>


  );

};

export default App;