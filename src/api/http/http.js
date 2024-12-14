import axios from 'axios';
import {getToken} from "@/ultis/auth.js";

export const HTTP = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    timeout: 10000,
})

export const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    UNPROCESSABLE_ENTITY: 422,
    INTERNAL_SERVER_ERROR: 500,
}

export const HTTP_METHOD = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    PATCH: 'patch',
    DELETE: 'delete',
}

HTTP.interceptors.request.use(
    (config) => {
        config.headers['Authorization'] = 'Bearer ' + '';
        config.headers['Content-Type'] = 'multipart/form-data';
        return config;
    },
    (error) => {
        Promise.reject(error);
    },
);

