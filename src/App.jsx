import { useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";
import { ToDoList } from "./TodoList";

export default function App() {
    const [todos, setTodos] = useState([]);

    function addToDo(title) {
        setTodos((currentTodos) => {
            return [...currentTodos, { id: crypto.randomUUID(), title, completed: false }];
        });
    }

    function toggleTodo(id, completed) {
        setTodos((currentTodos) => {
            return currentTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed };
                }
                return todo;
            });
        });
    }

    function deleteTodo(id) {
        setTodos((currentTodos) => {
            return currentTodos.filter((todo) => todo.id !== id);
        });
    }

    return (
        <>
            <NewTodoForm onSubmit={addToDo} />
            <h1 className="header">Todo List</h1>
            <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </>
    );
}
