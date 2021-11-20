const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export default randomNumber;

export const upFirstLetter = (word) => {
    return word.substring(0,1).toUpperCase() + word.substring(1).toLowerCase();
}
