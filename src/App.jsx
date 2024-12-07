import React, { useState } from 'react';

    function App() {
      const [todos, setTodos] = useState([]);
      const [input, setInput] = useState('');

      const addTodo = () => {
        if (input.trim()) {
          setTodos([...todos, input]);
          setInput('');
        }
      };

      const removeTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
      };

      return (
        <div className="todo-container">
          <h1>Todo App</h1>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            placeholder="Add a new task"
          />
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                {todo}
                <button onClick={() => removeTodo(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    export default App;
