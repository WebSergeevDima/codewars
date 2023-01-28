function findMultiples(integer, limit) {

    const arr = [];

    for (let i = 0; i < Math.floor(limit / integer); i++) {

        if (arr.length > 0) {
            arr.push(integer + arr[arr.length - 1]);
        } else {
            arr.push(integer);
        }
    }

    return arr;

}