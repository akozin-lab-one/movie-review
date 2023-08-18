import axios from "axios";

export const api_key = '90dda51970ad9d22a9ba585a98c4f127';

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})