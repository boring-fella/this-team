import axios from 'axios';

const KEY = '3c2d3d1a4a9318a7ef02a0fdedccb03f';
const BASE_URL = 'https://api.themoviedb.org/3/trending';

export default class PopFilmsAPI {
  async fetchPopFilms(page) {
    const url = `${BASE_URL}/movie/day?api_key=${KEY}&page=${page}`;

    const { data } = await axios.get(url);

    return data;
  }
}
