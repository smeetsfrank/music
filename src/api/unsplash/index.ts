import axios from 'axios';

const { REACT_APP_UNSPLASH_CLIENT_ID: CLIENT_ID } = process.env;

const fetchImage = async () => {
  const response = await axios.get('https://api.unsplash.com/photos/random', {
    params: {
      client_id: CLIENT_ID,
      query: 'music',
      orientation: 'portrait',
    },
  });
  const { data } = response;
  return data.urls.regular;
};

export default fetchImage;
