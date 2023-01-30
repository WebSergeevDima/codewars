function removeEveryOther(arr) {

    return arr.filter((item, i) => {

        if (i % 2 == 0) {
            return item;
        }

    })
}