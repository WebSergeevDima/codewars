function multiTable(number) {
    let str = '';
    for (let i = 1; i <= 10; i++) {
        str += `${i} * ${number} = ${i * number}`;

        if (i != 10) {
            str += '\n';
        }
    }

    return str;
}