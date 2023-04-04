import React from 'react'
import { useState } from 'react';

export default function Form() {
  const [task, setTask] = useState('');

  function handleTaskChange(e) {
    setTask(e.target.value);
  }

  function handleClick() {
    setTask('');
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="Enter a task"
        value={task}
        onChange={handleTaskChange}
      />
      <button onClick={handleClick}>Submit</button>
    </form>
  );
}
