import React from 'react';
import './App.css';
import Logo from './logo.js';
import TaskList from './comps/tasklist.jsx';

function App() {
  return (
    <div className="app-task">
      <Logo logo={Logo} />
      <div className='task-bar-list'>
        <h1>My task</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
