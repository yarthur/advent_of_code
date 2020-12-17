export const encode = (value, size = 0) => {
    return value.toString(2).padStart(size, 0);
};

export const decode = (value) => {
    return parseInt(value, 2);
};
