function chromosomeCheck(sperm) {
    return (sperm[0] === 'Y' || sperm[1] === 'Y') ? "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter.";
}