function accum(s) {
    return s.split('').reduce((acc, item, index) => {
        let i = 0;

        if (index !== 0) {
            acc += '-';
        }

        acc += item.toUpperCase();

        while (index > i) {
            i++;
            acc += item.toLowerCase();
        }

        return acc;
    }, '');
}