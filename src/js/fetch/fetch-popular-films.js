import axios from 'axios';

const KEY = '3c2d3d1a4a9318a7ef02a0fdedccb03f';
const BASE_URL = 'https://api.themoviedb.org/3/trending';

export default class PopFilmsAPI {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchPopFilms() {
    const url = `${BASE_URL}/all/day?api_key=${KEY}`;

    const { data } = await axios.get(url);
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
