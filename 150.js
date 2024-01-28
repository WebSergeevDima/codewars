function highAndLow(numbers) {
    const sortNumbers = numbers.split(' ').sort((a, b) => +a - +b);

    return `${sortNumbers[sortNumbers.length - 1]} ${sortNumbers[0]}`;
}