function checkVowel(string, position) {
    return !!string[position] ? ['a', 'e', 'i', 'o', 'u'].includes(string[position].toLowerCase()) : false;
};