import React, { useState } from 'react';
import {v4} from 'uuid'
import { ToDoList } from './components/ToDoList/ToDoList'

// const Counter = () => {
//   let arr = useState(5);
//   let data = arr[0];
//   let setData = arr[1];
//   return (
//     <div onClick = {() => { setData(data + 1) } }>{data}</div>

//   );
//}

function App() {

  // let initTasks = [
  //   {
  //     id: 1,
  //     title: "CSS",
  //     isDone: true,
  //   },

  //   {
  //     id: 2,
  //     title: "JS",
  //     isDone: true,
  //   },

  //   {
  //     id: 3,
  //     title: "React",
  //     isDone: false,
  //   },

  //   {
  //     id: 4,
  //     title: "Redux",
  //     isDone: false,
  //   },

  // ];


  // let tasks2 = [
  //   {id: 1, 
  //   title: "Hello, world",
  //   isDone: true,
  //   },

  //   {id: 2, 
  //     title: "I\'m happy",
  //     isDone: false,
  //     },

  //     {id: 3, 
  //       title: "Yo",
  //       isDone: false,
  //       },

  //     ];

  // let arr = useState(initTasks);
  // let tasks = arr[0];
  // let setTasks = arr[1];

  // const [tasks, setTasks] = useState(initTasks);
  const [tasks, setTasks] = useState([
    {
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
    },

  ]);
  console.log(tasks);
  // <div>
  //                   <button>ALL</button>
  //                   <button>ACTIVE</button>
  //                   <button>COMPLETED</button>
  //               </div>

  const [filter, setFilter] = useState('ALL');

  let tasksForToDoList = tasks;

  if (filter === 'COMPLETED') {
    tasksForToDoList = tasks.filter(t => t.isDone === true);
    
  }
  if (filter === 'ACTIVE') {
    tasksForToDoList = tasks.filter(t => t.isDone === false);
  }

  const removeTask = (id) => {
    let filteredTasks = tasks.filter(t => t.id !== id);
    //console.log(resultTask);
    // alert(resultTask); 
    setTasks(filteredTasks);
  }

  const changeFilter = (value) => {
    setFilter(value)
  };
  
  const addTask =(title) => {
const newTask = {id: v4(), title: title, isDone: false};
const newTasks =[newTask, ...tasks];
setTasks(newTasks);

  }

  return (

    <div className='app'>
      <ToDoList name={'What to learn'}
        tasks={tasksForToDoList}
        removeTask={removeTask} 
      changeFilter = {changeFilter}
      addTask = {addTask} />
      
      {/* <ToDoList name={'Movies'} tasks={tasks2}/> */}
      {/* <ToDoList name={'Songs'} tasks={tasks2}/> */}

    </div>





  );

};

export default App;