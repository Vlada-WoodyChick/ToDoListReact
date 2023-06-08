// import 

export const ToDoList = ({title}) => {
    return (
        <div>

            <h3>{title}</h3>


            <div>

                <div>
                    <input />
                    <button>+</button>
                </div>

                <ul>
                    <li><input type="checkbox" checked={true} /><span>HTML&CSS</span></li>
                    <li><input type="checkbox" checked={true} /><span>JS</span></li>
                    <li><input type="checkbox" checked={false} /><span>React</span></li>
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
