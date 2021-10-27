import gql from "graphql-tag";

export const GET_POKEMON_INFO = gql`
  {
    pokemons(limit: 50, offset: 0) {
    count
    next
    previous
    status
    message
    results {
      url
      name
      image
    }
  }
  }
`;
