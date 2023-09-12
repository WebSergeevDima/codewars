var removeVowels = function (str) {

    ["a", "e", "i", "o", "u"].forEach((item) => {
        str = str.replaceAll(item, '');
    });

    return str;

}