import {SERVER_URI} from '@env';
import axios from 'axios';

const SERVER_API = axios.create({
  baseURL: SERVER_URI,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default SERVER_API;
