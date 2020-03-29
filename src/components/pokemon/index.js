import React from "react";
import { PokemonWrapper } from "./style";

const Index = props => {
  return (
    <PokemonWrapper>
      <img src={props.img} alt={props.name} />
      <h3>{props.name}</h3>{" "}
    </PokemonWrapper>
  );
};

export default Index;
