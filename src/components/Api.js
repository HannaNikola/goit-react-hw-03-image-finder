

import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '39227320-d50c4892bd50959f664d77ea8';

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get('/', {
    params: {
      q: query,
      page: page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
    },
  });
  return response.data;
};
