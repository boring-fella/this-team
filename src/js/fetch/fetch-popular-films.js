import axios from 'axios';

const KEY = '3c2d3d1a4a9318a7ef02a0fdedccb03f';
const BASE_URL = 'https://api.themoviedb.org/3/trending';

export default class PopFilmsAPI {
  constructor() {
    this.page = 1;
  }

  async fetchPopFilms() {
    const url = `${BASE_URL}/movie/day?api_key=${KEY}&page=${this.page}`;

    const {
      data: { results },
    } = await axios.get(url);
    console.log(url);
    return results;
  }

  icrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
