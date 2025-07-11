import axios from 'axios';
export const API_AXIOS = axios.create({
  baseURL: "http://192.168.1.235:8000/api/",
  headers: {
    'X-Custom-Header': 'foobar',
    'Content-Type': 'application/json',
    'Accept': 'application/json', // Assuming
  }
});