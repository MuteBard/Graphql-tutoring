const { gql } = require('apollo-server-express');
const mangaService = require('../../services/mangaService');

const mangaMutationTypeDef = gql`
    
    type Mutation {
        createManga(input: CreateMangaInput!): CreateMangaPayload!
        updateManga(input: UpdateMangaInput!): UpdateMangaPayload!
        deleteManga(input: DeleteMangaInput!): DeleteMangaPayload!
    }

    input CreateMangaInput {
        author: String!
        title: String!
        chapters: Int
    }
    
    input UpdateMangaInput {
        contentId: ID!
        author: String
        title: String
        chapters: Int
    }

    input DeleteMangaInput {
        contentId: ID!
    }

    type CreateMangaPayload {
        manga : Manga!
    }

    type UpdateMangaPayload {
        manga : Manga!
    }

    type DeleteMangaPayload {
        manga : Manga!
    }
`

const mangaMutationResolver = {
    Mutation: {
        createManga: async (root, {input}) => { return { manga: mangaService.createManga(input) }},
        updateManga: async (root, {input}) => { return { manga: mangaService.updateManga(input) }},
        deleteManga: async (root, {input}) => { return { manga: mangaService.deleteManga(input) }}
    }
}

module.exports = {
    mangaMutationTypeDef,
    mangaMutationResolver
}