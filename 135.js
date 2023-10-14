function longestWord(stringOfWords) {

    let str = '';

    stringOfWords.split(' ').forEach(word => {
        if (word.length >= str.length) {
            str = word;
        }
    });

    return str;
}