const { gql } = require('apollo-server-express');
const mangaService = require('../services/mangaService');

const mangaTypeDef = gql`
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

const mangaResolver = {
    Query: {
        manga : async () => mangaService.getMangaList()
    }
}

module.exports = {
    mangaTypeDef,
    mangaResolver
}