export const SITE_TITLE = "CedeSystem";
export const URL_PAYPHONE = "https://ppls.me/21v4efHcwLwTYh4JYffKw";
export const URL_PEIGO = "https://ppls.me/21v4efHcwLwTYh4JYffKw";
export const URL_PAYPAL = "https://ppls.me/21v4efHcwLwTYh4JYffKw";



export function url(path = ''){
    return `${import.meta.env.SITE}${import.meta.env.BASE_URL}${path}`;
}