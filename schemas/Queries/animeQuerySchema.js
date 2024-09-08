const { gql } = require('apollo-server-express');
const animeService = require('../../services/animeService');

const animeQueryTypeDef = gql`
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

const animeQueryResolver = {
    Query: {
        anime : async () => animeService.getAnimeList()
    }
}

module.exports = {
    animeQueryTypeDef,
    animeQueryResolver
}
