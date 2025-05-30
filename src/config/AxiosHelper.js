import axios from 'axios';
export const baseURL = "chatappbackend-production.up.railway.app"
export const httpClient = axios.create({
    baseURL: baseURL,
});