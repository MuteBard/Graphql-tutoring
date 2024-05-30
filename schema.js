
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');
const { animeTypeDef, animeResolver } = require('./schemas/animeSchema');
const { mangaTypeDef, mangaResolver } = require('./schemas/mangaSchema');

const typeDefs = mergeTypeDefs([animeTypeDef, mangaTypeDef]);
const resolvers = mergeResolvers([animeResolver, mangaResolver]);

module.exports = {
    typeDefs, 
    resolvers
};




