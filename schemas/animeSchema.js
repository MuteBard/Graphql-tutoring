const { gql } = require('apollo-server-express');
const animeService = require('../services/animeService');

const animeTypeDef = gql`
    type Anime {
        id: ID!
        title: String!
        episodes: Int
        onGoing: Boolean!
    }

    type Query {
        anime: [Anime]
    }
`

const animeResolver = {
    Query: {
        anime : async () => animeService.getAnimeList()
    }
}

module.exports = {
    animeTypeDef,
    animeResolver
}
