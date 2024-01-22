function sumCubes(n) {
    let sum = 0;

    while (n > 0) {
        sum += Math.pow(n, 3);
        --n;
    }

    return sum;
}