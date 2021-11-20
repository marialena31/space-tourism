export const setSessionItem = (item, value) => {
    window.sessionStorage.setItem(item, value);
}

export const getSessionItem = (item) => {
    return window.sessionStorage.getItem(item);
}