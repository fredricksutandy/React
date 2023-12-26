import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const [newTodo, setNewTodo] = useState('');

  const handleToggleEdit = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, editable: !todo.editable } : todo
      )
    );
  };

  const handleSaveEdit = (id, newText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText, editable: false } : todo
      )
    );
  };

  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;

    setTodos((prevTodos) => [
      ...prevTodos,
      { id: prevTodos.length + 1, text: newTodo, editable: false, completed: false },
    ]);

    setNewTodo('');
  };

  const handleRemoveTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );

      setTimeout(() => {
        setTodos((prevTodos) => updatedTodos.filter((todo) => !todo.completed));
      }, 1000); // Remove completed task after 1 second

      return updatedTodos;
    });
  };

  return (
    <div className='w-full mt-14 sm:ml-64'>
      <div className='px-8 sm:px-4 pb-8 pt-6'>
        <h1 className="text-4xl font-bold text-black w-fit sm:text-5xl mb-8 w-auto">Todo's list</h1>
        <div className='mb-20 bg-white p-8 md:p-10 w-fit flex flex-col w-full w-100 overflow-y-auto'>
          <div className="flex mb-5">
          <input
            type="text"
            placeholder="Add a new task..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleAddTodo();
              }
            }}
            className='w-full border-b border-gray-400 bg-gray-100 p-2 text-sm flex flex-1'
          />
            <button className="py-3 px-5 bg-blue-600 text-white" onClick={handleAddTodo}>Add +</button>
        </div>
        
        <ul>
          {todos.map((todo) => (
               <li key={todo.id} className={`rounded-0 py-2 mb-2 transition-all  ${todo.completed ? 'completed line-through bg-green-200' : 'bg-white'}`}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(todo.id)}
                  className='mr-2'
                />
                <span className="mr-2">{todo.text}</span>
              </label>
              {todo.editable ? (
                <>
                  <input
                    type="text"
                    value={todo.text}
                    onChange={(e) => handleSaveEdit(todo.id, e.target.value)}
                  />
                  <button onClick={() => handleSaveEdit(todo.id, todo.text)}>Save</button>
                </>
              ) : (
                <>
                  <button className="mr-2 text-gray-500" onClick={() => handleToggleEdit(todo.id)}>Edit</button>
                  <button className="mr-2 text-gray-500" onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
      </div>
      </div>
  );
}

export default TodoList;

// notes
// notes
// notes
// notes
// notes
// notes
// notes
// notes
// Editnya jelekkk