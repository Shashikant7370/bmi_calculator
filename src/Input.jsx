import React, { useState } from 'react'

const Input = () => {
    const [name, setName]=useState("")
  return (
    <div>

        <h1 className="z-10">Your name is {name}</h1>
        <input
          type="text"
          className="z-10"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => {
            console.log(e);
            
            setName(e.target.value);
          }}
        />
        
        
    </div>
  );
}

export default Input