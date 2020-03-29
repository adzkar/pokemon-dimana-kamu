import gql from "graphql-tag";

export const GET_POKEMON_INFO = gql`
  {
    pokemons(first: 60) {
      id
      number
      name
      image
      evolutions {
        id
        number
        name
        image
      }
    }
  }
`;
