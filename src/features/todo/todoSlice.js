import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false,
            };
            state.todos.push(newTodo);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        marksAsDoneTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    todo.isDone = true;
                }
                return todo;
            });
        },
        deleteAllTodos: (state) => {
            state.todos = [];
        },
        markAllAsDoneTodos: (state) => {
            state.todos = state.todos.map((todo) => {
                todo.isDone = true;
                return todo;
            });
        },
    },
});

export const { addTodo, deleteTodo, marksAsDoneTodo, deleteAllTodos, markAllAsDoneTodos } = todoSlice.actions;
export default todoSlice.reducer;
