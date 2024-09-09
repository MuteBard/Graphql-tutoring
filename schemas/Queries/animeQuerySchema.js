const { gql } = require('apollo-server-express');
const animeService = require('../../services/animeService');

const animeQueryTypeDef = gql`
    type Anime {
        contentId: ID!
        title: String!
        episodes: Int
        onGoing: Boolean!
    }

    type Query {
        anime(contentId: ID!): Anime
        animes(filter: AnimeFilterInput): [Anime]
    }

    input AnimeFilterInput {
        title: SearchString
        onGoing: SearchBoolean
        episodes: SearchInt
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

const animeQueryResolver = {
    Query: {
        anime : async (root, {contentId}) => animeService.getAnime(contentId),
        animes : async (root, {filter}) => animeService.searchAnime(filter)
    }
}

module.exports = {
    animeQueryTypeDef,
    animeQueryResolver
}
