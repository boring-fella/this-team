import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '0e93aabbe6940ffc57eaa3a18a147920';
export class ThemovieAPI {
    #query = '';
    #seachParams = {
        params: {
            language: en-US,
            page: 1,
            year: 2022,
            primary_release_year: 2022,
        }
    }

    async getPopularMovie() {
        const {data} = axios.get('/trending/{media_type}/{time_window}')
    }
}
