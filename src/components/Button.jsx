import React from 'react'

export default function Button(){
    function handleClick(event){
        console.log(event);
        alert('Click');
    }
  return (
    <button className='btn btn-outline-success' onClick={handleClick}>Button</button>
  )
}
