import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authenticate } from '../../api/spotify';

import { userActions } from '../../store/userSlice';
import { AppDispatch } from '../../store/store';

const {
  REACT_APP_CLIENT_ID: CLIENT_ID,
  REACT_APP_REDIRECT: REDIRECT,
  REACT_APP_API_SCOPES: SCOPES,
} = process.env;

const url = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT}&scope=${SCOPES}&show_dialog=true`;

const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const authHandler = () => {
    window.location.href = url;
  };

  useEffect(() => {
    const token = authenticate();
    if (token) {
      dispatch(userActions.authorize(token));
    }
  }, []);

  return (
    <button type="button" onClick={authHandler}>
      Login
    </button>
  );
};

export default Login;
