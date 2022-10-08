import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { ThemovieAPI } from './ThemovieAPI';
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
themovieAPI.getPopularMovie(page).then(data => console.log(data))

const popular = (event) => {
    const currentPage = event.page;
    console.log(currentPage);
}
pagination.on('afterMove', popular);