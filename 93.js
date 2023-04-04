function correctTail(bod, tail) {

    const sub = bod[bod.length - 1];

    if (sub === tail) {
        return true
    }
    return false;

}