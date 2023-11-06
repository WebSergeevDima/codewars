function isLucky(n) {

    let result = 0;

    ('' + n).split('').forEach(item => {
        result += +item;
    });

    return result === 0 || result % 9 === 0 ? true : false;

}