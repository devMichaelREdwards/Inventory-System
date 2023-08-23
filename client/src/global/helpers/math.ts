export const randomRange = (min: number = 0, max: number) => {
    return min + Math.floor(Math.random() * (max - min + 1));
};
