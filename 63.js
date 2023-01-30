function digitize(n) {
    const arr = [];
    ('' + n).split('').reverse().forEach(item => {
        arr.push(+item);
    });

    return arr;
}