//axios is a good libary to making a request to a server across nertwork
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default instance;
