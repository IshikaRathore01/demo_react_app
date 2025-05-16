
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './TodoList.css'



const TodoItem = ({ todo }) => {
    return (
        <div className="todo-container">
            <li className="todo-item">
                <span className="todo-text">{todo}</span>
            </li>
        </div>
    );
};



function TodoList() {
    const [todos, setTodos] = useState([]);
const { id } = useParams();
useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        const parsedTodos = JSON.parse(storedTodos);
        const pendingTodos = parsedTodos.filter(todo => !todo.completed)
        if (id) {
            const filteredTodo = pendingTodos.find(todo => todo.id === id);
            console.log("filtered: ",filteredTodo)
            setTodos(filteredTodo ? [filteredTodo] : []);
        } else {
            setTodos(pendingTodos);
        }
    }
}, [id]);
return (
   
    <div className='todo-wrapper'>
        <h2>Task To Complete!!</h2>
        <ul className='todolist'>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo.task} />
            ))}
        </ul>
    </div>
);
}

export default TodoList;