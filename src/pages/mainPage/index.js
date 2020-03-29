import React from "react";
import { CenterLayout, Text } from "../../components";
import { ListPokemon } from "../../containers";
import { MainWrapper } from "./style";

const Index = () => {
  return (
    <MainWrapper>
      <CenterLayout>
        <Text.Header>Pokemon's</Text.Header>
        <ListPokemon />
      </CenterLayout>
    </MainWrapper>
  );
};

export default Index;
