import axios from 'axios';

import { KEY, BASE_URL } from './key-url';

export default class PopFilmsAPI {
  async fetchTrailer(movieId) {
    const url = `${BASE_URL}/movie/${movieId}/videos?api_key=${KEY}`;
    const { data } = await axios.get(url);

    return data;
  }
}
