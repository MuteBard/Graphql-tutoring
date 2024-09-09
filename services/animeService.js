const { insertOne, updateOne, deleteOne, findOne, findMany } = require('../helpers/entityManager')

const getAnime = async (contentId) => findOne('Anime', contentId);
const searchAnime = async (filter) => findMany('Anime', filter);
const createAnime = async (input) => insertOne('Anime', input);
const updateAnime = async (input) => updateOne('Anime', input);
const deleteAnime = async (input) => deleteOne('Anime', input);

module.exports = {
    getAnime,
    searchAnime,
    createAnime,
    updateAnime,
    deleteAnime
}


