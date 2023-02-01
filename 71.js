var min = function (list) {

    let sum = list[0];

    list.forEach(item => {
        if (item < sum) {
            sum = item;
        }
    })

    return sum;
}

var max = function (list) {

    let sum = list[0];

    list.forEach(item => {
        if (item > sum) {
            sum = item;
        }
    })
    return sum;
}