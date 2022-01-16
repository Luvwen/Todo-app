import React from 'react';
import { Task } from './Task';

export const Tasks = ({ todos, handleDeleteTask, handleToggleTask }) => {
  return (
    <div className='wrapper-task'>
      <Task
        todos={todos}
        handleDeleteTask={handleDeleteTask}
        handleToggleTask={handleToggleTask}
      />
    </div>
  );
};
