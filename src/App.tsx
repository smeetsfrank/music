import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from './store/store';

import './App.module.scss';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const userCtx = useSelector((state: RootState) => state.user);

  return (
    <div className="App">{userCtx.authorized ? <Dashboard /> : <Login />}</div>
  );
};

export default App;
