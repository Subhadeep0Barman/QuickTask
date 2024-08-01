import { useSelector, useDispatch } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, marksAsDoneTodo, deleteAllTodos, markAllAsDoneTodos } from "../features/todo/todoSlice";
import "../App.css";

export default function Todo() {
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    const deleteHandler = (id) => {
        dispatch(deleteTodo(id));
    };

    const markAsDoneHandler = (id) => {
        dispatch(marksAsDoneTodo(id));
    };

    const deleteAllHandler = () => {
        dispatch(deleteAllTodos());
    };

    const markAllAsDoneHandler = () => {
        dispatch(markAllAsDoneTodos());
    };

    return (
        <div className="todo-container">
            <AddForm />
            <h2>Todo List</h2>
            {todos.length === 0 ? (
                <p className="no-tasks-message">No tasks available. Add a task to get started!</p>
            ) : (
                <>
                    <ul className="todo-list">
                        {todos.map((todo) => (
                            <li key={todo.id} className="todo-item">
                                <span className={todo.isDone ? "completed" : ""}>{todo.task}</span>
                                <div className="button-container">
                                    <button className="btn btn-delete" onClick={() => deleteHandler(todo.id)}>Delete</button>
                                    {!todo.isDone && <button className="btn btn-done" onClick={() => markAsDoneHandler(todo.id)}>Mark as Done</button>}
                                </div>
                            </li>
                        ))}
                    </ul>
                    <button className="btn btn-delete-all" onClick={deleteAllHandler}>Delete All</button>
                    <button className="btn btn-mark-all-done" onClick={markAllAsDoneHandler}>Mark All as Done</button>
                </>
            )}
        </div>
    );
}
