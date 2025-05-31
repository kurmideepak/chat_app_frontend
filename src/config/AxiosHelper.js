import axios from 'axios';
// Use the deployed backend URL for production
export const baseURL = "https://chatappbackend-production.up.railway.app";

export const httpClient = axios.create({
    baseURL: baseURL,
});