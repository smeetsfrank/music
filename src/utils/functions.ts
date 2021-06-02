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
      // eslint-disable-next-line no-param-reassign
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

export async function getUserAlbums(token: string): Promise<any> {
  try {
    const response = await axios({
      url: 'https://api.spotify.com/v1/me/albums',
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
