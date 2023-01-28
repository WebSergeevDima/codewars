function removeExclamationMarks(s) {
    return s.split('').filter(str => str !== '!').join('');
}