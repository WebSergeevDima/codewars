function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    var clearBirds = [];

    clearBirds = birds.filter(item => {

        if (geese.indexOf(item) === -1) {
            return item;
        }

    });

    return clearBirds;

};