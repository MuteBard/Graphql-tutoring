async function getMangaList() {
    const mangaList = [{
        id: 0,
        title: "Black Clover",
        author: "Yūki Tabata",
        chapters: 372
    }];

    return mangaList;
}

async function createManga(input) {
    input.id = '999';
    return input;
}

module.exports = {
    getMangaList,
    createManga
}

