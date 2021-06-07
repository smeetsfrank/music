import axios from 'axios';
import getParamValues from '../../utils/functions';

export const authenticate = (): string => {
  const { access_token: accessToken } = getParamValues(window.location.hash);
  window.location.hash = '';
  return accessToken;
};

export const getUserData = async <T>(token: string): Promise<T> => {
  try {
    const response = await axios({
      url: 'https://api.spotify.com/v1/me',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { data } = response;
    return data;
  } catch (err) {
    throw new Error('Error');
  }
};

export const fetchSpotifyData = async (
  token: string,
  searchTerm: string,
): Promise<any> => {
  try {
    const limit = 12;
    const filters = 'album,artist,playlist';
    const response = await axios({
      url: `https://api.spotify.com/v1/search?q=${searchTerm}&type=${filters}&limit=${limit}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { data } = response;
    return data;
  } catch (err) {
    throw new Error('Error');
  }
};
