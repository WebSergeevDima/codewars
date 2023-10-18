function dadFilter(str) {

    let strTrim = str.trim();

    return strTrim.split('').map((item, index) => {
        if (item === ',' && strTrim[index + 1] === ',' && index + 1 !== strTrim.length) {
            return '';
        }

        if (index + 1 === strTrim.length && item === ',') {
            return '';
        }
        return item;
    }).join('');
}