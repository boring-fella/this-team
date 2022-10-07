import axios from 'axios';

const KEY = '3c2d3d1a4a9318a7ef02a0fdedccb03f';
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

export default class FilmsAPI {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchFilms() {
    const url = `${BASE_URL}?api_key=${KEY}&query=${this.searchQuery}&page=${this.page}`;

    const { data } = await axios.get(url);
    console.log(url);
    return data;
  }

  icrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
