import axios from 'axios';

type Props = {
  [key: string]: string;
};

export function getParamValues(url: string): Props {
  return url
    .slice(1)
    .split('&')
    .reduce((prev: any, curr: any) => {
      const [title, value] = curr.split('=');
      prev[title] = value;
      return prev;
    }, {});
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
