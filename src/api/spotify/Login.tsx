import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { userActions } from '../../store/userSlice';
import type { AppDispatch } from '../../store/store';

import { getParamValues } from '../../utils/functions';

// eslint-disable-next-line operator-linebreak
const { REACT_APP_CLIENT_ID: CLIENT_ID, REACT_APP_REDIRECT: REDIRECT } =
  process.env;

const scopes = 'user-read-email user-library-read';
const url = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT}&scope=${scopes}&show_dialog=true`;

const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const { access_token: accessToken, expires_in: expiresIn } = getParamValues(
      window.location.hash,
    );
    const expiryTime = new Date().getTime() + +expiresIn * 1000;

    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('expires_in', JSON.stringify(expiryTime));
    if (localStorage.getItem('access_token') !== 'undefined') {
      dispatch(userActions.authorize());
      window.location.hash = '';
    }
  }, []);

  const authHandler = () => {
    window.location.href = url;
  };

  return (
    <Button variant="contained" color="primary" onClick={authHandler}>
      Login
    </Button>
  );
};
export default Login;
