import axios from 'axios';
import getParamValues from '../../utils/functions';

export function authenticate(): string {
  const { access_token: accessToken } = getParamValues(window.location.hash);
  window.location.hash = '';
  return accessToken;
}

export async function getUserData(token: string): Promise<any> {
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
}

export async function fetchSpotifyData(
  token: string,
  searchTerm: string,
  filter: string[],
): Promise<any> {
  try {
    const limit = 5;
    const filters = filter.toString().replace(/\s/g, '');
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
}
