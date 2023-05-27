import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'f993b5f74bb8516d901f0ce1309ebdad',
    language: 'es-ES',
  },
});

export default movieDB;
