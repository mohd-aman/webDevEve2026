// Goal: Build a basic To-Do list using objects and arrays (no UI).
// Each To-Do item should be an object:

// {
//   task: "Buy groceries",
//   isCompleted: false
// }
// Features to Implement:

// addTask(task): Adds a new task.
// removeTask(task): Removes a task.
// markComplete(task): Marks a task as completed.
// listTasks(): Lists all tasks, showing completed ones differently.

function createTodoList() {
  let list = [];
  function addTask(taskName) {
    const oneEntry = {
      task: taskName,
      isCompleted: false,
    };
    list.push(oneEntry);
  }

  function listTasks() {
    return list;
  }

  function markComplete(taskName) {
    for (let i = 0; i < list.length; i++) {
      const oneEntry = list[i];
      if (oneEntry.task === taskName) {
        oneEntry.isCompleted = true;
        return "updated task status";
      }
    }
    return "Not found";
  }

  function removeTask(taskName) {
    let index = -1;
    for (let i = 0; i < list.length; i++) {
      const oneEntry = list[i];
      if (oneEntry.task === taskName) {
        index = i;
      }
    }
    if (index === -1) {
      return "Not found";
    } else {
      //Note: we won't be using splice much;
      list.splice(index, 1);
    }
  }
  return {
    listTasks,
    removeTask,
    addTask,
    markComplete,
  };
}

const todo = createTodoList();
todo.addTask("Buy groceries");
todo.addTask("Do laundry");
todo.addTask("Clean room");
console.log(todo.listTasks());
console.log("-----");
console.log(todo.markComplete("Buy groceries"));
console.log(todo.markComplete("Web Dev completed"));
console.log(todo.listTasks());
console.log("-----");
todo.removeTask("Do laundry");
console.log(todo.listTasks());