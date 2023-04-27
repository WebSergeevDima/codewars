function doubleChar(str) {
    return str.split('').map(item => item + item).join('');
}