function findAverage(array) {
    let sum = 0

    if (array.length) {
        array.forEach((item) => {
            sum += item;
        });

    } else {
        return 0;
    }
    return sum / array.length;
}