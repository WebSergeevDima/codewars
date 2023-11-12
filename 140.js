function getLargerNumbers(a, b) {
    return a.map((n, index) => n > b[index] ? n : b[index]);
}