function generateRange(min, max, step) {

    let start = min;
    let arr = [];


    while (start <= max) {
        arr.push(start);
        start += step;
    }

    return arr;

}