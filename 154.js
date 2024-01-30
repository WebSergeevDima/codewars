function removeRotten(bagOfFruits) {
    return bagOfFruits ? bagOfFruits.map(item => item.replace(/rotten/g, '').toLowerCase()) : [];
}