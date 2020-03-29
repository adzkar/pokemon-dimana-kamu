import React from "react";
import { ListPokomonWrapper } from "./style";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMON_INFO } from "./query";
import { Pokemon } from "../../components";
import image from "../../assets/img";

const Index = () => {
  const { data, loading, error } = useQuery(GET_POKEMON_INFO);

  if (!loading && !error) {
    const pokemonsRendered = data.pokemons.map((item, i) => {
      return <Pokemon key={i} img={item.image} name={item.name} />;
    });
    return <ListPokomonWrapper>{pokemonsRendered}</ListPokomonWrapper>;
  }
  return (
    <ListPokomonWrapper>
      <div className="container_loading">
        <img src={image.pikachu} alt={"Pikachu"} />
      </div>
    </ListPokomonWrapper>
  );
};

export default Index;
