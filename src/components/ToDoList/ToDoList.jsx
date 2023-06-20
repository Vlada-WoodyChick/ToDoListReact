import "./style.css"

export const ToDoList = ({ name, tasks, removeTask, changeFilter, }) => {
    return (
        <div className= 'ToDoList'>

            <h3>{name}</h3>


            <div>

                <div>
                    <input />
                    <button>+</button>
                </div>
                
                <ul>
                {tasks.map(t => <li><input type="checkbox" checked={t.isDone} /><span>{t.title}</span> <button onClick={ () => {removeTask(t.id)} }>x</button></li>               
                )
                } 
                </ul>

                <div>
                    <button onClick={ ()=> {changeFilter('ALL')} }>ALL</button>
                    <button onClick={ ()=>{changeFilter('ACTIVE')} }>ACTIVE</button>
                    <button onClick={ ()=>{changeFilter('COMPLETED')} }>COMPLETED</button>
                </div>

            </div>


        </div>


    )
} 
