const { gql } = require('apollo-server-express');
const animeService = require('../../services/animeService');

const animeMutationTypeDef = gql`
    type Mutation {
        createAnime(input: CreateAnimeInput!): CreateAnimePayload!
        updateAnime(input: UpdateAnimeInput!): UpdateAnimePayload!
        deleteAnime(input: DeleteAnimeInput!): DeleteAnimePayload!
    }

    input CreateAnimeInput {
        title: String!
        onGoing: Boolean
        episodes: Int
    }
    
    input UpdateAnimeInput {
        contentId: ID!
        title: String
        onGoing: Boolean
        episodes: Int
    }

    input DeleteAnimeInput {
        contentId: ID!
    }

    type CreateAnimePayload {
        anime : Anime!
    }

    type UpdateAnimePayload {
        anime : Anime!
    }

    type DeleteAnimePayload {
        anime : Anime!
    }
`

const animeMutationResolver = {
    Mutation: {
        createAnime: async (root, {input}) => { return { anime: animeService.createAnime(input) }},
        updateAnime: async (root, {input}) => { return { anime: animeService.updateAnime(input) }},
        deleteAnime: async (root, {input}) => { return { anime: animeService.deleteAnime(input) }}
    }
}

module.exports = {
    animeMutationTypeDef,
    animeMutationResolver
}
