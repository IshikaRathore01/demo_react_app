import React, { useState,useEffect } from 'react';
import TodoForm from './todoForm';
import {v4 as uuidv4} from "uuid";
import EditTodoForm from './EditTodoForm';
import Todo from './Todo'; 
import './todoWrapper.css';


function TodoWrapper() {
    const [todos, setTodos] = useState([]);

    console.log("todos", todos)

    
  // Load todos from local storage when the component mounts
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);



    // Add Todo
    const addTodo = (todo) => {
        setTodos([
            ...todos, {id:uuidv4(), task:todo, completed:false, isEditing:false},
        ]);
    }

    // Delete Todo
    const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

    // Toggle Complete Todo
    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo)=> todo.id === id ? { ...todo, completed:!todo.completed} : todo)
        )
    }

    // Edit Todo
    const editTodo = (id) => {
        setTodos(
            todos.map((todo)=> todo.id === id ? {...todo, isEditing:!todo.isEditing}: todo)
        )
    }

    // Edit Task Todo
    const editTask = (task, id) => {
        setTodos(
            todos.map((todo)=> todo.id === id ? {...todo, task, isEditing:!todo.isEditing} : todo)
        )
    }

    // console.log("todos", todos)
  return (
    <div className="TodoWrapper">
        <h2>Add Your Tasks Here!</h2>
        <TodoForm addTodo={addTodo}/>

        {/* Display Todos */}
        {todos.map((todo)=> todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo}/>
        ) : (
            <Todo 
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
            />
        )
    )}
    </div>
  )
}

export default TodoWrapper