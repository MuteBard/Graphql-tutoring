const { gql } = require('apollo-server-express');
const mangaService = require('../../services/mangaService');

const mangaMutationTypeDef = gql`
    
    type Mutation {
        createManga(input: CreateMangaInput!): CreateMangaPayload!
    }

    input CreateMangaInput {
        author: String!
        title: String!
        chapters: Int
    }

    type CreateMangaPayload {
        manga : Manga
    }
`

const mangaMutationResolver = {
    Mutation: {
        createManga: async (root, {input}) => { return { manga: mangaService.createManga(input) }}
    }
}

module.exports = {
    mangaMutationTypeDef,
    mangaMutationResolver
}