const { gql } = require('apollo-server-express');
const mangaService = require('../../services/mangaService');

const mangaQueryTypeDef = gql`
    type Manga {
        contentId: ID!
        author: String!
        title: String!
        chapters: Int
    }
    
    type Query {
        manga(contentId: ID!): Manga
        mangas(filter: MangaFilterInput): [Manga]
    }

    input MangaFilterInput {
        title: SearchString 
        author: SearchString 
        chapters: SearchInt
    }

    input SearchString {
        value: String!
        searchType: StringSearchEnum!
    }

    input SearchInt {
        value: Int!
        searchType: NumericSearchEnum!
    }

    input SearchBoolean {
        value: Boolean!
        searchType: BooleanSearchEnum!
    }

    enum StringSearchEnum  {
        CONTAINS_ANY
        CONTAINS_ALL
        CONTAINS_PARTIAL
        CONTAINS_NONE_PARTIAL
        CONTAINS_NONE
    }

    enum NumericSearchEnum {
        GREATER_THAN
        LESS_THAN
        GREATER_THAN_OR_EQUAL
        LESS_THAN_OR_EQUAL
        IS_NOT 
    }
    
    enum BooleanSearchEnum {
        IS
    }
`

const mangaQueryResolver = {
    Query: {
        manga : async (root, {contentId}) => mangaService.getManga(contentId),
        mangas : async (root, {filter}) => mangaService.searchManga(filter)
    }
}

module.exports = {
    mangaQueryTypeDef,
    mangaQueryResolver
}