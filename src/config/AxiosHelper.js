import axios from 'axios';
export const baseURL = "https://chatappbackend-production.up.railway.app/api/v1";

export const httpClient = axios.create({
    baseURL: baseURL,
});