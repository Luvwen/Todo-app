import React from 'react';

import { FaCheckCircle, FaTrashAlt } from 'react-icons/fa';

export const Task = ({ todos, handleDeleteTask, handleToggleTask }) => {
  return (
    <>
      {todos.map((element, i) => (
        <div key={i}>
          <div className='task-container'>
            <div className='task-container-check'>
              <FaCheckCircle
                className={
                  element.done
                    ? 'task-container-check__icon done'
                    : 'task-container-check__icon'
                }
                onClick={() => handleToggleTask(element.id)}
              />
              <p
                className={
                  element.done
                    ? 'task-container-check__task checked'
                    : 'task-container-check__task'
                }
              >
                {element.name}
              </p>
            </div>
            <FaTrashAlt
              onClick={() => handleDeleteTask(element.id)}
              className='task-container__delete'
            />
          </div>
          <hr className='border' />
        </div>
      ))}
    </>
  );
};
