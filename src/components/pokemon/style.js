import styled from "styled-components";

export const PokemonWrapper = styled.div`
  display: inline-block;
  padding: 5px;
  background-color: var(--white);
  border-radius: 9px;
  margin-right: 10px;
  margin-bottom: 10px;

  img {
    widht: 100px;
    height: 100px;
    border-radius: 9px;
    margin-bottom: 10px;
  }
  h3 {
    font-weight: bold;
    line-height: 150%;
    text-align: center;
    font-size: 16px;
  }
`;
