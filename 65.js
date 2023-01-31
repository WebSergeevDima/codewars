function fakeBin(x) {
    return x.split('').map(n => {
        if (Number(n) < 5) {
            return '0';
        } else {
            return '1';
        }
    }).join('')
}