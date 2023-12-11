var isEven = function (n) {
    return ((n / 2) + '').split('.').length > 1 ? false : true;
}