import Cookies from "js-cookie";

export default class CookiesManager{
    constructor(key){
        this.key = key;
    }

    setCookie(token){
        return Cookies.set(this.key, token);
    }

    getCookie(){
        return Cookies.get(this.key);
    }

    removeCookie(){
        return Cookies.remove(this.key);
    }
}