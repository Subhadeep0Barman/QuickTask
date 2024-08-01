import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
    const [task, setTask] = useState("");
    const [error, setError] = useState(""); // State for error message
    const dispatch = useDispatch();

    const submitHandler = (evt) => {
        evt.preventDefault();
        if (task.trim() === "") {
            setError("Please enter a task"); // Set error message if input is empty
        } else {
            dispatch(addTodo(task));
            setTask("");
            setError(""); // Clear error message on successful submission
        }
    };

    return (
        <>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter a new task"
                />
                <button type="submit">Add Task</button>
            </form>
            {error && <p className="error-message">{error}</p>} {/* Display error message */}
        </>
    );
}
