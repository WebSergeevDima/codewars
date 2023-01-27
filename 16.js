function grow(x) {
    return x.reduce((acc, item) => {
        return acc * item;
    }, 1)
}