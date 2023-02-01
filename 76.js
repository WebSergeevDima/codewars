function consonantCount(str) {

    let arr = ['a', 'e', 'i', 'o', 'u', '_', '^', '$', '&', '^', '#', '$', '&', '^', ' ', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let counter = 0;

    str.split('').forEach(s => {
        if (arr.indexOf(s.toLowerCase()) === -1) {
            counter = counter + 1;
        }
    });

    return counter;
}