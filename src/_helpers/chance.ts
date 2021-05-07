export const chance = (value: number):boolean => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    return randomNum <= value;
}