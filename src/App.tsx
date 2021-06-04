import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

import classes from './App.module.scss';
import Login from './components/Login';
import Search from './components/Search';
import Dashboard from './components/Dashboard';
import MainImage from './components/MainImage';

// import fetchImage from './api/unsplash';
import AppImage from './assets/images/spencer-imbrock-unsplash.jpg';

const App: React.FC = () => {
  const appState = useSelector((state: RootState) => state);
  const [image, setImage] = useState<string>();

  useEffect(() => {
    // fetchImage().then((data) => setImage(data));
  }, []);

  return (
    <div
      className={`${classes.wrapper} ${
        appState.user.authorized && classes.split
      }`}
    >
      <div className={classes['left-panel']}>
        <MainImage url={AppImage} />
        <h1>Music App</h1>
        {!appState.user.authorized && <Login />}
        {appState.user.authorized && <Search />}
      </div>
      <div className={classes['right-panel']}>
        {appState.user.authorized && <Dashboard />}
      </div>
    </div>
  );
};

export default App;
