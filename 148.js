function reverseNumber(n) {
    const reverseStr = n.toString().split('').reverse()

    return +(reverseStr[reverseStr.length - 1] !== '-' ? reverseStr.join('') : 0 - +reverseStr.slice(0, -1).join(''));
}