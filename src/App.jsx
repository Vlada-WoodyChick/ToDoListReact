import { ToDoList } from './components/ToDoList/ToDoList'



function App() {

  let tasks1 = [
{id: 1, 
title: "CSS",
isDone: true,
},

{id: 2, 
  title: "JS",
  isDone: true,
  },

  {id: 3, 
    title: "React",
    isDone: false,
    },

  ];

  let tasks2 = [
    {id: 1, 
    title: "Terminator",
    isDone: true,
    },
    
    {id: 2, 
      title: "XXX",
      isDone: false,
      },
    
      {id: 3, 
        title: "Gentleman of fortune",
        isDone: true,
        },
    
      ];
        
    
  return (

    <div className='App'>
      <ToDoList name={'What to learn'} tasks={tasks1}/>
      <ToDoList name={'Movies'} tasks={tasks2}/>
      {/* <ToDoList ={'Songs'}/> */}
         
    </div>





  );

};

export default App;