import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {
        todoVal: "",
        status: false
    }
]


  export const addTodoListsSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
      addLists: (state, action) =>{
        return action.payload
      }
    },
  })


  export const { addLists } = addTodoListsSlice.actions;

  export default addTodoListsSlice.reducer;