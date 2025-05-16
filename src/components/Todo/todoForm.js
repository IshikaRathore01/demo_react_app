import React from 'react'
import {useState, useRef} from 'react'
import './TodoForm.css'



const TodoForm = ({ addTodo }) => {
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = inputRef.current.value;
        if (task) {
            addTodo(task);
            inputRef.current.value = ''; // Clear the input field
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                ref={inputRef} // Attach the ref to the input field
                placeholder="Add a new todo"
            />
            <button className = "enter-todo" type="submit">Add Todo</button>
        </form>
    );
};

export default TodoForm