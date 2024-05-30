const { gql } = require('apollo-server-express');

const mangaTypeDef = gql`
    type Manga {
        id: ID!
        author: String!
        title: String!
        pageNumber: Int
    }
    
    type Query {
        manga: String
    }
`

const mangaResolver = {
    Query: {
        manga : () => 'This is a manga'
    }
}


module.exports = {
    mangaTypeDef,
    mangaResolver
}