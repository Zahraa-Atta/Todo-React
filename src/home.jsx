
import React, { useState, useEffect } from "react";
import logo from "./image/Todo.png";
import "./index.css";
import { Link } from "react-router-dom";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

     
  useEffect(() => {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll(".mean a");
    navLinks.forEach(link => {
      if (currentPath.endsWith(link.getAttribute("href"))) {
        link.classList.add("active");
      }
    });
  }, []);

     
  const addTodo = () => {
    if (todoText.trim() === "") return;
    setTodos([...todos, todoText.trim()]);
    setTodoText("");
  };

    
  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="border">
        <div className="container">
          <header>
            <div className="logo"><img src={logo} alt=""/></div>

            <div className="mean">
              <Link to="/" className="home">Home</Link>
              <Link to="/about">About</Link>
            </div>
          </header>
        </div>
      </div>

      <div className="container">
        <div className="title">
          <h1>Simple ToDo App</h1>
          <p>This todo app for test design.</p>
        </div>
        <div className="inputTodo">
          <input
            type="text"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            placeholder="Write text here..."
          />
          <button onClick={addTodo} className="addNew">+ Add New</button>
        </div>
        <div className="line"></div>
        <div className="todo-list">
          {todos.map((todo, index) => (
            <div key={index} className="todo-item">
              {todo}
              <button onClick={() => removeTodo(index)}>X</button>
            </div>
          ))}
        </div>

        <div className="total-count">
          <p>
            Total List: <span>{todos.length}</span>
          </p>
          <button onClick={addTodo} className="add">+ Add</button>
        </div>
      </div>
      </> 
  );
}
