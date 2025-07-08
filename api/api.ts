import axios from 'axios';
import {API_URL} from '@env';

export const API_AXIOS = axios.create({
  baseURL: API_URL,
  headers: {
    'X-Custom-Header': 'foobar',
    'Content-Type': 'application/json',
    'Accept': 'application/json', // Assuming
  }
});