async function getAnimeList() {
    const animeList = [
        {
            id: 0,
            title: "One Piece",
            onGoing: true,
            episodes: 1108
        },
        {
            id: 1,
            title: "Demon Slayer",
            onGoing: true,
            episodes: 700
        },
        {
            id: 2,
            title: "Naruto",
            onGoing: true,
            episodes: 100
        }
];

    return animeList;
}

async function createAnime(input) {
    input.id = '999';
    return input;
}

module.exports = {
    getAnimeList,
    createAnime
}


