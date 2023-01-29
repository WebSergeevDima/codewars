function duckDuckGoose(players, goose) {
    let counter = 1;

    for (let i = 0; i < goose; i++) {

        counter += players.length;

        if (counter > goose) {
            counter = goose - (counter - players.length);
            break;
        }
    }

    return players[counter]["name"];

}