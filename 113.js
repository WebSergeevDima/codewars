function twoHighest(arr) {

    const uniqueArr = arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    });

    const sortArr = uniqueArr.sort((a, b) => b - a);

    const resultArr = sortArr.slice(0, 2);

    return resultArr;

}