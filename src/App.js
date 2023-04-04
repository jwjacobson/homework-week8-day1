import React, { useState } from 'react';
import Button from './components/Button';
import Navbar from './components/Navbar';
import Form from './components/Form';



function App() {
  let todo_list = [];
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Form />
      </div>
    </div>
  );
}

export default App;
