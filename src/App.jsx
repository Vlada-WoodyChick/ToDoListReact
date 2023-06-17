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

    {id: 4, 
      title: "Redux",
      isDone: false,
      },

  ];

  let tasks2 = [
    {id: 1, 
    title: "Hello, world",
    isDone: true,
    },
    
    {id: 2, 
      title: "I'm happy",
      isDone: false,
      },
    
      // {id: 3, 
      //   title: "Yo",
      //   isDone: false,
      //   },
    
      ];
        
    
  return (

    <div className='app'>
      <ToDoList name={'What to learn'} tasks={tasks1}/>
      {/* <ToDoList name={'Movies'} tasks={tasks2}/> */}
      {/* <ToDoList name={'Songs'} tasks={tasks2}/> */}
         
    </div>





  );

};

export default App;