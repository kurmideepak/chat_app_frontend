import axios from 'axios';
export const baseURL = "https://chatappbackend-production.up.railway.app/api/v1";
const API_BASE_URL = process.env.REACT_APP_API_URL + '/api/v1';

export const httpClient = axios.create({
    baseURL: baseURL,
});