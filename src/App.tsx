import React from 'react';
import './App.css';
import UdayReact from './mapfunction';

function App() {
  const users = [
    {
      name: "uday",
      age: 25
    },
    {
      name: "nivin",
      age: 26
    },
    {
      name: "sumit",
      age: 24
    },
    {
      name: "kuldeep",
      age: 23
    },
    {
      name: "vikram",
      age: 25
    },
    {
      name: "shreesh",
      age: 26
    },
    {
      name: "arjun",
      age: 25
    },
    {
      name: "UI-bro",
      age: 28
    }
  ];

  return (
    <div className="App">
      <h1>users List</h1>
      <ul className="users-list">
        {users.map((ele, index) => (
          <UdayReact
            key={index}
            name={ele.name}
            age={ele.age}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;