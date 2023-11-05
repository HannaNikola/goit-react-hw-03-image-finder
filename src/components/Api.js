

import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '39227320-d50c4892bd50959f664d77ea8';

export const fetchQuizzes = async (query, page = 1, perPage = 12) => {
  const response = await axios.get('/', {
    params: {
      key: API_KEY,
      q: query,
      page: page,
      per_page: perPage,
      image_type: 'photo',
      orientation: 'horizontal',
    },
  });
    return response.data;
    
};
