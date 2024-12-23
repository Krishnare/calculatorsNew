import { createSlice } from "@reduxjs/toolkit";


const initialState = ""


  export const colorChangeSlice = createSlice({
    name: 'colorChange',
    initialState,
    reducers: {
      colorChange: (state, action) =>{
        return action.payload
      }
    },
  })


  export const { colorChange } = colorChangeSlice.actions;

  export default colorChangeSlice.reducer;