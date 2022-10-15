import axios from 'axios';

import { KEY, BASE_URL } from './key-url';

export default class FilmsAPI {
  constructor() {
    this.searchQuery = '';
    this.lastQuery = '';
  }

  async fetchFilms(page) {
    const url = `${BASE_URL}/search/movie?api_key=${KEY}&query=${this.searchQuery}&page=${page}`;

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
