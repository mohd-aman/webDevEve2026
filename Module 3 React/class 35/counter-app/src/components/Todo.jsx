export default function Todo(){
    return <div>
        <div className="add-task-container">
            <input type="text" />
            <button>Add Task</button>
        </div>
        <div className="task-list-container">
            <h3>Task 1</h3>
            <button>Delete Task</button>
        </div>
    </div>
}