function calculator(a, b, sign) {
    if (typeof a === 'number' &&
        typeof b === 'number' &&
        (sign === '+' || sign === '-' || sign === '/' || sign === '*')) {
        return eval(`${a}${sign}${b}`);
    }

    return 'unknown value';

}