const { gql } = require('apollo-server-express');
const animeService = require('../../services/animeService');

const animeMutationTypeDef = gql`
    type Mutation {
        createAnime(input: CreateAnimeInput!): CreateAnimePayload!
    }

    input CreateAnimeInput {
        title: String!
        onGoing: Boolean!
    }

    type CreateAnimePayload {
        anime : Anime
    }

    type Anime {
        id: ID!
        title: String!
        episodes: Int
        onGoing: Boolean!
    }
`

const animeMutationResolver = {
    Mutation: {
        createAnime: async (root, {input}) => { return { anime: animeService.createAnime(input) }}
    }
}

module.exports = {
    animeMutationTypeDef,
    animeMutationResolver
}
