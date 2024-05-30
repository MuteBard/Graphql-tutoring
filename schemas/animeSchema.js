const { gql } = require('apollo-server-express');

const animeTypeDef = gql`
    type Anime {
        id: ID!
        episodes: Int
        onGoing: Boolean!
    }

    type Query {
        anime: String
    }
`

const animeResolver = {
    Query: {
        anime : () => 'This is an anime'
    }
}

module.exports = {
    animeTypeDef,
    animeResolver
}
