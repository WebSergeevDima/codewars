function trim(str, size) {

    let newStr = '';

    if (str.length <= size) {
        return str;
    }

    if (size <= 3) {
        return str[0] + '...';
    }

    return str.slice(0, size - 3) + '...';

}