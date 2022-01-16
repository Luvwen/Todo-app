import React, { useReducer, useState } from 'react';
import { Navbar } from './components/header/Navbar';
import { Searchbar } from './components/searchbar/Searchbar';
import { taskReducer } from './reducer/taskReducer';

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(taskReducer, []);

  const [activesTask, setActivesTask] = useState(0);

  return (
    <div className='wrapper'>
      <div className='card'>
        <Navbar dispatch={dispatch} todos={todos} activesTask={activesTask} />
        <Searchbar
          dispatch={dispatch}
          todos={todos}
          setActivesTask={setActivesTask}
          activesTask={activesTask}
        />
      </div>
    </div>
  );
};
