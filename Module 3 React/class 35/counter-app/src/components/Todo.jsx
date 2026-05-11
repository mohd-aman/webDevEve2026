import { useState } from "react";

export default function Todo() {
  const [taskList, setTaskList] = useState([
    { id: 1, taskName: "Task1" },
    { id: 2, taskName: "Task 3" },
		{ id: 3, taskName: "Task 4" },
		{ id: 4, taskName: "Task 5" },
		{ id: 5, taskName: "Task 6" },
  ]);

	const handleDelete = (taskId)=>{
		const filteredTaskList = taskList.filter(({id,taskName})=>{
			return id!=taskId
		})
		setTaskList(filteredTaskList);
	}

  return (
    <div>
      <div className="add-task-container">
        <input type="text" />
        <button>Add Task</button>
      </div>
      <div className="task-list-container">
        {taskList.map((task) => {
          const id = task.id;
          const taskName = task.taskName;
          return (
            <div className="task-container">
              <h3>{taskName}</h3>
              <button onClick={()=>handleDelete(id)}>Delete Task</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}