import React, { useState } from 'react';
import { TodoProvider, useTodo } from './Context/todocontext';

function TodoApp() {
  const { state, dispatch } = useTodo();
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      dispatch({ type: 'ADD_TASK', payload: newTask });
      setNewTask('');
    }
  };

  const toggleTask = id => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };

  const removeTask = id => {
    dispatch({ type: 'REMOVE_TASK', payload: id });
  };

  const totalTasks = state.tasks.length;
  const completedTasks = state.tasks.filter(task => task.completed).length;

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="Add new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div>
        <p>Total tasks: {totalTasks}</p>
        <p>Completed tasks: {completedTasks}</p>
      </div>
      <ul>
        {state.tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <button onClick={() => removeTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Todo() {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  );
}

export default Todo;
