function cookingTime(eggs) {
    if (eggs === 0) {
        return 0;
    }

    if (eggs <= 8) {
        return 5;
    }

    return eggs % 8 === 0 ? (eggs / 8 * 5) : (Math.floor(eggs / 8) * 5 + 5);
}