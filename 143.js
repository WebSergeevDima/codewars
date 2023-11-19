function findMissing(arr1, arr2) {
    arr2.forEach(item => arr1.splice(arr1.indexOf(item), 1));
    return arr1[0];
}