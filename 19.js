function saleHotdogs(n) {

    let price = 0;

    if (n < 5) {
        price = 100;
    }

    if (n >= 10) {
        price = 90;
    }

    if (n >= 5 && n < 10) {
        price = 95;
    }

    return price * n;

}