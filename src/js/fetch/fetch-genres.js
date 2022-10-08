import axios from 'axios';
import storageAPI from '../local-storage-api';

const KEY = '3c2d3d1a4a9318a7ef02a0fdedccb03f';

setGenresToLocalStorage();

async function getGenres() {
  const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}`;
  const genres = await axios.get(url);
  return genres;
}

async function setGenresToLocalStorage() {
  const genres = await getGenres().then(result => {
    storageAPI.save('genres', result.data.genres);
  });
}

export function findGenreById(listId) {
  const arrayGenres = storageAPI.load('genres');
  const textGenres = [];

  for (const id of listId) {
    const findedId = arrayGenres.find(genre => genre.id === id);
    textGenres.push(findedId.name);
  }
  return textGenres.join(', ');
}
