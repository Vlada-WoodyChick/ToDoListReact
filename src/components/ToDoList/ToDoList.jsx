import "./style.css"

export const ToDoList = ({ name, tasks }) => {
    return (
        <div className= 'ToDoList'>

            <h3>{name}</h3>


            <div>

                <div>
                    <input />
                    <button>+</button>
                </div>
                
                <ul>
                {tasks.map(t => <li><input type="checkbox" checked={t.isDone} /><span>{t.title}</span> <button onClick={ () => {alert (t.id);} }>x</button></li>               
                )
                } 
                </ul>

                <div>
                    <button>ALL</button>
                    <button>ACTIVE</button>
                    <button>COMPLETED</button>
                </div>

            </div>


        </div>


    )
} 
