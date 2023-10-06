function pluck(objs, name) {
    return objs.map((obj) => {
        return Object.keys(obj).indexOf(name) !== -1 ? obj[name] : undefined;
    });
}