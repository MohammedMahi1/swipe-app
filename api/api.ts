import axios from 'axios';
import {API_URL} from '@env';

export const API_AXIOS = axios.create({
  baseURL: API_URL+"/user",
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    "Authorization": `Bearer ${process.env.API_TOKEN}` // Assuming
  }
});