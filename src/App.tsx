import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

import classes from './App.module.scss';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

// import fetchImage from './api/unsplash';
import AppImage from './assets/images/spencer-imbrock-unsplash.jpg';

const App: React.FC = () => {
  const appState = useSelector((state: RootState) => state);
  const [image, setImage] = useState<string>();

  useEffect(() => {
    // fetchImage().then((data) => setImage(data));
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes['left-panel']}>
        <img src={AppImage} alt="UnSlash" />
        <h1>Music App</h1>
      </div>
      <div className={classes['right-panel']}>
        {appState.user.authorized ? <Dashboard /> : <Login />}
      </div>
    </div>
  );
};

export default App;
