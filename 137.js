function doubleCheck(str) {

    let result = false;

    str.split('').forEach((item, index) => {
        if (index + 1 !== str.length && item.toUpperCase() == str[index + 1].toUpperCase()) {
            result = true;
        }
    });

    return result;
}