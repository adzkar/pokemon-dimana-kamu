import React from "react";
import { ListPokemonWrapper } from "./style";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMON_INFO } from "./query";
import { Pokemon, Footer } from "../../components";
import image from "../../assets/img";

const Index = () => {
  const { data, loading, error } = useQuery(GET_POKEMON_INFO);
  
  if (!loading && !error) {
    const results = data?.pokemons?.results || [];

    const pokemonRendered = results.map((item, i) => {
      return <Pokemon key={i} img={item.image} name={item.name} />;
    });

    return (
      <ListPokemonWrapper>
        {pokemonRendered}
        <Footer />
      </ListPokemonWrapper>
    );
  }
  return (
    <ListPokemonWrapper>
      <div className="container_loading">
        <img src={image.pikachu} alt={"Pikachu"} />
      </div>
    </ListPokemonWrapper>
  );
};

export default Index;
