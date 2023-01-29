function getAverage(marks) {

    return Math.floor(marks.reduce((acc, item) => {
        return acc += item;
    }, 0) / marks.length)

}