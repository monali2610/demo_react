import { gql } from "@apollo/client";

const GET_FILMS = gql`
  query Query($after: String, $before: String, $first: Int, $last: Int) {
    allFilms(after: $after, before: $before, first: $first, last: $last) {
      films {
        title
        director
        releaseDate
        speciesConnection {
          species {
            name
            classification
            homeworld {
              name
            }
          }
        }
      }
      pageInfo {
        startCursor
        hasNextPage
        hasPreviousPage
        endCursor
      }
    }
  }
`;

export default GET_FILMS;
