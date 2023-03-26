import './App.css';
import React from 'react';
import MyButton from './button';
function App() {
  const name = 1+1000
  return (
    <div>
      <h1>
        This is the normal HTML syntax you know { name }
      </h1>
      <MyButton> ABC </MyButton>
    </div>
  );
}

export default App;