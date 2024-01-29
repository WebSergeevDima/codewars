function highAndLow(numbers) {
    const sortNumbers = numbers.split(' ').sort((a, b) => +a - +b);

    return `${sortNumbers[sortNumbers.length - 1]} ${sortNumbers[0]}`;
}


console.log(highAndLow('2, 4, 44, 6, -3, 1, 33'));