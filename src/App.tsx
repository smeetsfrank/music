import React from 'react';
import './App.module.scss';
import Login from './api/spotify/Login';
import Navigation from './components/Navigation/Navigation';

const App: React.FC = () => (
  <div className="App">
    Ello!
    <Navigation />
    <Login />
  </div>
);

export default App;
