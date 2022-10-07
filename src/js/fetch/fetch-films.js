import axios from 'axios';

const KEY = '30122365-dbc077ba4413dccabf9c250c7';
const BASE_URL = 'https://pixabay.com/api/';

export default class PicturesAPI {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchPictures() {
    const url = `${BASE_URL}?key=${KEY}&q=${this.searchQuery}&page=${this.page}&per_page=40&image_type=photo&orientation=horizontal&safesearch=true`;

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
