function rentalCarCost(d) {

    const price = 40;
    let sum = d * price;

    if (d >= 3 && d < 7) {
        sum -= 20;
    }

    if (d >= 7) {
        sum -= 50;
    }

    return sum;

}