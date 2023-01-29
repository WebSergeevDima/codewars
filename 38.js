function abbrevName(name) {
    return name.split(' ').map(item => item.toUpperCase()[0]).join('.').slice(0, 3);
}