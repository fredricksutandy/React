import React, { useState } from 'react';

function TrackTodo() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (todo.trim() === '') return;

    setTodos([...todos, { id: todos.length + 1, text: todo, completed: false }]);
    setTodo('');
  };

  const handleToggleComplete = (id) => {
    const updatedTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodos(updatedTodos);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  const totalTodos = todos.length;
  const completedTodos = todos.filter((item) => item.completed === true).length;
  const percentageCompleted = totalTodos === 0 ? 0 : Math.round((completedTodos / totalTodos) * 100) + '%';

  return (
    <div className='w-full mt-14 sm:ml-64'>
      <div className='px-8 sm:px-4 pb-8 pt-6'>
      <h1 className="text-4xl font-bold text-black w-fit sm:text-5xl mb-8 w-auto">Todo's list tracker</h1>

        <div className='mb-20 bg-white p-8 md:p-10 w-fit flex flex-col w-full w-100 overflow-y-auto'>
          <div className="flex mb-10">
            <input
              type="text"
              placeholder="Add a new task..."
              className='w-full border-b border-gray-400 bg-gray-100 p-2 text-sm flex flex-1'
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className='w-auto py-3 px-5 bg-blue-600 text-white' onClick={handleAddTodo}>Add +</button>
          </div>
          {totalTodos > 0 && (
            <>
              <p className='mb-2'>Progress</p>
              <div className="w-full max-w-[375px] relative mb-3">
                <div className='p-1 rounded bg-gray-300 w-full'></div>
                <div className="p-1 rounded bg-blue-500 absolute top-0 transition-all ease-in-out" style={{ width: percentageCompleted }}></div>
              </div>
            </>
          )}
          <ul className='gap-2'>
            {todos.length === 0 ? (
              <li className='text-gray-500'>No todos yet. Add some tasks!</li>
            ) : (
              todos.map((item) => (
                <li key={item.id} className='py-2 bg-white max-w-[520px]'>
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => handleToggleComplete(item.id)}
                    className='mr-2'
                  />
                  {item.text}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TrackTodo;
