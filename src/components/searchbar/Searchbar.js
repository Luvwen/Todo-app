import React, { useState } from 'react';
import { Tasks } from '../tasklist/Tasks';

export const Searchbar = ({ dispatch, todos, setActivesTask, activesTask }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput('');
  };

  const handleAddTask = () => {
    const addTask = {
      type: 'add',
      payload: {
        id: new Date().getTime(),
        name: input,
        done: false,
      },
    };

    if (input.length > 5) {
      dispatch(addTask);
      setActivesTask(activesTask + 1);
    } else {
      console.log('Inserte una tarea correcta');
    }

    setInput('');
  };

  const handleDeleteTask = (id) => {
    const deleteTask = {
      type: 'delete',
      payload: id,
    };

    dispatch(deleteTask);
    setActivesTask(activesTask - 1);
  };

  const handleToggleTask = (id) => {
    const toggleTask = {
      type: 'toggle',
      payload: id,
    };

    dispatch(toggleTask);
  };

  const handleGetData = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <input
            className='form__input'
            placeholder='Insert a new task...'
            onChange={handleGetData}
            type='text'
            value={input}
          />
        </form>
        <button onClick={handleAddTask} className='form__button' type='submit'>
          Add Task
        </button>
      </div>
      <Tasks
        todos={todos}
        handleDeleteTask={handleDeleteTask}
        handleToggleTask={handleToggleTask}
      />
    </>
  );
};
