import Cookies from 'js-cookie';
import CookiesManager from "@/ultis/manager/cookiesManager.js";

const TOKEN_KEY = 'token';
const cookiesManager = new CookiesManager(TOKEN_KEY);

export function setToken(token){
    return cookiesManager.setCookie(token);
}
export function getToken(){
    return cookiesManager.getCookie()
}
export function removeToken(){
    return cookiesManager.removeCookie();
}

export function isAuthenticated(){
    return !!getToken();
}

