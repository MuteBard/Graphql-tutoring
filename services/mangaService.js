const { insertOne, updateOne, deleteOne, findOne, findMany } = require('../helpers/entityManager');

const getManga = async (contentId) => findOne('Manga', contentId);
const searchManga = async (filter) => findMany('Manga', filter);
const createManga = async (input) => insertOne('Manga', input);
const updateManga = async (input) => updateOne('Manga', input);
const deleteManga = async (input) => deleteOne('Manga', input);

module.exports = {
    getManga,
    searchManga,
    createManga,
    updateManga,
    deleteManga
}

