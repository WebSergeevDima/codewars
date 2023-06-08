function usdcny(usd) {

    const CNY = 6.75;

    const updateEndNumber = (num) => {

        const endNum = num.toString().split(".")[1];

        if (!endNum) {
            return `${num}.00`;
        }

        if (endNum.length !== 2) {
            return `${num}0`;
        }

        return num;

    }

    const converterToCNY = (usd * CNY).toString();

    return `${updateEndNumber(converterToCNY)} Chinese Yuan`;

}