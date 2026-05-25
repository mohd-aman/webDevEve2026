import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name:"todoSlice",
  initialState:{
    currentTask:"",
    todoList:["task1","task2","task3","task4"]
  },
  reducers:{
    setValue:(state,descObj)=>{
      console.log(descObj);
      state.currentTask = descObj.payload;
    },
    addTodo:(state)=>{ //impure fxn, immer js which takes care of impure func
      state.todoList.push(state.currentTask);
      state.currentTask = "";
    }
  }
})

export default todoSlice;