import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

let initialState = {
  user: {
    email: 'user@email.com'
  }
};

function App() {
  let [state, setState] = useState(initialState);

  function changeEmail() {
    setState({ 
      user: {
        email: 'other@email.com'
      }
    });
  }

  return (
    <div className="App">
      <button onClick={changeEmail}>Change Email</button>
      { state.user.email }
    </div>
  );
}

export default App;
