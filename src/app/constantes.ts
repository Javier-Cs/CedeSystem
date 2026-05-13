export const SITE_TITLE = "CedeSystem";



export function url(path = ''){
    return `${import.meta.env.SITE}${import.meta.env.BASE_URL}${path}`;
}