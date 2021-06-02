import React from 'react';
import './App.module.scss';
import Login from './api/spotify/Login';

const App: React.FC = () => (
  <div className="App">
    Ello!
    <Login />
  </div>
);

export default App;
