
import React, { useState } from 'react';
//import './TodoList.css'; // Import your CSS file for styling

const TodoList = () => {
  const [days, setDays] = useState([
    { date: new Date(), todos: [] },
    { date: new Date(new Date().getTime() + 86400000), todos: [] },
    { date: new Date(new Date().getTime() + 2 * 86400000), todos: [] },
    { date: new Date(new Date().getTime() + 3 * 86400000), todos: [] },
    { date: new Date(new Date().getTime() + 4 * 86400000), todos: [] },
  ]);

  const handleAddTodo = (dayIndex, todo) => {
    if (todo.trim() !== '') {
      const newDays = [...days];
        newDays[dayIndex].todos.push({ text: todo, id: Date.now() });
      setDays(newDays);
    }
  };

  const handleDeleteTodo = (dayIndex, todoId) => {
    setDays(prevDays => {
      const newDays = [...prevDays];
      newDays[dayIndex].todos = newDays[dayIndex].todos.filter(todo => todo.id !== todoId);
      return newDays;
    });
  };

  return (
    <div className="todo-container">
      {days.map((day, index) => (
        <div className="day-container" key={index}>
          <h2>{day.date.toDateString()}</h2>
          <ul>
            {day.todos.map((todo,id) => (
              <ul key={id}>
                {todo.text}
                <button onClick={() => handleDeleteTodo(index, todo.id)}>Delete</button>
              </ul>
            ))}
          </ul>
          <input
            type="text"
            placeholder="Add a todo"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleAddTodo(index, e.target.value);
                e.target.value = ''; 
              }
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
