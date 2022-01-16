import React from 'react';

export const Navbar = ({ dispatch, todos, activesTask }) => {
  var dayjs = require('dayjs');
  //import dayjs from 'dayjs' // ES 2015
  dayjs().format();

  return (
    <div>
      <header>
        <nav className='nav'>
          <div className='nav-date'>
            <p className='nav-date__date'>
              {dayjs().format('dddd')}, {dayjs().format('MMMM')}{' '}
              {dayjs().format('DD')}
            </p>
            <p className='nav-date__active'>{activesTask} Active tasks</p>
          </div>
        </nav>
      </header>
    </div>
  );
};
