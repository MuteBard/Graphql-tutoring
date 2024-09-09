const { insertOne, findOne, findMany } = require('../helpers/entityManager')

const getAnime = async (contentId) => findOne('Anime', contentId);
const searchAnime = async (filter) => findMany('Anime', filter);
const createAnime = async (input) => insertOne('Anime', input);

module.exports = {
    getAnime,
    searchAnime,
    createAnime
}


