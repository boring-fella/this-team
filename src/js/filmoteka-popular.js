import PopFilmsAPI from './fetch/fetch-popular-films';

window.addEventListener('load', onWindowLoad);

const popFilmsSerchAPI = new PopFilmsAPI();

function onWindowLoad(event) {
  console.log('Загрузка страницы и приход популярных фильмов с бэка:');

  popFilmsSerchAPI.fetchPopFilms().then(data => console.log(data));
}
