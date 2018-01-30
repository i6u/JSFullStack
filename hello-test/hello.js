module.exports = (...rest) => {
    if (rest.length <= 0) {
        return 0;
    } else {
        return rest.reduce((x, y) => x + y);
    }
};