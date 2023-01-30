function noSpace(x) {
    return x.split('').filter(item => {
        if (item != ' ') {
            return item;
        }
    }).join('');
}