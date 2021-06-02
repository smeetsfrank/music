import React, { useState, useEffect } from 'react';

import {
  getParamValues,
  getUserAlbums,
  getUserData,
} from '../../utils/functions';

const { REACT_APP_CLIENT_ID: CLIENT_ID } = process.env;

const redirect = 'http://localhost:3000/';
const scopes = 'user-read-email user-library-read';
const url = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${redirect}&scope=${scopes}&show_dialog=true`;

const Login: React.FC = () => {
  const [user, setUser] = useState<any>();
  useEffect(() => {
    const { access_token: accessToken, expires_in: expiresIn } = getParamValues(
      window.location.hash,
    );
    const expiryTime = new Date().getTime() + +expiresIn * 1000;

    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('expires_in', JSON.stringify(expiryTime));
  }, []);

  const authHandler = () => {
    window.location.href = url;
  };

  const userHandler = async () => {
    const whoDis = await getUserData(localStorage.getItem('access_token')!);
    const showAlbums = await getUserAlbums(
      localStorage.getItem('access_token')!,
    );
    console.log(showAlbums.items.map((item: any) => item.album.images[1]));
    console.log(whoDis);
    setUser(whoDis.display_name);
  };
  return (
    <>
      <button type="button" onClick={authHandler}>
        Login
      </button>
      <button type="button" onClick={userHandler}>
        Get user:
        {user}
      </button>
    </>
  );
};
export default Login;
