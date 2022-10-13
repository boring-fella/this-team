import axios from 'axios';

const KEY = '3c2d3d1a4a9318a7ef02a0fdedccb03f';
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

export default class FilmsAPI {
  constructor() {
    this.searchQuery = '';
    this.lastQuery = '';
  }

  async fetchFilms(page) {
    const url = `${BASE_URL}?api_key=${KEY}&query=${this.searchQuery}&page=${page}`;

    const { data } = await axios.get(url);

    return data;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
