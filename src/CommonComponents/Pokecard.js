import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.div`
  width: auto;
  background-color: #f7f7f7;
  border-radius: 5px;
  padding: 5px;
`;

const Pokename = styled.p``;

const Pokeid = styled.p`
  font-weight: 700;
`;

const Pokeimage = styled.img`
  height: 50%;
  width: auto;
`;
const Poketype = styled.p`
  font-weight: 400;
  border-style: solid;
  border-width: 0.5px;
  border-radius: 5px;
  width: auto;
  display: inline;
  margin: auto;
  padding: 5px;
`;
const PokeTypes = styled.div`
  display: flex;
`;

const PokeLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Pokecard = ({ pokemon }) => (
  <PokeLink to={{ pathname: `/pokemon/${pokemon.id}` }}>
    <CardContainer>
      <Pokename>
        {String(pokemon.name).charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </Pokename>
      <Pokeid>#{pokemon.id}</Pokeid>
      <Pokeimage src={pokemon.sprites.front_default} />
      <PokeTypes>
        {pokemon.types.map((type) => {
          return <Poketype key={type.type.name}>{type.type.name}</Poketype>;
        })}
      </PokeTypes>
    </CardContainer>
  </PokeLink>
);

export { Pokecard };
