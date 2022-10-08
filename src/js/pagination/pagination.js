import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { themovieAPI, ThemovieAPI } from './ThemovieAPI';
const themovieAPI = new themovieAPI();

const options = {
    totalItems: 10,
    itemsPerPage: 10,
    visiblePages: 10,
    page: 1
}

const pagination = new Pagination('pagination', options);
const page = pagination.getCurrentPage();
console.log(page)

const popular = (event) => {
    const currentPage = event.page;
    console.log(currentPage);
}
pagination.on('afterMove', popular);