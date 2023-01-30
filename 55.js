function padIt(str, n) {
    let left = Math.ceil(n / 2);
    let right = Math.floor(n / 2);
    let strNew = '';

    let i = 0;
    while (i < left) {
        strNew += '*';
        i++;
    }

    strNew += str;

    let i2 = 0;
    while (i2 < right) {
        strNew += '*';
        i2++;
    }

    return strNew;

}