import axios from 'axios';

export const instance = axios.create({
  baseURL: `https://api.github.com/`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/vnd.github.v3+json'
  },
});