const { gql } = require('apollo-server-express');
const mangaService = require('../../services/mangaService');

const mangaQueryTypeDef = gql`
    type Manga {
        id: ID!
        author: String!
        title: String!
        chapters: Int
    }
    
    type Query {
        manga: [Manga]
    }
`

const mangaQueryResolver = {
    Query: {
        manga : async () => mangaService.getMangaList()
    }
}

module.exports = {
    mangaQueryTypeDef,
    mangaQueryResolver
}