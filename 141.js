function makePassword(phrase) {
    return phrase.split(' ').map(s => {
        if (s[0].toLowerCase() === 'i') {
            return 1;
        }
        if (s[0].toLowerCase() === 'o') {
            return 0;
        }
        if (s[0].toLowerCase() === 's') {
            return 5;
        }
        return s[0];
    }).join('');
}