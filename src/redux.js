import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        tasks: [
            { id: 1, text: "Faire les courses", done: false },
            { id: 2, text: "Ménage!", done: true }
        ],
        authed: true 
    },
    reducers: {
        addTask: (state, action) => {
            // { type: "todo/addTask", payload: "Aller faire les courses" }
            const newTask = {
                id: Date.now(),
                done: false,
                text: action.payload,
            }

            state.push(newTask);
        },
        toggleTask: (state, action) => {
            // { type: "todo/toggleTask", payload: 1 }
            const task = state.find(t => t.id === action.payload);
            task.done = !task.done;
        },
        deleteTask: (state, action) => {
            // { type: "todo/deleteTask", payload = 1 }
            state = state.filter(t => t.id !== action.payload);
        }
    }
});


export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
    }
})