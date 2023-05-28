function testEven(n) {
    return n !== parseInt(n) ? false : n % 2 !== 0 ? false : true;
}