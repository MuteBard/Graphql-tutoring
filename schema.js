
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');
const { animeQueryTypeDef, animeQueryResolver } = require('./schemas/Queries/animeQuerySchema');
const { mangaQueryTypeDef, mangaQueryResolver } = require('./schemas/Queries/mangaQuerySchema');
const { animeMutationTypeDef, animeMutationResolver } = require('./schemas/Mutations/animeMutationSchema');
const { mangaMutationTypeDef, mangaMutationResolver } = require('./schemas/Mutations/mangaMutationSchema');

const typeDefs = mergeTypeDefs([animeQueryTypeDef, mangaQueryTypeDef, animeMutationTypeDef, mangaMutationTypeDef ]);
const resolvers = mergeResolvers([animeQueryResolver, mangaQueryResolver, animeMutationResolver, mangaMutationResolver]);

module.exports = {
    typeDefs, 
    resolvers
};




