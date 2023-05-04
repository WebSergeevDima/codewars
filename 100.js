const rps = (p1, p2) => {
    const win1 = "Player 1 won!";
    const win2 = "Player 2 won!";

    if (p1 === p2) {
        return 'Draw!';
    }

    if (p1 === 'scissors' && p2 === 'paper') {
        return win1;
    } else if (p1 === 'paper' && p2 === 'rock') {
        return win1;
    } else if (p1 === 'rock' && p2 === 'scissors') {
        return win1;
    }

    return win2;
};