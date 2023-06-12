// import 

export const ToDoList = ({name, tasks}) => {
    return (
        <div>

            <h3>{name}</h3>


            <div>

                <div>
                    <input />
                    <button>+</button>
                </div>

                <ul>
                    <li><input  type="checkbox" checked={tasks[0].isDone} /><span>{tasks[0].title}</span></li>
                    <li><input  type="checkbox" checked={tasks[1].isDone} /><span>{tasks[1].title}</span></li>
                    <li><input  type="checkbox" checked={tasks[2].isDone} /><span>{tasks[2].title}</span></li>
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
