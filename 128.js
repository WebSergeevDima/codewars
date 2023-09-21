function solve(s) {

    let sClone = s + ' ';
    let num = '';
    let maxNum = 0;

    sClone.split('').forEach(item => {
        if (item >= '0' && item <= '9') {
            num += item;
        } else {

            if (maxNum < +num) {
                maxNum = +num;
            }

            num = '';
        }
    })

    return maxNum;

};