import {HTTP} from "@/api/http/http.js";

export const authService={
    register(credentials) {
         return HTTP.post('/auth/register', credentials);
    },

    login(credentials) {
        return HTTP.post('/auth/login', credentials);
    }
}