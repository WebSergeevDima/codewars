function wordPattern(word) {

    const AZ = {};
    let newWord = '';
    let counter = 0;

    word.split('').forEach((item) => {

        if (AZ.hasOwnProperty(item.toLowerCase())) {
            newWord += `${AZ[item.toLowerCase()]}.`;
        } else {
            AZ[item.toLowerCase()] = counter;
            newWord += `${counter++}.`;
        }


    });

    return newWord.slice(0, -1);
}