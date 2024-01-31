function nthChar(words) {
    return (words.map((item, index) => item[index])).join('');
}