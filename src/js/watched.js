import storageAPI from './local-storage-api';
<<<<<<< Updated upstream
import { saveCurrentFilmsToLocal, getFilmFromLocal } from './display-films';
import FilmCards from './markup/film-cards-markup';
import { hideElement } from './markup/hide-elements';
import viewFilmQueue from './queue'

=======
import {viewFilmQueue} from './queue'
>>>>>>> Stashed changes



const watched = document.querySelector('#watched');




watched.addEventListener('click', viewFilmQueu('watchedFilms'));


