export class Cookies{
    constructor(){
        this.checkCookieEnabled()
    }
    checkCookieEnabled(){
        // console.log(navigator.cookieEnabled)
        if(!navigator.cookieEnabled){
            alert("masz wyłączaoną obsługę ciasteczek")
            return
        }
    }
    setCookie(options){

    }
    getCookie(name){
        
    }

    removeCookie(name){

    }
}