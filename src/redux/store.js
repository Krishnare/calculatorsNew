import { configureStore  } from '@reduxjs/toolkit';
import colorChangeSlice from './counterSlice'
import addTodoListsSlice from './todoListsSlice';

export const store = configureStore({
    reducer:{
        colorChange: colorChangeSlice,
        todoList:addTodoListsSlice
    }
})

