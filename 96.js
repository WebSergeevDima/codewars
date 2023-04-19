function billboard(name, price = 30) {

    let sum = 0;

    const arr = name.split('');

    arr.forEach(item => {
        sum += price;
    });

    return sum;

}