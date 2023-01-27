function invert(array) {
    return (array.map(num => {
        return num < 0 ? num * -1 : +('-' + num);
    }));
}