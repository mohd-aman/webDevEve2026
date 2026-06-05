import React from "react";

class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos:[],
      newTodo:''
    }
    console.log("Constructor: Setting up the initial state")
  }

  componentDidMount(){
    console.log("Component Did Mount : ")
    // Simulate fetching data from an API
    setTimeout(() => {
      this.setState({
        todos: ['Learn React', 'Read a book']
      });
    }, 2000);
  }

  componentDidUpdate(prevProps,prevState){
    console.log("Component Did Update : Checking if new todo was added");
    if(prevState.todos !== this.state.todos){
      console.log("Updated todos : ", this.state.todos);
    }
  }

  componentWillUnmount(){
    console.log("Component will unmount :Clean up the resources")
  }

  handleOnChange = (e)=>{
    this.setState({newTodo:e.target.value})
  }

  handleAdd = ()=>{
    this.setState({
      todos:[...this.state.todos,this.state.newTodo],
      newTodo:''
    })
  }

  render(){
    console.log("Render:Rendering the todo list")
    return(
      <div>
        <h1>My To-do List</h1>
        <input type="text" value={this.state.newTodo} onChange={this.handleOnChange} />
        <button onClick={this.handleAdd}>Add To-Do</button>
        <ul>
          {this.state.todos.map((todo,index)=>(
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default TodoList;