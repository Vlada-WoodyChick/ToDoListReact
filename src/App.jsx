import { ToDoList } from './components/ToDoList/ToDoList'



function App({}) {
  return (
    <div className='APP'>
      <ToDoList title={'What to learn'}/>
      <ToDoList title={'Movies'}/>
      <ToDoList title={'Songs'}/>
      <input type="checkbox" />
      <input type="date" />
      <input placeholder="вот как тут" />    
    </div>





  );

};

export default App;