function isPythagoreanTriple(integers) {
    return Math.pow(integers[0], 2) + Math.pow(integers[1], 2) === Math.pow(integers[2], 2) ? true : false;
}