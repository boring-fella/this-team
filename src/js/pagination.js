import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { storageAPI } from './local-storage-api';
import { appendFilmCardsMarkup } from './filmoteka';
// import { backToTop } from './scroll/scroll-to-top';



const container = document.getElementById('pagination');
const options = { // below default value of options
     totalItems: 20,
     itemsPerPage: 1,
     visiblePages: 5,
     page: 1,
     centerAlign: true,
     firstItemClassName: 'tui-first-child',
     lastItemClassName: 'tui-last-child',
     template: {
         page: '<a href="#" class="tui-page-btn">{{page}}</a>',
         currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
         moveButton:
             '<a href="#" class="tui-page-btn tui-{{type}}">' +
                 '<span class="tui-ico-{{type}}">{{type}}</span>' +
             '</a>',
         disabledMoveButton:
             '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
                 '<span class="tui-ico-{{type}}">{{type}}</span>' +
             '</span>',
         moreButton:
             '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
                 '<span class="tui-ico-ellip">...</span>' +
             '</a>'
     }
};
const pagination = new Pagination(container, options);

// pagination.on('afterMove', (event) => {
//   const currentPage = event.page;
//   console.log(currentPage);
// });
pagination.on('beforeMove', async event => {
  // backToTop();
  storageAPI.page = event.page;
  const movies = await storageAPI.fetch();
  appendFilmCardsMarkup(movies.results);
});

let totalItemsFromServer;

const init = async total => {
  if (total === undefined && !totalItemsFromServer)
    totalItemsFromServer = await storageAPI.fetch();

  if (total === undefined) total = totalItemsFromServer.total_results;

  pagination.setTotalItems(total);
  pagination.reset();
};

init();

export default {
  reset: init,
};