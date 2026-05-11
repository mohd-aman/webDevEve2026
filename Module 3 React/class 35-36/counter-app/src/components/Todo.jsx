import { useState } from "react";

export default function Todo() {
	const [inputValue,setInputValue] = useState("");
  const [taskList, setTaskList] = useState([
  ]);

	const handleChange = (e)=>{
		setInputValue(e.target.value);
	}

	const handleDelete = (taskId)=>{
		const filteredTaskList = taskList.filter(({id,taskName})=>{
			return id!=taskId
		})
		setTaskList(filteredTaskList);
	}

	const handleAddTask = ()=>{
		const taskToBeAdded = {
			id:Math.floor(Math.random()*100),
			taskName:inputValue
		}
		const taskListCopy = [...taskList];
		taskListCopy.push(taskToBeAdded);
		setTaskList(taskListCopy);
		setInputValue("");
	}

  return (
    <div>
			<h1>Todo </h1>
      <div className="add-task-container">
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="task-list-container">
        {taskList.map((task) => {
          const id = task.id;
          const taskName = task.taskName;
          return (
            <div key={id} className="task-container">
              <h3>{taskName}</h3>
              <button onClick={()=>handleDelete(id)}>Delete Task</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}