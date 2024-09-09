const { insertOne, findOne, findMany } = require('../helpers/entityManager');

const getManga = async (contentId) => findOne('Manga', contentId);
const searchManga = async (filter) => findMany('Manga', filter);
const createManga = async (input) => insertOne('Manga', input);

module.exports = {
    getManga,
    searchManga,
    createManga
}

