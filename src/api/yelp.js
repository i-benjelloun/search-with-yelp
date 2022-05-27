import axios from 'axios';
import { API_SECRET } from '@env';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses/',
  headers: {
    Authorization: `Bearer ${API_SECRET}`,
  },
});
