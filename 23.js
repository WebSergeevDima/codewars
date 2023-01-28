function toCsvText(array) {

    let str = '';

    for (let i = 0; i < array.length; i++) {

        for (let i2 = 0; i2 < array[i].length; i2++) {


            str += array[i][i2];



            if (i2 === array[i].length - 1 && (i2 !== array[i].length - 1 || i !== array.length - 1)) {

                str += '\n';

            }

            if (i2 !== array[i].length - 1) {


                str += ',';

            }

        }

    }

    return str;
}