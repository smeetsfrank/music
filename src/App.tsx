import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

import './App.module.scss';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const appState = useSelector((state: RootState) => state);

  return (
    <div className="App">
      {appState.user.authorized ? <Dashboard /> : <Login />}
    </div>
  );
};

export default App;
