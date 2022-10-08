import axios from 'axios';
import storageAPI from '../local-storage-api';

const KEY = '3c2d3d1a4a9318a7ef02a0fdedccb03f';

async function getGenres() {
  const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}`;
  const genres = await axios.get(url);
  return genres;
}

export async function setGenresToLocalStorage() {
  const genres = await getGenres().then(result => {
    console.log('Записано: ', result.data.genres);
    storageAPI.save('genres', result.data.genres);
  });
  //   console.log('Записано: ', genres);
}

setGenresToLocalStorage();

export function findGenreById(id) {
  const arrayGenres = storageAPI.load('genres');
  arrayGenres.find(genre => {
    if ((genre.id = id)) {
      return genre.name;
    }
  });
  //   console.log(storageAPI.load('genres'));
  console.log('Вытянуто: ', arrayGenres);
}

findGenreById();
