import axios from 'axios';

const KEY = '3c2d3d1a4a9318a7ef02a0fdedccb03f';
const BASE_URL = 'https://api.themoviedb.org/3';
const MOVIE_ID = 894205; /* example id */

export default class PopFilmsAPI {
  async fetchTrailer(movieId) {
    const url = `${BASE_URL}/movie/${movieId}/videos?api_key=${KEY}`;
    const { data } = await axios.get(url);

    return data;
  }
}
