function shortcut(string) {

    let newString = [];

    string.split('').forEach(item => {

        if (['a', 'e', 'i', 'o', 'u'].indexOf(item) === -1) {
            newString.push(item);
        }

    });

    return newString.join('');
}